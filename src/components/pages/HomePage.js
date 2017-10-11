import React, { Component } from 'react';
import './../../App.css';
import './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div className="home-page page">
                <div className="home-display">
                    <h1>Corey Kress</h1>
                    <h3>Software Developer</h3>
                </div>
                <div className="home-tag-section">
                    <p className="home-tagline">Buffalo Native. Full stack web Developer</p>
                </div>
            </div>
    );
  }
}

export default HomePage;
