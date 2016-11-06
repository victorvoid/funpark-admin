import React, {Component} from 'react';

export class StatusPayment extends Component{
    constructor(){
        super();
        this.state = {
            paid: false
        };
        this.handleMessage = this.handleMessage.bind(this);
    }
    handleMessage(){
        return this.state.paid ? "Pagamento Efetuado" : "Aguardando Pagamento";
    }
    render(){
        return (
            <div className="statusPayment-content">
                <div className={this.state.paid? "pagou" : "naopagou"}>{this.handleMessage()}</div>
            </div>
        );
    }

}
