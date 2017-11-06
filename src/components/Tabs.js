import React from 'react';

const Tabs = (props) => {
    const showData = (e) => {
        props.changeTab(e.target.id);
    };

    const tabs = props.tabs.map((tab) =>
        <a id={tab.id}
           key={tab.id}
           className={`btn ${props.activeTabId === tab.id ? 'active blue' : ''}`}
           onClick={showData}>
            {tab.name}
        </a>
    );

    return (
        <div className="container">
            <div className="default-tabs" style={{width: props.width || (150 * props.tabs.length + 'px')}}>
                {tabs}
            </div>
        </div>
    );
};

export default Tabs;
