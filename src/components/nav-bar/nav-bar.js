import React, { Component } from 'react';

//components  
import {
    Link
  } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {homeLink: '', expLink: '', projectLink: '', contactLink: ''};
        this.updateActive = function(aPage) {
            if (aPage === "home") {
                this.setState({homeLink: 'is-active', expLink: '', projectLink: '', contactLink: ''});
            }
            else if (aPage === "experience") {
                this.setState({homeLink: '', expLink: 'is-active', projectLink: '', contactLink: ''});
            }
            else if (aPage === "projects") {
                this.setState({homeLink: '', expLink: '', projectLink: 'is-active', contactLink: ''});
            }
            else if (aPage === "contact") {
                this.setState({homeLink: '', expLink: '', projectLink: '', contactLink: 'is-active'});
            }
            else {
                this.setState({homeLink: '', expLink: '', projectLink: '', contactLink: ''});
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
                <li className={this.state.homeLink}>
                    <Link to="/">
                        <span className="icon is-small"><i className="fa fa-home"></i></span>
                        <span className="nav-text">Home</span>
                    </Link>
                </li>
                <li className={this.state.projectLink}>
                    <Link to="/projects">
                        <span className="icon is-small"><i className="fa fa-laptop"></i></span>
                        <span className="nav-text">Projects</span>
                    </Link>
                </li>
                <li className={this.state.expLink}>
                    <Link to="/experience">
                        <span className="icon is-small"><i className="fa fa-briefcase"></i></span>
                        <span className="nav-text">Experience</span>
                    </Link>
                </li>
                <li className={"nav-last " + this.state.contactLink}>
                    <Link to="/contact">
                        <span className="icon is-small"><i className="fa fa-phone"></i></span>
                        <span className="nav-text">Contact</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
  }
}

export default NavBar;