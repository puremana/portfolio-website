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
import DarkMode from './components/modules/dark-mode';

//includes
import './App.css';
import './Media.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    let darkMode = false;
    // Load previous state
    if (localStorage.getItem("darkMode") !== null) {
      darkMode = localStorage.getItem("darkMode") === "true"
    } else {
      // Load preference
      if (typeof window !== 'undefined') {
        darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      }
    }

    this.state = {
      darkMode: darkMode
    }

    this.toggleDarkMode.bind(this)
  }

  toggleDarkMode() {
    localStorage.setItem('darkMode', !this.state.darkMode)
    this.setState({
      darkMode: !this.state.darkMode
    })
  }

  render() {
    return (
      <Router>
        <div className={['App', this.state.darkMode ? 'dark' : ''].join(" ")}>
          <Switch>
            <Route exact path='/' render={(props) => (<Home {...props} mode={this.state.darkMode} />)} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/experience' component={Experience} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/education' component={Education} />
            <Route render={(props) => (<Home {...props} mode={this.state.darkMode} />)} />
          </Switch>
          <DarkMode toggleMode={() => this.toggleDarkMode()} mode={this.state.darkMode} />
        </div>
      </Router>
    );
  }
}

export default App;
