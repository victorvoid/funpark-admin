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
                            <Link to="/cadastrar">Cadastrar sócio</Link>
                        </li>
                        <li>
                            <Link to='/socios'>Sócios</Link>
                        </li>
                        <li>
                            <Link to='/pendentes'>Sócios pendentes</Link>
                        </li>
                        <li>
                            <Link to='/geraringresso'>Gerar Ingresso</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
