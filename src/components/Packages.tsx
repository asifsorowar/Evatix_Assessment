import React from "react";
import "../style/packages.css";
import Card from "./Card";

const Packages = () => {
  return (
    <section className="packages p-8 md:px-20 lg:p-20">
      <div className="container text-center">
        <div>
          <h1 className="header-my border-b-2 inline-block p-1 font-bold text-2xl">
            Packages
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-7">
          <Card
            header="GETTING STARTED"
            title="Singularity"
            details="This package will suit you if you want a single page  simple website for you product. It  will cover only one web UI.  You can  revise the design for 2 times  after  the initial draft  discussion session…"
          />
          <Card
            header="BUSINESS WORKFLOW"
            title="Plurality"
            details="This package will suit you if you want a single page  simple website for you product. It  will cover only one web UI.  You can  revise the design for 2 times  after  the initial draft  discussion session…"
          />
          <Card
            header="INTERACTIONS"
            title="Professional"
            details="This package will suit you if you want a single page  simple website for you product. It  will cover only one web UI.  You can  revise the design for 2 times  after  the initial draft  discussion session…"
          />
        </div>
      </div>
    </section>
  );
};

export default Packages;
