import React, {Component} from 'react';
import Dropdown from 'react-dropdown';

export class SelectMaritalStatus extends Component{

    constructor(props){
        super(props);
        this.state = {
            options: [
                { value: 'solteiro', label: 'Solteiro' },
                { value: 'casado'  , label: 'Casado'   }
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
            <div className="maritalStatus-content">
                <Dropdown
                    options={this.state.options}
                    onChange={this._onSelect}
                    value={this.state.options[0]}
                    placeholder="Selecione o Estado Civil"
                />
            </div>
       );
    }
}
