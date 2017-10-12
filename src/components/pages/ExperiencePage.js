import React, { Component } from 'react';
import './../../App.css';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';

class ExperiencePage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="ExperiencePage page">
                <div className="body-container">
                    <div className="page-header">
                        <h2>Experience</h2>
                    </div>

                    <div className="page-body">

                        <Paper className="page-paper-content" zDepth={2}>
                            <Toolbar>
                                <ToolbarTitle text="Education" />
                            </Toolbar>
                            <div className="paper-body">
                                <h4>SUNY University as Buffalo</h4>
                                <p>B.A. Mathematics</p>
                                <p> Minor in Computer Science</p>
                            </div>
                        </Paper>

                        <Paper className="page-paper-content" zDepth={2}>
                            <Toolbar>
                                <ToolbarTitle text="Work Experience" />
                            </Toolbar>
                            <div className="paper-body">
                                <h4>CoachMePlus</h4>
                                <span><p><strong>Intern Software Developer </strong> <i>Oct 2015 - May 2016</i></p></span>
                                <span><p><strong>Software Developer </strong> <i>May 2016 - present</i></p></span>
                            </div>
                        </Paper>

                        <Paper className="page-paper-content" zDepth={2}>
                            <Toolbar>
                                <ToolbarTitle text="Organizations" />
                            </Toolbar>
                            <div className="paper-body">
                                <h4>SUNY University as Buffalo</h4>
                                <p>B.A. Mathematics</p>
                                <p> Minor in Computer Science</p>
                            </div>
                        </Paper>

                        <Paper className="page-paper-content" zDepth={2}>
                            <Toolbar>
                                <ToolbarTitle text="Extra Curriculars"/>
                            </Toolbar>
                            <div className="paper-body">
                                <h4>SUNY University as Buffalo</h4>
                                <p>B.A. Mathematics</p>
                                <p> Minor in Computer Science</p>
                            </div>
                        </Paper>

                    </div>
                </div>
            </div>
    );
  }
}

export default ExperiencePage;
