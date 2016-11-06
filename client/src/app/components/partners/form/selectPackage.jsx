import React, {Component} from 'react';
import Dropdown from 'react-dropdown';

export class SelectPackage extends Component {

    constructor(props){
        super(props);
        this.state = {
            options: [
                { value: 'pacote01', label: 'Pacote01' },
                { value: 'pacote02'  , label: 'Pacote02'   }
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
            <div className="select-package-content">
                <p>Selecione o pacote</p>
                <Dropdown
                    options={this.state.options}
                    onChange={this._onSelect}
                    value={this.state.options[0]}
                    placeholder="Selecione o pacote"
                />
            </div>
       );
    }
}
