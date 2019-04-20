import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton } from '@material-ui/core';
import { Refresh, Search } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { connect } from 'react-redux';

const styles = theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing.unit * 3,
          width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: 200,
        },
    },
    barcontent: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    grow: {
        flexGrow: 1,
    },
})

const SearchBar = ({classes}) => {
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <Search />
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
            />
        </div>
    )
}

const IconsBar = ({classes}) => {
    return (
        <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
                <Refresh />
            </IconButton>
        </div>
    )
}

class RssAppBar extends React.PureComponent {
    
    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="fixed" style={{ width: `calc(100% - 215px)`}}>
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit">
                            { this.props.title }
                        </Typography>
                        <div className={classes.barcontent}>
                            <div className={classes.grow} />
                            { (this.props.title === 'Home' || this.props.title === 'Saved For Later') && <SearchBar classes={classes} />}
                            <div className={classes.grow} />
                            { this.props.title === 'Home' && <IconsBar classes={classes} />}
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

const mapStateToProps = state => ({ title: state.page.onglet });

export default connect(mapStateToProps)(withStyles(styles)(RssAppBar));