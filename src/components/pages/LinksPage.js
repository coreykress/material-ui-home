import React, { Component } from 'react';
import './../../App.css';

class LinksPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
        this.goTo = this.goTo.bind(this);
    }

    goTo(url) {
        return window.open(url);
    }

    render() {
        return (
            <div className="LinksPage page">
                <div className="body-container">
                    <div className="page-header">
                        <h2>Links</h2>
                    </div>

                    <div className="page-body">
                    <div className="link-list">
                        <ul>
                            <li onClick={() => this.goTo("http://www.github.com/coreykress")}>GitHub</li>
                            <li onClick={() => this.goTo("https://www.linkedin.com/in/corey-kress/")}>LinkedIn</li>
                        </ul>
                    </div>

                    </div>
                </div>
            </div>
    );
  }
}

export default LinksPage;
