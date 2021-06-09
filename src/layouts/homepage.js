import '../sass/styles.scss';
import React, { useState } from 'react';
import Banner from '../components/banner.js';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Sidebar from '../components/sidebar.js';
import { SkipNavLink } from '../components/skip-nav';
import {Helmet} from "react-helmet";

const HomepageLayout = ({ children }) => {
  const [hideSidebar, setHideSidebar] = useState(true);
  let openSidebar = () => setHideSidebar(false);
  let closeSidebar = () => setHideSidebar(true);
  return (
    <div style={{ position: 'relative' }}>
      <Helmet
          htmlAttributes={{
            lang: 'en',
          }}
      />
      <div>
        <SkipNavLink id='main-content' />
        <Banner
          boldText='We’re hiring! '
          regularText='View open positions here'
          link='/careers#open-positions'
        />
        <Header />
        <main id='main-content'>
          <div>{children}</div>
        </main>
        <Footer />
      </div>
      <Sidebar hidden={hideSidebar} close={closeSidebar} />
    </div>
  );
};

export default HomepageLayout;
