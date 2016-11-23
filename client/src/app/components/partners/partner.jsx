import React, {Component} from 'react';
import {Link} from 'react-router';
import {InputGender} from './form/inputGender.jsx';
import {SelectMaritalStatus} from './form/selectMaritalStatus.jsx';
import {SelectPackage} from './form/selectPackage.jsx';
import {SelectActivities} from './form/selectActivities.jsx';
import {SelectHasDependent} from './form/selectHasDependent.jsx';
import {StatusPayment} from './form/statusPayment.jsx';
export class Partner extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="cadastrar-socio">
                <h2>Atualizar sócio</h2>
                <div className="form-cadastrar-content">
                    <form method="POST" className="form-cadastrar">
                        <InputGender/>
                        <input id="nome" type="text" placeholder="Nome completo"></input>
                        <input id="dt_nascimento" type="text" placeholder="Data de Nascimento"></input>
                        <input id="rg" type="text" placeholder="RG"></input>
                        <input id="cpf" type="text" placeholder="CPF"></input>
                        <SelectMaritalStatus/>
                        <input id="endereco" type="text" placeholder="Endereço"></input>
                        <input id="complemento" type="text" placeholder="Complemento"></input>
                        <input id="numero" type="number" placeholder="Número"></input>
                        <input id="cep" type="text" placeholder="CEP"></input>
                        <input id="bairro" type="text" placeholder="Bairro"></input>
                        <input id="estado" type="text" placeholder="Estado"></input>
                        <input id="telefone" type="text" placeholder="Telefone"></input>
                        <input id="email" type="email" placeholder="Email"></input>
                        <input id="descricao" type="text" placeholder="Descrição"></input>
                        <SelectPackage/>
                        <SelectActivities/>
                        <SelectHasDependent/>
                        <div className="pagamento-content">
                            <p>Dados de Pagamento</p>
                            <StatusPayment/>
                            <input id="nome_cartao" type="text" placeholder="Nome do cartão"></input>
                            <input id="numero_cartao" type="text" placeholder="Número do cartão"></input>
                        </div>
                        <div className="enviar-content">
                            <input className="btn btn-active" type="submit" value="Cadastrar"></input>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
