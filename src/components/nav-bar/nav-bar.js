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
        <div class="nav">
            <ul>
                <li class={this.state.homeLink}>
                    <Link to="/">
                        <span class="icon is-small"><i class="fa fa-home"></i></span>
                        <span>Home</span>
                    </Link>
                </li>
                <li class={this.state.eduLink}>
                    <Link to="/education">
                        <span class="icon is-small"><i class="fa fa-home"></i></span>
                        <span>Education</span>
                    </Link>
                </li>
                <li class={this.state.projectLink}>
                    <Link to="/projects">
                        <span class="icon is-small"><i class="fa fa-laptop"></i></span>
                        <span>Projects</span>
                    </Link>
                </li>
                <li class={this.state.contactLink}>
                <Link to="/contact">
                        <span class="icon is-small"><i class="fa fa-phone"></i></span>
                        <span>Contact</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
  }
}

export default NavBar;