import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';
import {
    Link
  } from 'react-router-dom';

class Home extends Component {
    componentWillReceiveProps() {
        document.title = "Home - Jeremy Shaw";
    }

    componentDidMount() {
        document.title = "Home - Jeremy Shaw";
    }

  render() {
    return (
        <div className="home-page">
            <NavBar page="home"/>
            <div className="home-top-container">
                <div className="home-top-left">
                    <div className="home-top-left-image"></div>
                </div>
                <div className="home-top-right">
                    <h2>Jeremy Shaw</h2>
                    <ul>
                        <li>
                            <div className="icon is-small"><i className="fa fa-user"></i></div>
                            <span>Fullstack Developer</span>
                        </li>
                        <li>
                            <div className="icon is-small"><i className="fa fa-location-arrow"></i></div>
                            <span>Rotorua, New Zealand</span></li>
                        <li>
                            <div className="icon is-small"><i className="fa fa-graduation-cap"></i></div>
                            <span>BSc, Major in Computer Science</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="home-bottom">
                <div className="home-bottom-text">
                    <p>I'm Jeremy. A software developer intent on developing the <Link to="/projects">sweetest projects</Link> I can. 
                    Currently waiting to graduate at Waikato University with a BSc, majoring in Computer Science. Interested in developing webapps and fullstack development.</p>
                    <br />
                    <p>When I'm not programming you can find me in the gym, going for a run or binge watching the latest TV Shows.
                    If you are interested in hiring me, or just want to tell me about a movie I should watch, feel free to <Link to="/contact">drop me a line</Link>.</p>
                    <div className="home-bottom-buttons">
                        <a href="https://github.com/puremana" target="_blank" rel="noreferrer noopener">
                            <div className="button github">
                                <span className="icon is-small"><i className="fab fa-github"></i></span>
                                Github
                            </div>
                        </a>
                        <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-website-a71ab.appspot.com/o/Jeremy%20Shaw%20CV.pdf?alt=media&token=6f6e0dea-0449-4322-869b-14a3a5c93073" target="_blank" rel="noreferrer noopener">
                            <div className="button CV">
                                <span className="icon is-small"><i className="fa fa-arrow-circle-down"></i></span>
                                Download CV
                            </div>
                        </a>
                        <a href="https://blog.jeremyshaw.co.nz">
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