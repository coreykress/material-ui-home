import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import AppRouter from './AppRouter';
import {Toolbar} from 'material-ui/Toolbar';

class App extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
    }

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
                <Toolbar style={{bottom:"0", width:"100%", backgroundColor:"#616161", height:"80px"}}></Toolbar>
                </div>
            </div>
    );
  }
}

export default App;
