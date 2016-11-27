import React, {Component} from 'react';
import Dropdown from 'react-dropdown';

export class SelectMaritalStatus extends Component{

    constructor(props){
        super(props);
        this.state = {
            options: [
                { value: 'solteiro', label: 'Solteiro' },
                { value: 'casado'  , label: 'Casado'   }
            ]
		};
    }

    render(){
        return(
            <div className="maritalStatus-content">
                <Dropdown
                    options={this.state.options}
                    onChange={this.props.onChange}
                    value={this.state.options[0]}
                    placeholder="Selecione o Estado Civil"
                />
            </div>
       );
    }
}
