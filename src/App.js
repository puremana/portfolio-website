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
    this.state = {
      darkMode: true
    }

    this.toggleDarkMode.bind(this)
  }

  toggleDarkMode() {
    this.setState({
      darkMode: !this.state.darkMode
    })
  }

  render() {
    return (
      <Router>
        <div className={['App', this.state.darkMode ? 'dark' : ''].join(" ")}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/experience' component={Experience} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/education' component={Education} />
            <Route component={Home} />
          </Switch>
          <DarkMode toggleMode={() => this.toggleDarkMode()} mode={this.state.darkMode} />
        </div>
      </Router>
    );
  }
}

export default App;
