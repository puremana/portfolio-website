import React, { Component } from 'react';

//components  
import {
    Link
  } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {homeLink: '', eduLink: '', projectLink: '', contactLink: ''};
        this.updateActive = function(aPage) {
            if (aPage === "home") {
                this.setState({homeLink: 'is-active', eduLink: '', projectLink: '', contactLink: ''});
            }
            else if (aPage === "education") {
                this.setState({homeLink: '', eduLink: 'is-active', projectLink: '', contactLink: ''});
            }
            else if (aPage === "projects") {
                this.setState({homeLink: '', eduLink: '', projectLink: 'is-active', contactLink: ''});
            }
            else if (aPage === "contact") {
                this.setState({homeLink: '', eduLink: '', projectLink: '', contactLink: 'is-active'});
            }
            else {
                this.setState({homeLink: '', eduLink: '', projectLink: '', contactLink: ''});
            }
        }
    }

    componentWillReceiveProps() {
        this.updateActive(this.props.page);
    }

    componentDidMount() {
        this.updateActive(this.props.page);
    }

  render() {
    return (
        <div className="nav">
            <ul>
                <Link to="/">
                    <li className={this.state.homeLink}>
                        <span className="icon is-small"><i className="fa fa-home"></i></span>
                        <span>Home</span>
                    </li>
                </Link>
                <Link to="/education">
                    <li className={this.state.eduLink}>
                        <span className="icon is-small"><i className="fa fa-graduation-cap"></i></span>
                        <span>Education</span>
                    </li>
                </Link>
                <Link to="/projects">
                    <li className={this.state.projectLink}>
                        <span className="icon is-small"><i className="fa fa-laptop"></i></span>
                        <span>Projects</span>
                    </li>
                </Link>
                <Link to="/contact">    
                    <li className={"nav-last " + this.state.contactLink}>
                        <span className="icon is-small"><i className="fa fa-phone"></i></span>
                        <span>Contact</span>
                    </li>
                </Link>
            </ul>
        </div>
    );
  }
}

export default NavBar;