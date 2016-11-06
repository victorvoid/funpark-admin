import React, {Component} from 'react';
import Dropdown from 'react-dropdown';

export class SelectHasDependent extends Component {

    constructor(props){
        super(props);
        this.state = {
            options: [
                { value: true, label: 'SIM' },
                { value: false , label: 'NÃO'}
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
            <div className="select-hasDependent-content">
                <p>Possui dependentes?</p>
                <Dropdown
                    options={this.state.options}
                    onChange={this._onSelect}
                    value={this.state.options[0]}
                    placeholder="Possui Dependentes?"
                />
            </div>
       );
    }
}
