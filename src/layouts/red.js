import '../sass/styles.scss';
import React, { useState } from 'react';
import Banner from '../components/banner.js';
import Header from '../components/red-header.js';
import Footer from '../components/footer.js';
import Sidebar from '../components/sidebar.js';
import redRectangle from "../files/images/red-rectangle.svg";
import { Helmet } from "react-helmet"

const RedLayout = ({ children }) => {
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
                <img className='red-rectangle' src={redRectangle} alt='background red color'></img>
                <Header onMenuClick={openSidebar} mobileMenuHiddenBool={hideSidebar} />
                <main>
                    <div>{children}</div>
                </main>
                <Footer />
            </div>
            <Sidebar hidden={hideSidebar} close={closeSidebar} />
        </div>
    );
};

export default RedLayout;
