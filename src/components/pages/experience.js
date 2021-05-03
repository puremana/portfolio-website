import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';
import { Link } from 'react-router-dom';

class Experience extends Component {
    componentWillReceiveProps() {
        document.title = "Experience - Jeremy Shaw Software Developer Portfolio";
    }

    componentDidMount() {
        document.title = "Experience - Jeremy Shaw Software Developer Portfolio";
    }

  render() {
    return (
        <div className="experience-page">
            <NavBar page="experience"/>
            <div className="experience-container">
                <h2>Experience</h2>
                
                <div className="experience-block">
                    <a href="https://www.ninetyblack.com/" className="logo-link" target="_blank" rel="noopener noreferrer">
                        <img src="img/svg/ninetyblack-logo.svg" className="experience-block-logo" alt="NinetyBlack Logo" />
                    </a>
                    <div className="experience-block-info">
                        <h3>Full Stack Developer</h3>
                        <p className="italic">July 2019 - April 2021</p>
                    </div>
                    <div className="project-tags">
                        <div className="tag tag-html">HTML5</div>
                        <div className="tag tag-scss">SCSS</div>
                        <div className="tag tag-js">JS</div>
                        <div className="tag tag-php">PHP</div>
                        <div className="tag tag-wordpress">Wordpress</div>
                        <div className="tag tag-laravel">Laravel</div>
                        <div className="tag tag-asgard">Asgard</div>
                        <div className="tag tag-react">React Native</div>
                    </div>
                    <p className="experience-block-text">
                        At NinetyBlack I worked as a Full Stack Developer to create custom Wordpress sites with unique requirements, maintained internal Laravel projects using <a href="https://asgardcms.com/">Asgard</a> and developed mobile applications with <a href="https://facebook.github.io/react-native/">React Native.</a>
                    </p>
                </div>

                <div className="experience-block">
                    <a href="https://www.luminate.one/" className="logo-link" target="_blank" rel="noopener noreferrer">
                        <img src="img/svg/luminateone-logo.svg" className="experience-block-logo" alt="LuminateOne Logo" />
                    </a>
                    <div className="experience-block-info">
                        <h3>PHP Developer</h3>
                        <p className="italic">August 2018 - June 2019</p>
                    </div>
                    <div className="project-tags">
                        <div className="tag tag-html">HTML5</div>
                        <div className="tag tag-scss">SCSS</div>
                        <div className="tag tag-js">JS</div>
                        <div className="tag tag-vue">Vue</div>
                        <div className="tag tag-php">PHP</div>
                        <div className="tag tag-wordpress">Wordpress</div>
                        <div className="tag tag-laravel">Laravel</div>
                    </div>
                    <p className="experience-block-text">
                        At LuminateOne I primarily helped develop custom large and medium scale web applications using <a href="https://laravel.com/" target="_blank" rel="noopener noreferrer">Laravel</a> and <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue</a>. This work ranged from collaborating with a team to solo development and testing.
                    </p>
                </div>

                <div className="university-info">
                    <Link to="/education">~ Graduated Waikato University 2018 ~</Link>
                </div>
            </div>
        </div>
    );
  }
}

export default Experience;