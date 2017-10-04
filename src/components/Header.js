import React, { Component } from 'react';
import './../App.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

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
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleMenuTouch}
                />
                <Drawer
                    docked={false}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                  <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
                  <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
                </Drawer>
            </div>
    );
  }
}

export default Header;
