import React from 'react';

import  Header from './components/Header'
import  Tabs from './components/Tabs'

import '../public/styles/home-page.less'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'home',
        }

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
                name: 'Price'
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


    render() {
        return (
            <div>
                <Header/>
                <Tabs activeTab={this.state.activeTab}
                      tabs={this.tabs}
                      changeTab={this.changeTab.bind(this)}/>
            </div>
        );
    }
}

export default App;

