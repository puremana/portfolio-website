import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

//components
import Home from './components/pages/home';
import Education from './components/pages/education';
import Projects from './components/pages/projects';
import Contact from './components/pages/contact';

//includes
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/education' component={Education} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/contact' component={Contact} />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
