import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {nameValue: '', emailValue: '', messageValue: '',
                        nameClass: '', emailClass: '', messageClass: ''};
    
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleMessage = this.handleMessage.bind(this);

        this.sendMessage = this.sendMessage.bind(this);
    }

    componentWillReceiveProps() {
        document.title = "Contact - Jeremy Shaw";
    }

    componentDidMount() {
        document.title = "Contact - Jeremy Shaw";
    }

    //Handling the inputs
    handleName(event) {
        this.setState({ nameClass: '' });
        this.setState({nameValue: event.target.value});
    }

    handleEmail(event) {
        this.setState({ emailClass: '' });
        this.setState({emailValue: event.target.value});
    }

    handleMessage(event) {
        this.setState({ messageClass: '' });
        this.setState({messageValue: event.target.value});
    }

    sendMessage(event) {
        if (this.state.nameValue === '') {
            this.setState({ nameClass: 'invalid' });
            return;
        }
        if (this.state.emailValue === '') {
            this.setState({ emailClass: 'invalid' });
            return;
        }
        if (this.state.messageValue === '') {
            this.setState({ messageClass: 'invalid' });
            return;
        }
        
        //send the email
        window.sendEmail(this.state.nameValue, this.state.emailValue, this.state.messageValue);

        //reset form
        this.setState({nameValue: ''});
        this.setState({emailValue: ''});
        this.setState({messageValue: ''});
    }  

  render() {
    return (
        <div className="contact-page">
            <NavBar page="contact"/>
            <div className="contact-container">
                <h2>Contact</h2>
                <div className="contact-form">
                    <label htmlFor="nameInput">Name</label>
                    <input type="text" name="nameInput" className={this.state.nameClass} id="nameInput" placeholder="Enter name" value={this.state.nameValue} onChange={this.handleName} />
                    <label htmlFor="emailInput">Email</label>
                    <input type="email" name="emailInput" className={this.state.emailClass} id="emailInput" placeholder="Enter your email address" value={this.state.emailValue} onChange={this.handleEmail} />
                    <label htmlFor="messageInput">Message</label>
                    <textarea name="messageInput" className={this.state.messageClass} id="messageInput" rows="4" value={this.state.messageValue} onChange={this.handleMessage}></textarea>
                    <div className="button send" onClick={this.sendMessage}>
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