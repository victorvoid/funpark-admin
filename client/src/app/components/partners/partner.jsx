import React, {Component} from 'react';
import {Link} from 'react-router';

export class Partner extends Component{

    render(){
        return(
            <div className="wrapper">
                <h2>Sócios</h2>
                <div className="table">
                    <div className="row header blue">
                        <div className="cell">
                            Username
                        </div>
                        <div className="cell">
                            Email
                        </div>
                        <div className="cell">
                            Password
                        </div>
                        <div className="cell">
                            Active
                        </div>
                        </div>

                        <div className="row">
                            <div className="cell">
                                ninjalug
                            </div>
                            <div className="cell">
                                misterninja@hotmail.com
                            </div>
                            <div className="cell">
                                ************
                            </div>
                            <div className="cell">
                                Yes
                            </div>
                            </div>

                        <div className="row">
                            <div className="cell">
                                jsmith41
                            </div>
                            <div className="cell">
                                joseph.smith@gmail.com
                            </div>
                            <div className="cell">
                                ************
                            </div>
                            <div className="cell">
                                No
                            </div>
                        </div>

                        <div className="row">
                            <div className="cell">
                                1337hax0r15
                            </div>
                            <div className="cell">
                                hackerdude1000@aol.com
                            </div>
                            <div className="cell">
                                ************
                            </div>
                            <div className="cell">
                                Yes
                            </div>
                        </div>

                        <div className="row">
                            <div className="cell">
                                hairyharry19
                            </div>
                            <div className="cell">
                                harryharry@gmail.com
                            </div>
                            <div className="cell">
                                ************
                            </div>
                            <div className="cell">
                                Yes
                            </div>
                        </div>
                </div>
             </div>
        );
    }
}
