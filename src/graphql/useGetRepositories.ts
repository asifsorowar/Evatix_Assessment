import React from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_REPOSITORIES, GET_REPOSITORY_INFO } from "./queries";

export const useGetRepositories = (username: String) => {
  return useLazyQuery(GET_REPOSITORIES, {
    variables: { username },
  });
};

export const useGetRepositoryInfo = (username: String, reponame: String) => {
  return useQuery(GET_REPOSITORY_INFO, {
    variables: { username, reponame },
  });
};
