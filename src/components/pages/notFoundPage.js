import React, { Component } from 'react';
import './../../App.css';
import './AboutPage.css';
import { Link } from 'react-router-dom';

class notFoundPage extends Component {
    constructor(props) {
        super(props);
        this.location = window.location;
        window.scrollTo(0, 0);
     }

    render() {
        return (
            <div className="notFoundPage page">
                <div className="body-container">
                    <div className="page-header">
                        <h2>404</h2>
                    </div>

                    <div className="page-body">
                    <p>Uh oh, you seem to be in the wrong place.</p>
                    <p>Click
                         <Link style={{ textDecoration: 'none' }} to='/'>
                                &nbsp;here&nbsp;
                        </Link>
                         to go home.
                    </p>
                    </div>
                </div>
            </div>
    );
  }
}

export default notFoundPage;
