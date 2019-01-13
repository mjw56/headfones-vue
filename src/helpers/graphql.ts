import { GraphQLClient } from 'graphql-request';
import { SERVER_URL } from '../helpers/constants';

const client = new GraphQLClient(`${SERVER_URL}/graphql`, {
  headers: { },
  credentials: 'include'
});

export {
    client
};
