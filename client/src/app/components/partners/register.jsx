import React, {Component} from 'react';
import {Link} from 'react-router';
import {InputGender} from './form/inputGender.jsx';
import {SelectMaritalStatus} from './form/selectMaritalStatus.jsx';
import {SelectPackage} from './form/selectPackage.jsx';
import {SelectActivities} from './form/selectActivities.jsx';
import {SelectHasDependent} from './form/selectHasDependent.jsx';
import {StatusPayment} from './form/statusPayment.jsx';
import $ from 'jquery/dist/jquery.min.js';

export class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: "",
            dt_nascimento: "",
            rg: "",
            cpf: "",
            genero: "masculino",
            estado_civil: "solteiro",
            endereco: "",
            complemento: "",
            numero: "",
            cep: "",
            bairro: "",
            estado: "",
            telefone: "",
            email: "",
            descricao: "",
            rg: "", 
            loading: false, 
            errors: {}
        };

        this.enviaForm          = this.enviaForm.bind(this);
        this.setNome            = this.setNome.bind(this);
        this.setDataNascimento  = this.setDataNascimento.bind(this);
        this.setRg              = this.setRg.bind(this);
        this.setCpf             = this.setCpf.bind(this);
        this.setTelefone        = this.setTelefone.bind(this);
        this.setEndereco        = this.setEndereco.bind(this);
        this.setComplemento     = this.setComplemento.bind(this);
        this.setNumero          = this.setNumero.bind(this);
        this.setCep             = this.setCep.bind(this);
        this.setBairro          = this.setBairro.bind(this);
        this.setEstado          = this.setEstado.bind(this);
        this.setEmail           = this.setEmail.bind(this);
        this.setDescricao       = this.setDescricao.bind(this);
        this.setGenero          = this.setGenero.bind(this);
        this.setEstadoCivil     = this.setEstadoCivil.bind(this);
    }

    enviaForm(e){
        e.preventDefault();
        $.ajax({
          url: 'http://localhost:3002/partners/register',
          type: 'POST',
          contentType: "application/json",
          dataType: "json",
          data: JSON.stringify({
            nome: this.state.nome,
            dt_nascimento: this.state.dt_nascimento,
            rg: this.state_rg,
            cpf: this.state.cpf,
            endereco: this.state.endereco,
            complemento: this.state.complemento,
            numero: this.state.numero,
            cep: this.state.cep,
            bairro: this.state.bairro,
            estado: this.state.estado,
            telefone: this.state.telefone,
            email: this.state.email,
            descricao: this.state.descricao,
            rg: this.state.rg,
            genero: this.state.genero,
            estado_civil: this.state.estado_civil
          }),
          success: function(novaListagem){
            this.setState({nome: '', email: ''});
            console.log(novaListagem);
          }.bind(this),
          error: function(){
            console.log('error');
          }
        })
    }

    setNome(e){
        this.setState({nome: e.target.value});
    }

    setDataNascimento(e){
        this.setState({dt_nascimento: e.target.value});
    }

    setRg(e){
        this.setState({rg: e.target.value});
    }

    setCpf(e){
        this.setState({cpf: e.target.value});
    }

    setEndereco(e){
        this.setState({endereco: e.target.value});
    }

    setComplemento(e){
        this.setState({complemento: e.target.value});
    }

    setNumero(e){
        this.setState({numero: e.target.value});
    }

    setCep(e){
        this.setState({cep: e.target.value});
    }

    setBairro(e){
        this.setState({bairro: e.target.value});
    }

    setEstado(e){
        this.setState({estado: e.target.value});
    }

    setTelefone(e){
        this.setState({telefone: e.target.value});
    }

    setEmail(e){
        this.setState({email: e.target.value});
    }

    setDescricao(e){
        this.setDescricao({descricao: e.target.value});
    }
    setGenero(e){
        this.setState({genero: e.target.value});
    }
    setEstadoCivil(option){
        console.log('estado civil: ', option);
        console.log('estado civil: ', option.value);
        this.setState({estado_civil: option.value});        
    }
    render(){
        return(
            <div className="cadastrar-socio">
                <h2>Cadastrar novo sócio</h2>
                <div className="form-cadastrar-content">
                    <form method="POST" className="form-cadastrar" ref='user_form' onSubmit={this.enviaForm}>
                        <InputGender onChange={this.setGenero} value={this.state.genero}/>
                        <input id="nome" type="text" placeholder="Nome completo" onChange={this.setNome}></input>
                        <input id="dt_nascimento" type="text" placeholder="Data de Nascimento" onChange={this.setDataNascimento}></input>
                        <input id="rg" type="text" placeholder="RG" onChange={this.setRg}></input>
                        <input id="cpf" type="text" placeholder="CPF" onChange={this.setCpf}></input>
                        <SelectMaritalStatus value={this.state.estado_civil} onChange={this.setEstadoCivil}/>
                        <input id="endereco" type="text" placeholder="Endereço" onChange={this.setEndereco}></input>
                        <input id="complemento" type="text" placeholder="Complemento" onChange={this.setComplemento}></input>
                        <input id="numero" type="number" placeholder="Número" onChange={this.setNumero}></input>
                        <input id="cep" type="text" placeholder="CEP" onChange={this.setCep}></input>
                        <input id="bairro" type="text" placeholder="Bairro" onChange={this.setBairro}></input>
                        <input id="estado" type="text" placeholder="Estado" onChange={this.setEstado}></input>
                        <input id="telefone" type="text" placeholder="Telefone" onChange={this.setTelefone}></input>
                        <input id="email" type="email" placeholder="Email" onChange={this.setEmail}></input>
                        <input id="descricao" type="text" placeholder="Descrição" onChange={this.setDescricao}></input>
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
