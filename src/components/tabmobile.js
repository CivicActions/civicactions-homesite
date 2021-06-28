import React from 'react';
import ReactMarkdown from "react-markdown";
import LinkButton from "./link-button";
import PropTypes from "prop-types";

const TabMobile = ({ tabs }) => {

    let check;
    const [checked,setIsChecked] = React.useState(false);

    const callback = (e) => {

        if (e.target.value !== 'undefined') {
            if (checked === e.target.value) {
                // The button was already selected.
                setIsChecked('_0');
                check = '_0';
            } else {
                setIsChecked(`_${e.target.value}`);
                check = `_${e.target.value}`;
            }
        }

    };
    return (
        <div className='tab-mobile'>
                <select name='tabs' onChange={callback}>
                    {tabs.map((tab, index) => (
                        <option value={index}>{tab.tab_header}</option>
                    ))}

                </select>
                 <div className='arrow-down'></div>

            {tabs.map((tab, index) => (
                <div className={checked ? checked : '_0'}>
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
