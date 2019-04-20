import React from 'react';
import RssDrawer from '../components/Drawer';
import RssAppBar from '../components/AppBar';

export default class Home extends React.PureComponent {

    render() {
        return (
            <div>
                <RssDrawer />
                <div>
                    <RssAppBar />
                    <p>Cool</p>
                </div>
            </div>
        )
    }
}