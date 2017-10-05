import React, { Component } from 'react';
import './../App.css';
import './Header.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
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
                    title="Corey Kress"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleMenuTouch}
                />
                <Drawer
                    docked={false}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                  <Link to='/'><MenuItem onClick={this.handleClose}>Home</MenuItem></Link>
                  <Link to='/about'><MenuItem onClick={this.handleClose}>About</MenuItem></Link>
                  <Link to='/experience'><MenuItem onClick={this.handleClose}>Experience</MenuItem></Link>
                  <Link to='/projects'><MenuItem onClick={this.handleClose}>Projects</MenuItem></Link>
                  <Link to='/links'><MenuItem onClick={this.handleClose}>Links</MenuItem></Link>
                </Drawer>
            </div>
    );
  }
}

export default Header;
