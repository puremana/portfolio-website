import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';
import {
    Link
  } from 'react-router-dom';

class Contact extends Component {
    componentWillReceiveProps() {
        document.title = "Contact - Jeremy Shaw Portfolio";
    }

    componentDidMount() {
        document.title = "Contact - Jeremy Shaw Portfolio";
    }

  render() {
    return (
        <div class="contact-page">
            <NavBar page="contact"/>
            
        </div>
    );
  }
}

export default Contact;