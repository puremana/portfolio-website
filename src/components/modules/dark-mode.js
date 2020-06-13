import React, { Component } from 'react';

class DarkMode extends Component {
    render() {
        return (
            <div onClick={this.props.toggleMode} className="button dark-mode">
                {this.props.mode ? 
                    <>
                        <span className="icon is-small"><i className="fa fa-sun"></i></span>
                        Light Mode
                    </>
                :
                    <>
                        <span className="icon is-small"><i className="fa fa-moon"></i></span>
                        Dark Mode
                    </>
                }
            </div>
        );
    }
}

export default DarkMode;