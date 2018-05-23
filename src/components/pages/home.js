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
        <div class="home-page">
            <NavBar page="home"/>
            
        </div>
    );
  }
}

export default Home;