import React from 'react';
import RssDrawer from '../components/Drawer';
import RssAppBar from '../components/AppBar';

export default class Home extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            onglet: 'Home',
            subOnglet: 'All',
        }
    }
 
    _changeOnlget = (value) => {
        this.setState({ onglet: value })
    }

    _changeSubOnlget = (value) => {
        this.setState({ subOnglet: value })
    }

    render() {
        return (
            <div>
                <RssDrawer onglet={this.state.onglet} subOnglet={this.state.subOnglet} changeOnlget={this._changeOnlget} changeSubOnlget={this._changeSubOnlget} />
                <div>
                    <RssAppBar title={this.state.onglet}/>
                    <p>Cool</p>
                </div>
            </div>
        )
    }
}