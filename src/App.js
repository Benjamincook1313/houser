import React, { Component } from 'react';
import './App.css';
// import Dashboard from './Components/Dashboard/Dashboard'
// import Wizard from'./Components/Wizard/Wizard'
import Header from './Components/Header/Header'
import { HashRouter } from 'react-router-dom'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header>
            <Header />
          </header>
          { routes }
        </div>
      </HashRouter>
    );
  }
}

export default App;
