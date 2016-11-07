import React, {Component} from 'react';
import {Link} from 'react-router';

export class Header extends Component {
  render() {
    return (
        <header className="header-content">
            <h3 className="title">
                <Link to="/"><span className="icon-circle-left"></span><span>Voltar</span></Link>
            </h3>
        </header>
    );
  }
}
