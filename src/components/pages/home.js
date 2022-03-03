import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';
import {
    Link
  } from 'react-router-dom';

class Home extends Component {
    componentWillReceiveProps() {
        document.title = "Jeremy Shaw Software Developer Portfolio";
    }

    componentDidMount() {
        document.title = "Jeremy Shaw Software Developer Portfolio";
    }

  render() {
    return (
        <div className="home-page">
            <NavBar page="home"/>
            <div className="home-top-container">
                <div className="home-top-left">
                    <picture className="home-top-left-image">
                        <source srcSet="img/webp/profile.webp" type="image/webp" />
                        <source srcSet="img/png/profile.png" type="image/jpeg" /> 
                        <img src="img/png/profile.png" alt="Jeremy Shaw" />
                    </picture>
                </div>
                <div className="home-top-right">
                    <h2>Jeremy Shaw</h2>
                    <ul>
                        <li>
                            <div className="icon is-small"><i className="fa fa-user"></i></div>
                            <span>Full Stack Developer</span>
                        </li>
                        <li>
                            <div className="icon is-small"><i className="fa fa-location-arrow"></i></div>
                            <span>Rotorua, New Zealand</span>
                        </li>
                        <li>
                            <div className="icon is-small"><i className="fa fa-graduation-cap"></i></div>
                            <span>BSc, Major in Computer Science</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="home-bottom">
                <div className="home-bottom-text">
                    <p>I'm Jeremy. A freelance developer working on new and exciting <Link to="/projects">projects</Link> for my clients, and becoming the best developer I can be.</p>
                    <br />
                    <p>When I'm not programming you will find me out mountain biking, exploring the great landscape New Zealand provides.
                    If you are interested in getting in touch with me, feel free to <Link to="/contact">drop me a line</Link>.</p>
                    <div className="home-bottom-buttons">
                        <a href="https://github.com/puremana" target="_blank" rel="noreferrer noopener">
                            <div className="button github">
                                <span className="icon is-small"><i className="fab fa-github"></i></span>
                                Github
                            </div>
                        </a>
                        <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-website-a71ab.appspot.com/o/Jeremy%20Shaw%20CV.pdf?alt=media&token=76109fc5-f93d-4c07-80c2-8d44fc111e25" target="_blank" rel="noreferrer noopener">
                            <div className="button CV">
                                <span className="icon is-small"><i className="fa fa-arrow-circle-down"></i></span>
                                Download CV
                            </div>
                        </a>
                        <a href={"https://blog.jeremyshaw.co.nz?dark=" + this.props.mode}>
                            <div className="button blog">
                                <span className="icon is-small"><i className="fa fa-pencil-alt"></i></span>
                                Blog
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;