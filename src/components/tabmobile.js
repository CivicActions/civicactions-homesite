import React, {useState, useEffect} from 'react';
import ReactMarkdown from "react-markdown";
import LinkButton from "./link-button";
import PropTypes from "prop-types";

const TabMobile = ({ tabs }) => {
    console.log(tabs);
    let check;
    const [checked,setIsChecked] = React.useState('0');
    const callback = (e) => {
        console.log('test');
        console.log(e);
        if (e.target.value !== 'undefined') {
            if (checked === e.target.value) {
                // The button was already selected.
                this.setIsChecked('0');
                check = false;
            } else {
                setIsChecked(e.target.value);
                check = true;
            }
        }
    };
    // useEffect(checked);
    return (
        <div className='tab-mobile'>
                <select name='tabs' onChange={callback}>
                    {tabs.map((tab, index) => (
                        <option value={index}>{tab.tab_header}</option>
                    ))}
                </select>

            {tabs.map((tab, index) => (
                <div className={checked === index ? 'checked' : 'not-checked'}>
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
                </div>
            ))}
        </div>
    );
};
export default TabMobile;
TabMobile.propTypes = {
    tabs:  PropTypes.array,
};
