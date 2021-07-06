import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Card from "./components/Card";
import "./style/nicepage.css";
import { useGetRepositories } from "./graphql/useGetRepositories";

function App() {
  const [pageLink, setPageLink] = useState("");
  const [selectedRepo, setSelectedRepo] = useState({ name: "" });

  const [loadData, { called, data, error }] = useGetRepositories(pageLink);
  // if (error) {
  //   alert("something went wrong!!");
  // }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    loadData();
  };

  const handleRepoClick = (repo: any) => {
    setSelectedRepo(repo);
  };

  const location = useLocation();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./nicepage.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [location.pathname]);

  return (
    <Switch>
      <Route path="/" exact>
        <div className="u-body">
          <Home
            pageLink={pageLink}
            setPageLink={setPageLink}
            handleSubmit={handleSubmit}
            data={data?.user.repositories.nodes}
            handleRepoClick={handleRepoClick}
          />
        </div>
      </Route>
      <Route path="/user-card/:name">
        <Card selectedRepo={selectedRepo} />
      </Route>
    </Switch>
  );
}

export default App;
