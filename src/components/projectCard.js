import React, { Component } from 'react';
import './../App.css';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
        this.handleExpandChange = this.handleExpandChange.bind(this);
     }

     handleExpandChange() {
         this.setState({
             expanded: !this.state.expanded,
         });
     }

    render() {
        return (
            <div className="project-card-container">
                <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                    <CardHeader
                        title={this.props.title}
                        subtitle={this.props.subtitle}
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardMedia
                        expandable={true}
                        overlay={<CardTitle title={this.props.overlayTitle} subtitle={this.props.overlaySubTitle} />}
                    >
                    </CardMedia>
                    <CardText expandable={true}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                </Card>
            </div>
    );
  }
}

export default ProjectCard;
