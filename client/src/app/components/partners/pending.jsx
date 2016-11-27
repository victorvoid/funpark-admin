import React, {Component} from 'react';
import $ from 'jquery/dist/jquery.min.js';

/*
* Responsável pelos sócios pendentes.
*/
export class Pending extends Component {

	constructor(props) {
		super(props);
        this.state = {
            partners: []
        };
    this.atualizaLista = this.atualizaLista.bind(this);
    this.aceitarSocio = this.aceitarSocio.bind(this);
    this.atualizaLista();
	}

	/*
	* Atualiza a lista dos Sócios pendentes.
	*/
	atualizaLista(){
	    $.ajax({
	        type:"GET",
	        url: "http://localhost:3002/partners/pending",
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

	/*
	* Aceita o Sócio e deixa salvo no banco.
	* @params {:id}
	*/
	aceitarSocio(id){
		$.ajax({
	        type:"PUT",
	        url: "http://localhost:3002/partners/accepted/"+id,
	        headers: {
	            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTHVjYXMiLCJwYXNzd29yZCI6IjEyMzEyMyIsImlhdCI6MTQ3ODM1NzEzMH0.B4ZqJYxNE4UoGdDEeAKE2a0u_p8vBRaxUSs8kbgXvJ8'
	        },
	        success: (msg) => {
	           console.log(msg)
	           this.atualizaLista();
	        },
	        error: (err) => {
	            console.log('Erro: ', err);
	        }
	    });
	}

	/*
	* Rejeita o Sócio e remove do banco.
	* @params {:id}
	*/
	rejeitarSocio(id){
		$.ajax({
        type:"DELETE",
        url: 'http://localhost:3002/partners/delete/'+id,
        success: (msg) => {
					console.log(msg);
					this.atualizaLista();
        },
        error: (err) => {
            console.log('Erro: ', err);
        }
    });
	}

	render(){
        return(
            <div className="wrapper">
                <div className="content">
                    {this.props.children}
                </div>
                <h2>Sócios Pendentes</h2>
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
                            Número
                        </div>
                         <div className="cell">
                            CEP
                        </div>
                         <div className="cell">
                           Aceitar
                        </div>
                        <div className="cell">
                           Negar
                        </div>
                    </div>

                    {
                        this.state.partners.map((partner) => {
                            return <div className="row">
                                        <div className="cell">
                                           	{partner.nome}
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
                                            {partner.numero}
                                        </div>
                                        <div className="cell">
                                            {partner.cep}
                                        </div>
                                        <div className="cell partners-checkmark-icon" onClick={this.aceitarSocio.bind(this, partner._id)}>
                                            <span className="icon-checkmark"></span>
                                        </div>
                                        <div className="cell partners-remove-icon" onClick={this.rejeitarSocio.bind(this, partner._id)}>
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