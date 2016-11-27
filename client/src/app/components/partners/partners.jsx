import React, {Component} from 'react';
import {Link} from 'react-router';
import $ from 'jquery/dist/jquery.min.js';


export class Partners extends Component{
    constructor(props) {
        super(props);
        this.state = {
            partners: []
        };
        $.ajax({
            type:"GET",
            url: "http://localhost:3002/partners",
            headers: {
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTHVjYXMiLCJwYXNzd29yZCI6IjEyMzEyMyIsImlhdCI6MTQ3ODM1NzEzMH0.B4ZqJYxNE4UoGdDEeAKE2a0u_p8vBRaxUSs8kbgXvJ8'
            },
            success: (msg) => {
               this.setState({partners: msg});
               console.log("Requisicão feita com sucesso.", msg);
               console.log(msg);
            },
            error: (err) => {
                console.log('Erro: ', err);
            }
        });
    }
    
    removePartner(id){

    }

    render(){
        return(
            <div className="wrapper">
                <div className="content">
                    {this.props.children}
                </div>
                <h2>Sócios</h2>
                <div className="table">
                    <div className="row header blue">
                        <div className="cell">
                            Nome
                        </div>
                        <div className="cell">
                            Email
                        </div>
                        <div className="cell">
                            Nascimento
                        </div>
                        <div className="cell">
                            Genero
                        </div>
                        <div className="cell">
                            RG
                        </div>
                        <div className="cell">
                            Est Civil
                        </div>
                        <div className="cell">
                            Endereço
                        </div>
                         <div className="cell">
                            Complemento
                        </div>
                         <div className="cell">
                            Número
                        </div>
                         <div className="cell">
                            CEP
                        </div>
                        <div className="cell">
                            Bairro
                        </div>
                        <div className="cell">
                            Estado
                        </div>
                         <div className="cell">
                            Excluir
                        </div>
                    </div>

                    {
                        this.state.partners.map(function(partner) {
                            return <div className="row">
                                        <div className="cell">
                                            <span key={partner._id}><Link to={`/socio/${partner._id}`}>{partner.nome}</Link></span>
                                        </div>
                                        <div className="cell">
                                            {partner.email}
                                        </div>
                                        <div className="cell">
                                            {partner.dt_nascimento}
                                        </div>
                                        <div className="cell">
                                            {partner.genero}
                                        </div>
                                        <div className="cell">
                                            {partner.rg}
                                        </div>
                                        <div className="cell">
                                            {partner.estado_civil}
                                        </div>
                                        <div className="cell">
                                            {partner.endereco}
                                        </div>
                                        <div className="cell">
                                            {partner.complemento}
                                        </div>
                                        <div className="cell">
                                            {partner.numero}
                                        </div>
                                        <div className="cell">
                                            {partner.cep}
                                        </div>
                                        <div className="cell">
                                            {partner.bairro}
                                        </div>
                                        <div className="cell">
                                            {partner.estado}
                                        </div>
                                        <div className="cell partners-remove-icon">
                                            <span className="icon-cross"></span>
                                        </div>
                                    </div>
                        })
                    }
                </div>
             </div>
        );
    }
}
