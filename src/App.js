import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import AppRouter from './AppRouter';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <AppRouter />
            </div>
    );
  }
}

export default App;
