import React from 'react';

import  Header from './components/Header'
import  Tabs from './components/Tabs'
import  HomeTab from './components/HomeTab'
import  PhotoTab from './components/PhotoTab'
import  PriceTab from './components/PriceTab'
import  ContactsTab from './components/ContactsTab'

import '../public/styles/home-page.less'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'home',
        };

        this.tabs = [
            {
                id: 'home',
                name: 'O nas'
            },
            {
                id: 'photo',
                name: 'Photos'
            },
            {
                id: 'price',
                name: 'Cennik'
            },
            {
                id: 'contacts',
                name: 'Contacts'
            }
        ];
    }

    changeTab(activeTab) {
        this.setState({activeTab: activeTab});
    }

    getTabContent(activeTab) {
        switch (this.state.activeTab) {
            case 'home':
                return <HomeTab/>;
            case 'photo':
                return <PhotoTab/>;
            case 'price':
                return <PriceTab/>;
            case 'contacts':
                return <ContactsTab/>;
        }
        this.setState({activeTab: activeTab});
    }


    render() {
        return (
            <div>
                <Header/>
                <Tabs activeTab={this.state.activeTab}
                      tabs={this.tabs}
                      changeTab={this.changeTab.bind(this)}/>
                {this.getTabContent()}
            </div>
        );
    }
}

export default App;

