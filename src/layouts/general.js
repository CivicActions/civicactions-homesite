import "../sass/styles.scss";
import React, { useEffect, useState } from "react";
import Banner from "../components/banner.js";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import Sidebar from "../components/sidebar.js";

const GeneralLayout = ({ children }) => {
  const [hideSidebar, setHideSidebar] = useState(true);
  let openSidebar = () => setHideSidebar(false);
  let closeSidebar = () => setHideSidebar(true);
  return (
    <div style={{ position: "relative" }}>
      <div>
        <Banner
          boldText="We’re hiring! "
          regularText="View open positions here"
        />
        <Header onMenuClick={openSidebar} />
        <main>
          <div>{children}</div>
        </main>
        <Footer />
      </div>
      <Sidebar hidden={hideSidebar} close={closeSidebar} />
    </div>
  );
};

export default GeneralLayout;
