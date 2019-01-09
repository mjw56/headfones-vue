export const SERVER_URL = process.env.NODE_ENV === 'production'
    ? process.env.VUE_APP_PROD_SERVER
    : process.env.VUE_APP_DEV_SERVER;
