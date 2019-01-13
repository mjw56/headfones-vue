import { getCookie } from '../helpers/cookies';
import { SERVER_URL } from '../helpers/constants';

declare global {
    interface Window { Spotify: any; onSpotifyWebPlaybackSDKReady: any; }
}
window.onSpotifyWebPlaybackSDKReady = window.onSpotifyWebPlaybackSDKReady || {};

interface PlayerState {
    position: number;
    duration: number;
    track_window: any;
}

class Player {
    private player: any = null;
    private deviceId: any = '';

    public embed() {
        const script = document.createElement('script');
        script.src = 'https://sdk.scdn.co/spotify-player.js';
        script.async = true;
        window.onSpotifyWebPlaybackSDKReady = () => {
            if (!getCookie('jwt')) {
                return;
            }
            this.init();
        };
        document.body.appendChild(script);
    }

    public play(uri: string) {
        let payload: any = null;
        if (uri.indexOf('album') > -1 || uri.indexOf('playlist') > -1) {
            payload = { context_uri: uri };
        } else {
            // TODO: other URI use cases?
            payload = { uris: [uri] };
        }
        const {
            _options: { getOAuthToken, id },
        } = this.player;

        getOAuthToken((token: string) => {
            fetch(
                `https://api.spotify.com/v1/me/player/play?device_id=${id}`,
                {
                    body: JSON.stringify(payload),
                    headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                method: 'PUT',
            });
        });
    }

    private init() {
        this.player = new window.Spotify.Player({
            getOAuthToken: async (cb: any) => {
                const user = await fetch(`${SERVER_URL}/token`, { credentials: 'include' }).then(
                    (res) => res.json()
                );
                cb(user.accessToken);
            },
            name: 'headfon.es',
            volume: 0.3,
        });

        this.setupListeners();
        this.player.connect();
    }

    private setupListeners() {
        this.player.addListener('ready', ({ device_id }: any) => {
            this.deviceId = device_id;
        });
        this.player.addListener('not_ready', ({ device_id }: any) => {
            console.log('Device ID has gone offline', device_id);
        });
        this.player.addListener('player_state_changed', (playerState: PlayerState) => {
            const { track_window, duration, position } = playerState;
            console.log('Currently Playing', track_window);
            console.log('Position in Song', position);
            console.log('Duration of Song', duration);
        });
        this.player.on('initialization_error', (event: { message: string }) => {
            console.error('Failed to initialize', event.message);
        });
        this.player.on('authentication_error', (event: { message: string }) => {
            console.error('Failed to authenticate', event.message);
        });
        this.player.on('account_error', (event: { message: string }) => {
            console.error('Failed to validate Spotify account', event.message);
        });
        this.player.on('playback_error', (event: { message: string }) => {
            console.error('Failed to perform playback', event.message);
        });
    }

    private getCurrentState() {
        this.player.getCurrentState().then((state: PlayerState) => {
            if (!state) {
                console.error('User is not playing music through the Web Playback SDK');
                return;
            }
            const {
                current_track,
                next_tracks: [next_track]
            } = state.track_window;
            console.log('Currently Playing', current_track);
            console.log('Playing Next', next_track);
        });
    }

    private setName(name: string) {
        this.player.setName(name).then(() => {
            console.log('Player name updated!');
        });
    }

    private getVolume() {
        this.player.getVolume().then((volume: number) => {
            return volume * 100;
        });
    }

    private setVolume(volume: number) {
        this.player.setVolume(volume).then(() => {
            console.log('Volume updated!');
        });
    }

    private pause() {
        this.player.pause().then(() => {
            console.log('Paused!');
        });
    }

    private resume() {
        this.player.resume().then(() => {
            console.log('Resumed!');
        });
    }

    private togglePlay() {
        this.player.togglePlay().then(() => {
            console.log('Play Toggled!');
        });
    }

    private seek(position: number) {
        this.player.seek(position).then(() => {
            console.log(`Changed position to ${position}!`);
        });
    }

    private previousTrack() {
        this.player.previousTrack().then(() => {
            console.log('Set to previous track!');
        });
    }

    private nextTrack() {
        this.player.nextTrack().then(() => {
            console.log('Skipped to next track!');
        });
    }
}

const player = new Player();
export default player;
