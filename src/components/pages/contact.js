import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';
import {
    Link
  } from 'react-router-dom';

class Contact extends Component {
    componentWillReceiveProps() {
        document.title = "Contact - Jeremy Shaw";
    }

    componentDidMount() {
        document.title = "Contact - Jeremy Shaw";
    }

  render() {
    return (
        <div className="contact-page">
            <NavBar page="contact"/>
            
        </div>
    );
  }
}

export default Contact;