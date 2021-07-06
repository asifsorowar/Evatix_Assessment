import React from "react";
import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query addUser($username: String!) {
    user(login: $username) {
      repositories(first: 5, isFork: false) {
        nodes {
          name
          url
          owner {
            login
          }
        }
      }
    }
  }
`;

export const GET_REPOSITORY_INFO = gql`
  query addUser($username: String!, $reponame: String!) {
    user(login: $username) {
      repository(name: $reponame) {
        name
        stargazerCount
        stargazers(first: 5) {
          nodes {
            name
          }
        }
        commitComments {
          totalCount
        }
      }
    }
  }
`;
