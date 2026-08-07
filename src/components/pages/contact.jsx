import React, { Component } from 'react';

//components
import NavBar from '../nav-bar/nav-bar';

const CONTACT_WORKER_URL = "https://portfolio-contact.puremana.workers.dev";

// Assembled at runtime so the address never appears as a literal in the bundle.
function contactAddress() {
    return ['pure' + 'mana', ['gmail', 'com'].join('.')].join('@');
}

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {nameValue: '', emailValue: '', messageValue: '', websiteValue: '',
                        nameClass: '', emailClass: '', messageClass: '',
                        status: 'idle'};

        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        this.handleWebsite = this.handleWebsite.bind(this);

        this.sendMessage = this.sendMessage.bind(this);
    }

    componentDidUpdate() {
        document.title = "Contact - Jeremy Shaw Software Developer Portfolio";
    }

    componentDidMount() {
        document.title = "Contact - Jeremy Shaw Software Developer Portfolio";
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

    handleWebsite(event) {
        this.setState({websiteValue: event.target.value});
    }

    validateEmail(email) {
        var re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    async sendMessage(event) {
        if (this.state.status === 'sending') {
            return;
        }
        if (this.state.nameValue === '') {
            this.setState({ nameClass: 'invalid' });
            return;
        }
        if (!this.validateEmail(this.state.emailValue)) {
            this.setState({ emailClass: 'invalid' });
            return;
        }
        if (this.state.messageValue === '') {
            this.setState({ messageClass: 'invalid' });
            return;
        }

        this.setState({ status: 'sending' });
        try {
            const response = await fetch(CONTACT_WORKER_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: this.state.nameValue,
                    email: this.state.emailValue,
                    message: this.state.messageValue,
                    website: this.state.websiteValue
                })
            });
            if (!response.ok) {
                throw new Error("Worker responded with " + response.status);
            }
            this.setState({status: 'sent', nameValue: '', emailValue: '', messageValue: ''});
        } catch (error) {
            console.error("Contact worker send failed:", error);
            this.setState({ status: 'error' });
        }
    }

  render() {
    const address = this.state.status === 'error' ? contactAddress() : null;
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
                    <div className="honeypot-field" aria-hidden="true">
                        <label htmlFor="websiteInput">Website</label>
                        <input type="text" name="websiteInput" id="websiteInput" tabIndex="-1" autoComplete="off" value={this.state.websiteValue} onChange={this.handleWebsite} />
                    </div>
                    <div className="button send" onClick={this.sendMessage}>
                        <span className="icon is-small"><i className="fa fa-envelope"></i></span>
                        {this.state.status === 'sending' ? 'Sending...' : 'Send Message'}
                    </div>
                    {this.state.status === 'sent' &&
                        <p className="form-status">Message sent. Thanks for reaching out!</p>
                    }
                    {this.state.status === 'error' &&
                        <p className="form-status form-error">Something went wrong sending your message. Please email me directly at <a href={'mailto:' + address}>{address}</a>.</p>
                    }
                </div>
            </div>
        </div>
    );
  }
}

export default Contact;
