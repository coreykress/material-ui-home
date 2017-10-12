import React, { Component } from 'react';
import './../../App.css';
import ProjectCard from '../projectCard';

class ProjectsPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="ProjectsPage page">
                <div className="body-container">
                    <div className="page-header">
                        <h2>Projects</h2>
                    </div>

                    <div className="page-body">
                        <ProjectCard
                            title="Bloop.Video"
                            subtitle="Winner Synacor Hackathon 2017"
                            overlayTitle="Bloop"
                            overlaySubTitle="YouTube meets Pop-up Video"
                         />
                    </div>
                </div>
            </div>
    );
  }
}

export default ProjectsPage;
