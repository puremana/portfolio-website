import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';

class Projects extends Component {
    componentWillReceiveProps() {
        document.title = "Projects - Jeremy Shaw Software Developer Portfolio";
    }

    componentDidMount() {
        document.title = "Projects - Jeremy Shaw Software Developer Portfolio";
    }

  render() {
    return (
        <div className="projects-page">
            <NavBar page="projects"/>
            <div className="projects-container">
                <h2>Projects</h2>

                <div className="project">
                    <picture className="project-image">
                        <source srcSet="img/webp/new-zealand-police-logo.webp" type="image/webp" />
                        <source srcSet="img/jpg/new-zealand-police-logo.jpg" type="image/jpeg" /> 
                        <img src="img/jpg/new-zealand-police-logo.jpg" alt="New Zealand Police Logo" />
                    </picture>
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

                <div className="project">
                    <picture className="project-image">
                        <source srcSet="img/webp/f2p-wiki.webp" type="image/webp" />
                        <source srcSet="img/jpg/f2p-wiki.jpg" type="image/jpeg" /> 
                        <img src="img/jpg/f2p-wiki.jpg" alt="F2P OSRS Wiki Screenshot" />
                    </picture>
                    <div className="project-text">
                        <h3>F2P OSRS Wiki</h3>
                        <p>I am the co-owner of the F2P OSRS Wiki.</p>
                        <p>F2P.wiki is an open source Old School RuneScape hiscores for Free-to-play players. It is a fan-made passion project started in October 2017. It is constantly updated with the help of the F2P OSRS community.</p>
                    </div>
                    <div className="project-tags">
                        <div className="tag tag-html">HTML5</div>
                        <div className="tag tag-css">CSS</div>
                        <div className="tag tag-js">JS</div>
                        <div className="tag tag-ruby-on-rails">Ruby on Rails</div>
                        <div className="tag tag-sqlite">SQLite</div>
                    </div>
                    <div className="project-links">
                        <a className="project-button" href="https://www.f2p.wiki" target="_blank" rel="noreferrer noopener">
                            <span className="fa fa-link"></span> View Website
                        </a>
                        <a className="project-button" href="https://github.com/vmeow/f2pehp" target="_blank" rel="noreferrer noopener">
                            <span className="fab fa-github"></span> View Github
                        </a>
                    </div>
                </div>

                <div className="project">
                    <picture className="project-image">
                        <source srcSet="img/webp/iourpg-website.webp" type="image/webp" />
                        <source srcSet="img/jpg/iourpg-website.jpg" type="image/jpeg" /> 
                        <img src="img/jpg/iourpg-website.jpg" alt="IOURPG Website Screenshot"/>
                    </picture>
                    <div className="project-text">
                        <h3>Idle Online Universe Game Portal</h3>
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
                    <div className="project-links">
                        <a className="project-button" href="https://iourpg.com" target="_blank" rel="noreferrer noopener">
                            <span className="fa fa-link"></span> View Website
                        </a>
                    </div>
                </div>

                <div className="project">
                    <picture className="project-image">
                        <source srcSet="img/webp/wedding-website.webp" type="image/webp" />
                        <source srcSet="img/jpg/wedding-website.jpg" type="image/jpeg" /> 
                        <img src="img/jpg/wedding-website.jpg" alt="Wedding Website Screenshot"/>
                    </picture>
                    <div className="project-text">
                        <h3>Olly & Monique's Wedding Website</h3>
                        <p>A from scratch website for my brother and his fiancée for their upcoming wedding. RSVP and Admin Dashboard pages both contain large MySQL functionality such as auto-generated content and a login.</p>
                        <p>All source aside from the MySQL database information, as well as screenshots of the pages can be found the on Github.</p>
                    </div>
                    <div className="project-tags">
                        <div className="tag tag-html">HTML5</div>
                        <div className="tag tag-css">CSS</div>
                        <div className="tag tag-js">JS</div>
                        <div className="tag tag-php">PHP</div>
                        <div className="tag tag-mysql">MySQL</div>
                    </div>
                    <div className="project-links">
                        <a className="project-button" href="https://github.com/puremana/Wedding-Website" target="_blank" rel="noreferrer noopener">
                            <span className="fab fa-github"></span> View Github
                        </a>
                    </div>
                </div>

                <div className="project">
                    <picture className="project-image">
                        <source srcSet="img/webp/iou-helper.webp" type="image/webp" />
                        <source srcSet="img/jpg/iou-helper.jpg" type="image/jpeg" /> 
                        <img src="img/jpg/iou-helper.jpg" alt="IOU Helper Screenshot"/>
                    </picture>
                    <div className="project-text">
                        <h3>IOU Helper / IOU Helper Pro</h3>
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
                    <div className="project-links">
                        <a className="project-button" href="https://iouhelper.com/" target="_blank" rel="noreferrer noopener">
                            <span className="fas fa-link"></span> View Website
                        </a>
                        <a className="project-button" href="https://github.com/puremana/iou-helper" target="_blank" rel="noreferrer noopener">
                            <span className="fab fa-github"></span> View Github
                        </a>
                        <a className="project-button" href="https://discord.gg/JhybKW3" target="_blank" rel="noreferrer noopener">
                            <span className="fab fa-discord"></span> View Discord
                        </a>
                    </div>
                </div>

                <div className="project">
                    <picture className="project-image">
                        <source srcSet="img/webp/iou-helper-2.webp" type="image/webp" />
                        <source srcSet="img/jpg/iou-helper-2.jpg" type="image/jpeg" /> 
                        <img src="img/jpg/iou-helper-2.jpg" alt="IOU Helper 2.0 Screenshot" />
                    </picture>
                    <div className="project-text">
                        <h3>IOU Helper 2.0</h3>
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
                    <div className="project-links">
                        <a className="project-button" href="https://iouhelper.com/" target="_blank" rel="noreferrer noopener">
                            <span className="fas fa-link"></span> View Website
                        </a>
                        <a className="project-button" href="https://github.com/puremana/iou-helper-2.0" target="_blank" rel="noreferrer noopener">
                            <span className="fab fa-github"></span> View Github
                        </a>
                        <a className="project-button" href="https://discord.gg/JhybKW3" target="_blank" rel="noreferrer noopener">
                            <span className="fab fa-discord"></span> View Discord
                        </a>
                    </div>
                </div>

                <div className="project">
                    <picture className="project-image">
                        <source srcSet="img/webp/iou-bot.webp" type="image/webp" />
                        <source srcSet="img/jpg/iou-bot.jpg" type="image/jpeg" /> 
                        <img src="img/jpg/iou-bot.jpg" alt="IOU Discord Bot Screenshot" />
                    </picture>
                    <div className="project-text">
                        <h3>IOU Bot</h3>
                        <p>IOU Bot is a Discord bot made for the official IOURPG game Discord server. This was my first time developing using the Discord JS API, which I found quite enjoyable.</p>
                        <p>The bots noteable features include adding custom commands, advertising parties and guilds by adding them to a locally stored database which is private messaged to interested members when requested, a voting system and a scheduler which pings members with the bingo role 10 minutes prior to the in-game bingo. This is to prevent players from forgetting to sign up for bingo.</p>
                        <p>An extended version of this bot for IOU Guild Discord Servers can be found at <a href="https://github.com/puremana/me-bot" target="_blank" rel="noreferrer noopener">https://github.com/puremana/me-bot</a>.</p>
                    </div>
                    <div className="project-tags">
                        <div className="tag tag-nodejs">Node JS</div>
                        <div className="tag tag-discordjs">Discord JS</div>
                        <div className="tag tag-json">JSON</div>
                    </div>
                    <div className="project-links">
                        <a className="project-button" href="https://github.com/puremana/iou-bot" target="_blank" rel="noreferrer noopener">
                            <span className="fab fa-github"></span> View Github
                        </a>
                        <a className="project-button" href="https://discord.gg/zynuQcP" target="_blank" rel="noreferrer noopener">
                            <span className="fab fa-discord"></span> View Discord
                        </a>
                    </div>
                </div>

                <div className="project">
                    <picture className="project-image">
                        <source srcSet="img/webp/random-food-picker.webp" type="image/webp" />
                        <source srcSet="img/jpg/random-food-picker.jpg" type="image/jpeg" /> 
                        <img src="img/jpg/random-food-picker.jpg" alt="Random Food Picker Screenshot" />
                    </picture>
                    <div className="project-text">
                        <h3>Random Food Picker</h3>
                        <p>The Random Food Picker is a fun little web app I made to entice my coworkers to try different takeouts at lunch. You can read the full story on my <a href="https://blog.jeremyshaw.co.nz/2018/11/19/CORS-And-Hiding-Api-Keys/">blog post</a>. For this project I used Vue, Firebase Cloud Functions and the Yelp Fusion and Algolia Places API's.</p>
                    </div>
                    <div className="project-tags">
                        <div className="tag tag-html">HTML5</div>
                        <div className="tag tag-scss">SCSS</div>
                        <div className="tag tag-js">JS</div>
                        <div className="tag tag-vue">Vue</div>
                        <div className="tag tag-firebase">Firebase Functions</div>
                        <div className="tag tag-yelp">Yelp Fusion</div>
                        <div className="tag tag-algolia-places">Algolia Places</div>
                    </div>
                    <div className="project-links">
                        <a className="project-button" href="https://food-roulette-3dd83.firebaseapp.com/" target="_blank" rel="noreferrer noopener">
                            <span className="fas fa-link"></span> View Website
                        </a>
                        <a className="project-button" href="https://github.com/puremana/food-roulette" target="_blank" rel="noreferrer noopener">
                            <span className="fab fa-github"></span> View Github
                        </a> 
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Projects;