import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";

const Home = (props: any) => {
  return (
    <section className="u-clearfix u-section-1" id="sec-8bf7">
      <div className="u-clearfix u-grey-75 u-layout-wrap u-layout-wrap-1">
        <div className="u-layout">
          <div className="u-layout-row">
            <div className="u-container-style u-layout-cell u-palette-5-dark-1 u-size-4 u-layout-cell-1">
              <div className="u-container-layout u-container-layout-1">
                <img
                  className="u-image u-image-default u-preserve-proportions u-image-1"
                  src={process.env.PUBLIC_URL + "images/new_task_24dp2x.png"}
                  alt=""
                  data-image-width="48"
                  data-image-height="48"
                />
                <img
                  className="u-image u-image-default u-preserve-proportions u-image-2"
                  src={
                    process.env.PUBLIC_URL + "images/notifications_24dp2x.png"
                  }
                  alt=""
                  data-image-width="48"
                  data-image-height="48"
                />
                <img
                  className="u-image u-image-default u-preserve-proportions u-image-3"
                  src={process.env.PUBLIC_URL + "images/home_48dp2x.png"}
                  alt=""
                  data-image-width="96"
                  data-image-height="96"
                />
                <img
                  className="u-image u-image-default u-preserve-proportions u-image-4"
                  src={process.env.PUBLIC_URL + "images/search_24dp2x.png"}
                  alt=""
                  data-image-width="48"
                  data-image-height="48"
                />
                <img
                  className="u-image u-image-default u-preserve-proportions u-image-5"
                  src={process.env.PUBLIC_URL + "images/user_48dp2x.png"}
                  alt=""
                  data-image-width="96"
                  data-image-height="96"
                />
              </div>
            </div>
            <div className="u-container-style u-layout-cell u-palette-5-dark-3 u-size-56 u-layout-cell-2">
              <div className="u-container-layout u-container-layout-2">
                <div className="u-palette-5-dark-2 u-radius-16 u-shape u-shape-round u-shape-1"></div>
                <div
                  className="u-custom-color-4 u-radius-25 u-shape u-shape-round u-shape-2"
                  data-href="/card.html"
                  data-page-id="486990"
                ></div>
                <div className="u-custom-color-5 u-radius-25 u-shape u-shape-round u-shape-3"></div>
                <div className="u-custom-color-5 u-radius-25 u-shape u-shape-round u-shape-4"></div>
                <h4 className="u-custom-font u-font-montserrat u-text u-text-grey-25 u-text-1">
                  GIT REPOS
                </h4>
                {props.data?.map((repo: any) => (
                  <Link
                    to={`/user-card/${repo.name}`}
                    key={repo.name}
                    onClick={() => props.handleRepoClick(repo)}
                  >
                    <h4 className="">Repo Name: {repo.name}</h4>
                  </Link>
                ))}

                <h6 className="u-custom-font u-font-montserrat u-text u-text-palette-5-base u-text-7">
                  + Add
                </h6>

                <div>
                  <input
                    placeholder="Enter Github page link"
                    className="u-palette-4-light-3 u-radius-45 u-shape u-shape-round u-shape-5"
                    value={props.pageLink}
                    type="text"
                    onChange={(e) => props.setPageLink(e.target.value)}
                  />
                  <a
                    onClick={props.handleSubmit}
                    style={{ marginTop: "100px" }}
                    className="u-btn u-button-style u-none u-text-hover-palette-2-base u-text-palette-1-base u-btn-1"
                  >
                    <span className="u-text-palette-4-light-1">
                      Find repos now&nbsp;
                    </span>
                    <span className="u-text-palette-4-light-1"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
