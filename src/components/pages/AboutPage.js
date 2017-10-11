import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import './../../App.css';
import './AboutPage.css';

class AboutPage extends Component {
    render() {
        return (
            <div className="AboutPage page">
                <div className="body-container">
                    <div className="page-header">
                        <h2>About</h2>
                    </div>

                    <div className="page-body">
                        <p>
                        My name is Corey Kress, I was born and raised in the suburbs south of Buffalo, Ny.  I graduated from the University at Buffalo in 2016 with a bachelors degree in Mathematics with a minor in Computer Science.  I have since started a career in Software Development as a full stack web developer, using technologies such as PHP, Javascript, and MySql.  Outside of the web, I have interests in embedded development; using tools such as an Arduino and languages such as C/C++.  When I am not programming you can find me watching the Buffalo Bills, climbing, skateboarding, or playing Pokemon Go.
                        </p>
                    </div>
                </div>
            </div>
    );
  }
}

export default AboutPage;
