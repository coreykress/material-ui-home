import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ExperiencePage from './components/pages/ExperiencePage';
import ProjectsPage from './components/pages/ProjectsPage';
import LinksPage from './components/pages/LinksPage';

class AppRouter extends Component {
    render() {
        return (
            <div className="AppRouter">
                <Switch>
                      <Route exact path='/' component={HomePage}/>
                      <Route path='/About' component={AboutPage}/>
                      <Route path='/Experience' component={ExperiencePage}/>
                      <Route path='/Projects' component={ProjectsPage}/>
                      <Route path='/Links' component={LinksPage}/>
                </Switch>
            </div>
    );
  }
}

export default AppRouter;
