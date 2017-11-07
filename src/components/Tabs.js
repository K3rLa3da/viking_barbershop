import React from 'react';
import '../../public/styles/components/tabs.less'

const Tabs = (props) => {
    const showData = (e) => {
        props.changeTab(e.target.id);
    };

    const tabs = props.tabs.map((tab) =>
        <div id={tab.id}
             key={tab.id}
             className={`${props.activeTab === tab.id ? 'active-tab' : ''}`}
             onClick={showData}>
            {tab.name}
        </div>
    );

    return (
        <div className="tabs-container">
            <div className="default-tabs">
                {tabs}
            </div>
        </div>
    );
};

export default Tabs;
