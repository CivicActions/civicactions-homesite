import React, {useState} from 'react';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import ReactMarkdown from "react-markdown";
import LinkButton from "./link-button";
import PropTypes from "prop-types";
import TabMobile from "./tabmobile";

const TabSection = ({ tabs }) => {

    return (
        <Tabs>
            <TabList >
                {tabs.map((tab, index) => (
                    <Tab><h2>{tab.tab_header}</h2>
                        <div className='arrow-down'></div>
                        <div className='arrow-up'></div>
                    </Tab>
                ))}

            </TabList>
            {tabs.map((tab, index) => (
                <TabPanel>
                    {/*// Tabs component comes from https://www.digitalocean.com/community/tutorials/react-tabs-component*/}
                    {tab.tabs_section.map((section, index) => (
                        <div className='tab-section' label={section.header}>
                            <h3 className='h5'>{section.header}</h3>
                            <ReactMarkdown className='body' children={section.body}/>
                        </div>
                    ))}
                    <div className='cta-tab-section' label={tab.cta_tab.header}>
                        <h3 className='h5'>{tab.cta_tab.header}</h3>
                        <div className='link-button'><LinkButton text={tab.cta_tab.button_text}
                                                                 src={tab.cta_tab.button_link}/></div>
                    </div>
                </TabPanel>
            ))}
        </Tabs>
    );
};
export default TabSection;
TabSection.propTypes = {
    tabs:  PropTypes.array,
};