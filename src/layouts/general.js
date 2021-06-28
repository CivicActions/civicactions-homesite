import '../sass/styles.scss';
import React, { useState } from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Sidebar from '../components/sidebar.js';
import { Helmet } from 'react-helmet';
import { SkipNavLink } from '../components/skip-nav';

const GeneralLayout = ({ children }) => {
  const [hideSidebar, setHideSidebar] = useState(true);

  let closeSidebar = () => setHideSidebar(true);
  return (
    <div style={{ position: 'relative' }}>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      />
      <div>
        <SkipNavLink />
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

export default GeneralLayout;
