import React, {Component} from 'react';
import {Header} from './components/header/header.jsx';
import {Sidebar} from './components/sidebar/sidebar.jsx';

export class Main extends Component {
  render() {
      return (
        <div>
            <Sidebar/>
            <div className="main">
                <Header/>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        </div>
    );
  }
}
