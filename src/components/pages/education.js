import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';
import {
    Link
  } from 'react-router-dom';

class Education extends Component {
    componentWillReceiveProps() {
        document.title = "Education - Jeremy Shaw";
    }

    componentDidMount() {
        document.title = "Education - Jeremy Shaw";
    }

  render() {
    return (
        <div class="education-page">
            <NavBar page="education"/>
            
        </div>
    );
  }
}

export default Education;