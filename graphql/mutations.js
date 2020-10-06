import gql from "graphql-tag";

export function loginUser(username, password) {
  return gql`
    mutation loginUser {
      loginUser(
        input: {
          username: "${username}",
          password: "${password}"
        }
      ) 
    }
  `;
}
