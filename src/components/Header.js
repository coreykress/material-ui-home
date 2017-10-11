import React, { Component } from 'react';
import './../App.css';
import './Header.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };

        this.handleMenuTouch = this.handleMenuTouch.bind(this);
    }

    handleClose = () => this.setState({open: false});

    handleMenuTouch() {
        this.setState({
            open: !this.state.open,
        });
    }

    render() {
        return (
            <div className="Header">
                <AppBar
                    title={this.props.title}
                    iconClassNameRight= "muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleMenuTouch}
                    zDepth={0}
                    style={{position: "fixed", width:"100%"}}
                />
                <Drawer
                    docked={false}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <AppBar
                        title={this.props.title}
                        iconClassNameRight= "muidocs-icon-navigation-expand-more"
                        onLeftIconButtonTouchTap={this.handleMenuTouch}
                        zDepth={0}
                        style={{position: "fixed", width:"100%"}}
                    />
                    <div className="link-container">
                        <Link style={{ textDecoration: 'none' }} to='/'>
                            <MenuItem onClick={this.handleClose}>
                                Home
                            </MenuItem>
                        </Link>

                        <Link style={{ textDecoration: 'none' }} to='/about'>
                            <MenuItem onClick={this.handleClose}>
                                About
                            </MenuItem>
                        </Link>

                        <Link style={{ textDecoration: 'none' }} to='/experience'>
                            <MenuItem onClick={this.handleClose}>
                                Experience
                            </MenuItem>
                        </Link>

                        <Link style={{ textDecoration: 'none' }} to='/projects'>
                            <MenuItem onClick={this.handleClose}>
                                Projects
                            </MenuItem>
                        </Link>

                        <Link style={{ textDecoration: 'none' }} to='/links'>
                            <MenuItem onClick={this.handleClose}>
                                Links
                            </MenuItem>
                        </Link>
                    </div>
                </Drawer>
            </div>
    );
  }
}

export default Header;
