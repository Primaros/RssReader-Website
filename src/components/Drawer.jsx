import React from 'react';
import  { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { Home, TurnedIn, Add, Menu, ArrowRight } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240

const styles = theme => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
})

const ListButton = ({value, handler, selected, icon}) => (
    <ListItem button selected={value === selected}>
        <ListItemIcon>
            {icon && icon}
        </ListItemIcon>
        <ListItemText primary={value} onClick={()=>handler(value)}/>
    </ListItem>
)

class RssList extends React.PureComponent {
    constructor(props) {
        super(props)
        this.items = this.props.list
    }

    _onSelect = (value) => {
        this.props.handler(value)
    }

    render() {
        return (
            <List component="nav">
            {
                this.items.map(item => (
                    <ListButton key={item.value} value={item.value} selected={this.props.selected} handler={this._onSelect} icon={item.icon}/>
                ))
            }
            </List>
        )
    }    
}

class RssDrawer extends React.PureComponent {
    constructor(props) {
        super(props)
        this.listTop = [{value:'Home', icon:<Home />}, {value:'Saved For Later', icon:<TurnedIn />}, {value:'Add Content', icon:<Add />}]
        this.listHome = [{value:'All', icon:<Menu />}, {value:'C', icon:<ArrowRight />}, {value:'JS', icon:<ArrowRight />}]
        this.classes = props.classes;
    }

    render() {
        return (
            <Drawer variant="persistent" anchor="left" open={true} className={this.classes.drawer}>
                <RssList list={this.listTop} handler={this.props.changeOnlget} selected={this.props.onglet} />
                <Divider />
                {this.props.onglet === "Home" && <RssList list={this.listHome} handler={this.props.changeSubOnlget} selected={this.props.subOnglet} />}
            </Drawer>
        )
    }
}

export default withStyles(styles)(RssDrawer);