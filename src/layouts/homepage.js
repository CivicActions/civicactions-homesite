import '../sass/styles.scss';
import React, { useState } from 'react';
import Banner from '../components/banner.js';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Sidebar from '../components/sidebar.js';
import { SkipNavLink } from '../components/skip-nav';

const HomepageLayout = ({ children }) => {
  const [hideSidebar, setHideSidebar] = useState(true);

  let closeSidebar = () => setHideSidebar(true);
  return (
    <div style={{ position: 'relative' }}>
      <div>
        <SkipNavLink />
          <Banner
            boldText={`LOOKING FOR DITAP TRAINING?`}
            regularText='Start here.'
            link='/services/ditap'
          />
        <Header />
        <main id='main-content' tabIndex='-1'>
          <div>{children}</div>
        </main>
        <Footer />
      </div>
      <Sidebar hidden={hideSidebar} close={closeSidebar} />
    </div>
  );
};

export default HomepageLayout;
