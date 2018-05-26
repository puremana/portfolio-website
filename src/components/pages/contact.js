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
            <div className="contact-container">
                <h2>Contact</h2>
                <div className="contact-form">
                    <label for="nameInput">Name</label>
                    <input type="text" name="nameInput" className="nameInput" id="nameInput" placeholder="Enter name" oninput="handleName()" />
                    <label for="emailInput">Email</label>
                    <input type="email" name="emailInput" className="emailInput" id="emailInput" placeholder="Enter your email address" oninput="handleEmail()" />
                    <label for="messageInput">Message</label>
                    <textarea class="form-control" name="messageInput" id="messageInput" rows="4" oninput="handleMessage()"></textarea>
                    <div className="button send" onClick="sendMessage()">
                        <span className="icon is-small"><i className="fa fa-envelope"></i></span>
                        Send Message
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Contact;