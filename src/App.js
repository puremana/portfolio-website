import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

//components
import Home from './components/pages/home';
import Experience from './components/pages/experience';
import Projects from './components/pages/projects';
import Contact from './components/pages/contact';
import Education from './components/pages/education';

//includes
import './App.css';
import './Media.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/experience' component={Experience} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/education' component={Education} />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
