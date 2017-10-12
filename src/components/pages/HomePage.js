import React, { Component } from 'react';
import './../../App.css';
import './HomePage.css';

class HomePage extends Component {
    componentDidMount() {
        document.body.scrollTop = 0;
    }

    render() {
        return (
            <div className="home-page page">
                <div className="home-display">
                    <h1>Corey Kress</h1>
                    <h3>Software Developer</h3>
                </div>
                <div className="home-tag-section">
                    <p className="home-tagline">Buffalo Native. Full-Stack Web Developer</p>
                </div>
            </div>
    );
  }
}

export default HomePage;
