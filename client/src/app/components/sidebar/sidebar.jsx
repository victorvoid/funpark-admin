import React, {Component} from 'react';
import {Link} from 'react-router';

export class Sidebar extends Component{

    render(){
        return(
            <div className="sidebar">
                <a className="logo" href="./">FunPark</a>
                <div className="routes">
                    <ul>
                        <li>
                            <Link to="/cadastrar">
                                <span className="icon-user-plus"></span>Cadastrar sócio
                            </Link>
                        </li>
                        <li>
                            <Link to='/socios'>
                                <span className="icon-users"></span>Sócios
                            </Link>
                        </li>
                        <li>
                            <Link to='/pendentes'>
                                <span className="icon-user-minus"></span>Sócios pendentes
                            </Link>
                        </li>
                        <li>
                            <Link to='/geraringresso'>
                                <span className="icon-clipboard"></span>Gerar Ingresso
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
