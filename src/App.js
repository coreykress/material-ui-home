import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import AppRouter from './AppRouter';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header
                    className="header"
                    title=""
                 />
                <div className="app-body">
                    <AppRouter />
                </div>

                <div className="app-footer">
                <Toolbar style={{position: "absolute", bottom:"0", width:"100%", backgroundColor:"#616161", height:"80px"}}></Toolbar>
                </div>
            </div>
    );
  }
}

export default App;
