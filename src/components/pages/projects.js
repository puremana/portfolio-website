import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';

class Projects extends Component {
    componentWillReceiveProps() {
        document.title = "Projects - Jeremy Shaw";
    }

    componentDidMount() {
        document.title = "Projects - Jeremy Shaw";
    }

  render() {
    return (
        <div className="projects-page">
            <NavBar page="projects"/>
            <div className="projects-container">
                <h2>Projects</h2>
                <div className="project">
                    <div className="project-image">
                        <img src="img/iourpg-website.jpg" />
                    </div>
                    <div className="project-text">
                        <h3>Idle Online Universe Game Portal <a href="https://iourpg.com/website-production/index.html" target="_blank" rel="noreferrer noopener"><span class="fa fa-link"></span></a></h3>
                        <p>IOURPG.com is a website I designed and developed to bring together all of the elements of the Idle Online Universe game while maintaining a simple and professional look.</p>
                    </div>
                    <div className="project-tags">
                        <div className="tag tag-html">HTML5</div>
                        <div className="tag tag-css">CSS</div>
                        <div className="tag tag-bootstrap">Bootstrap</div>
                        <div className="tag tag-js">JS</div>
                        <div className="tag tag-reactjs">React JS</div>
                        <div className="tag tag-nodejs">Node JS</div>
                    </div>
                </div>
                <div className="project">
                    <div className="project-image">
                        <img src="img/iou-helper.jpg" />
                    </div>
                    <div className="project-text">
                        <h3>IOU Helper / IOU Helper Pro <a href="http://iouhelper.com/" target="_blank" rel="noreferrer noopener"><i class="fas fa-link"></i></a> <a href="https://github.com/puremana/iou-helper" target="_blank" rel="noreferrer noopener"><span class="fab fa-github"></span></a> <a href="https://discord.gg/JhybKW3" target="_blank" rel="noreferrer noopener"><span class="fab fa-discord"></span></a></h3>
                        <p>IOU Helper is a wrapper for the popular online game IOURPG.</p>
                        <p>IOU Helper allows users to log into multiple kongregate and IOURPG.com accounts within a desktop application. This allows the user to run the game with less CPU and GPU usage. It also provides features such as auto-login, auto-refresh, timers, auto clicking and macros to get the best possible experience out of the game.</p>
                        <p>The IOU Helper Pro edition used SharpPcap to read packets from the game to collect data and display this on screen to provide the user with optimal game paths. This project was completed using C# in Visual Studio with Winforms.</p>
                        <p>IOU Helper is still actively updated and currently used by over 300 players.</p>
                    </div>
                    <div className="project-tags">
                        <div className="tag tag-winforms">Winforms</div>
                        <div className="tag tag-csharp">C#</div>
                        <div className="tag tag-sharppcap">SharpPcap</div>
                    </div>
                </div>
                <div className="project">
                    <div className="project-image">
                        <img src="img/iou-helper-2.jpg" />
                    </div>
                    <div className="project-text">
                        <h3>IOU Helper 2.0 <a href="http://iouhelper.com/" target="_blank" rel="noreferrer noopener"><i class="fas fa-link"></i></a> <a href="https://github.com/puremana/iou-helper" target="_blank" rel="noreferrer noopener"><span class="fab fa-github"></span></a> <a href="https://discord.gg/JhybKW3" target="_blank" rel="noreferrer noopener"><span class="fab fa-discord"></span></a></h3>
                        <p>While IOU Helper v1.0 allowed for low CPU and GPU usage while running multiple accounts, I wanted to create fast, responsive and attractive client for people who didn't worry about hardware usage. This is why I created IOU Helper 2.0.</p>
                        <p>IOU Helper 2.0 was created in Electron using NodeJS, HTML5 and CSS. Electron combines web development with building cross platform desktop apps.</p>
                        <p>This program is currently used by over 50 players.</p>
                    </div>
                    <div className="project-tags">
                        <div className="tag tag-html">HTML5</div>
                        <div className="tag tag-css">CSS</div>
                        <div className="tag tag-semanticui">Semantic UI</div>
                        <div className="tag tag-js">JS</div>
                        <div className="tag tag-nodejs">Node JS</div>
                        <div className="tag tag-electron">Electron</div>
                    </div>
                </div>
                <div className="project">
                    <div className="project-image">
                        <img src="img/iou-bot.jpg" />
                    </div>
                    <div className="project-text">
                        <h3>IOU Bot <a href="https://github.com/puremana/iou-bot" target="_blank" rel="noreferrer noopener"><span class="fab fa-github"></span></a> <a href="https://discord.gg/zynuQcP" target="_blank" rel="noreferrer noopener"><span class="fab fa-discord"></span></a></h3>
                        <p>IOU Bot is a Discord bot made for the official IOURPG game Discord server. This was my first time developing using the Discord JS API, which I found quite enjoyable.</p>
                        <p>The bots noteable features include adding custom commands, advertising parties and guilds by adding them to a locally stored database which is private messaged to interested members when requested, a voting system and a scheduler which pings members with the bingo role 10 minutes prior to the in-game bingo. This is to prevent players from forgetting to sign up for bingo.</p>
                    </div>
                    <div className="project-tags">
                        <div className="tag tag-nodejs">Node JS</div>
                        <div className="tag tag-discordjs">Discord JS</div>
                        <div className="tag tag-json">JSON</div>
                    </div>
                </div>
                <div className="project">
                    <div className="project-image">
                        <img src="img/new-zealand-police-logo.jpg" />
                    </div>
                    <div className="project-text">
                        <h3>Waikato Police Notification System</h3>
                        <p>A group of students from Waikato University were asked to develop a notification system between cameras and the Waikato Police.</p>
                        <p>My role in this project was mainly creating the UI for the police to interact with the various program settings and database information.</p>
                        <p>Please contact me for references for this work, as it is closed source.</p>
                    </div>
                    <div className="project-tags">
                        <div className="tag tag-html">HTML5</div>
                        <div className="tag tag-css">CSS</div>
                        <div className="tag tag-js">JS</div>
                        <div className="tag tag-nodejs">Node JS</div>
                        <div className="tag tag-mysql">MySQL</div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Projects;