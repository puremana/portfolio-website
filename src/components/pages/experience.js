import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';

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
                        <img src="img/png/ninetyblack-logo.png" className="experience-block-logo" alt="NinetyBlack Logo" />
                    </a>
                    <div className="experience-block-info">
                        <h3>Full Stack Developer</h3>
                        <p className="italic">July 2019 - Present</p>
                    </div>
                    <div className="project-tags">
                        <div className="tag tag-html">HTML5</div>
                        <div className="tag tag-css">CSS</div>
                        <div className="tag tag-js">JS</div>
                        <div className="tag tag-php">PHP</div>
                        <div className="tag tag-laravel">Laravel</div>
                        <div className="tag tag-wordpress">Wordpress</div>
                    </div>
                </div>

                <div className="experience-block">
                    <a href="https://www.luminate.one/" className="logo-link" target="_blank" rel="noopener noreferrer">
                        <img src="img/svg/luminateone-logo.svg" className="experience-block-logo" alt="LuminateOne Logo" />
                    </a>
                    <div className="experience-block-info">
                        <h3>PHP Developer</h3>
                        <p className="italic">August 2018 - June 2019</p>
                    </div>
                    <p className="experience-block-text">
                        At LuminateOne I primarily helped develop custom large and medium scale web applications using <a href="https://laravel.com/" target="_blank" rel="noopener noreferrer">Laravel</a> and <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue</a>. This work ranged from collaborating with a team to solo development and testing.
                    </p>
                    <div className="project-tags">
                        <div className="tag tag-html">HTML5</div>
                        <div className="tag tag-scss">SCSS</div>
                        <div className="tag tag-js">JS</div>
                        <div className="tag tag-vue">Vue</div>
                        <div className="tag tag-php">PHP</div>
                        <div className="tag tag-laravel">Laravel</div>
                        <div className="tag tag-wordpress">Wordpress</div>
                    </div>
                </div>

                <div className="university-info">
                    ~ Graduated Waikato University 2018 ~
                </div>
            </div>
        </div>
    );
  }
}

export default Experience;