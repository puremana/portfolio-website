import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router';

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
          <Routes>
            <Route path='/' element={<Home mode={this.state.darkMode} />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/education' element={<Education />} />
            <Route path='*' element={<Home mode={this.state.darkMode} />} />
          </Routes>
          <DarkMode toggleMode={() => this.toggleDarkMode()} mode={this.state.darkMode} />
        </div>
      </Router>
    );
  }
}

export default App;
