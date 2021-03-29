import "../sass/styles.scss";
import React, { useEffect, useRef } from "react";
import GeneralLayout from "../layouts/general";

const ServicesPage = ({ data }) => {
  return (
    <GeneralLayout>
      <section className="services__hero-section">
        <div className="inner">
          <h2>Government services that build public trust</h2>
          <div className="body">
            At its core, digital transformation is about improving the customer
            experience of government. Public services should be accessible and
            secure, with human needs at the forefront.
          </div>
          <div className="body">
            Using technology and design as a means to that end, we partner with
            your agency to help you plan and build modern systems that work
            efficiently for your staff and the public, increasing trust and
            satisfaction for those you serve.
          </div>
        </div>
      </section>
    </GeneralLayout>
  );
};

export default ServicesPage;
