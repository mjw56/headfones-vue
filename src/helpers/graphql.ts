import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(`http://localhost:3004/graphql`, {
  headers: { },
  credentials: 'include'
});

export {
    client
};
