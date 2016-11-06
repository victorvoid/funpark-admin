import React, {Component} from 'react';
import Dropdown from 'react-dropdown';

export class SelectActivities extends Component {

    constructor(props){
        super(props);
        this.state = {
            options: [
                { value: 'atividade01', label: 'Atividade01' },
                { value: 'atividade02'  , label: 'Atividade02'}
            ],
            selected: 0
		    };

        this._onSelect = this._onSelect.bind(this);
    }
    _onSelect (option) {
        this.setState({selected: option});
    }
    render(){
        return(
            <div className="select-activities-content">
                <p>Selecione a atividade</p>
                <Dropdown
                    options={this.state.options}
                    onChange={this._onSelect}
                    value={this.state.options[0]}
                    placeholder="Selecione a atividade"
                />
            </div>
       );
    }
}
