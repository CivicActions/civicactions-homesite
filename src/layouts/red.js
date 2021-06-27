import '../sass/styles.scss';
import React, { useState } from 'react';
import Header from '../components/red-header.js';
import Footer from '../components/footer.js';
import Sidebar from '../components/sidebar.js';
import { Helmet } from 'react-helmet';
import { SkipNavLink } from '../components/skip-nav';

const RedLayout = ({ children }) => {
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
        <div className='red-rectangle'></div>
        {/*<img className="red-rectangle" src={redRectangle} alt="background red color"></img>*/}
        <Header />
        <main id='main-content' className='red--header' tabIndex='-1'>
          <div>{children}</div>
        </main>
        <Footer />
      </div>
      <Sidebar hidden={hideSidebar} close={closeSidebar} />
    </div>
  );
};

export default RedLayout;
