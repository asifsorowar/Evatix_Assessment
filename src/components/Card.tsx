import React, { useEffect, useState } from "react";
import { useGetRepositoryInfo } from "../graphql/useGetRepositories";
import "../style/card.css";

const Card = (props: any) => {
  const { called, data, error } = useGetRepositoryInfo(
    props.selectedRepo?.owner.login,
    props.selectedRepo?.name
  );
  // if (error) {
  //   alert("something went wrong!!");
  // }

  return (
    <section
      className="u-clearfix u-palette-5-dark-1 u-section-1"
      id="sec-466f"
    >
      <div className="u-clearfix u-sheet u-sheet-1">
        <div className="u-container-style u-group u-palette-5-dark-2 u-radius-18 u-shape-round u-group-1">
          <div className="u-container-layout u-container-layout-1">
            <h5 className="u-custom-font u-font-montserrat u-text u-text-default u-text-grey-25 u-text-1">
              Repo Name: {data?.user.repository.name}
            </h5>
            <h5 className="u-custom-font u-font-montserrat u-text u-text-default u-text-grey-25 u-text-3">
              No of Stars: {data?.user.repository.stargazerCount}
            </h5>
            <h5 className="u-custom-font u-font-montserrat u-text u-text-default u-text-grey-25 u-text-5">
              Top 5 Star Gazers:
            </h5>
            {data?.user.repository.stargazers.nodes.map((gazer: any) => (
              <h5 className="u-custom-font u-font-montserrat u-text u-text-default u-text-grey-25 u-text-6">
                Username: {gazer.name}
              </h5>
            ))}
            <h5 className="u-custom-font u-font-montserrat u-text u-text-default u-text-grey-25 u-text-3">
              No of Commits:{" "}
              {data?.user.repository.defaultBranchRef.target.history.totalCount}
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
