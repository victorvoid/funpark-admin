import React, {Component} from 'react';

export class InputGender extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedOption: 'masculino'
        };
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange(changeEvent){
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };

    render(){
        return(
            <div className="gender">
                <input type="radio" onChange={this.handleOptionChange}
                        value="masculino" id="male" name="gender"
                        checked={this.state.selectedOption === 'masculino'}>
                </input>
                <label htmlFor="male" className="radio">Masculino</label>

                <input type="radio" onChange={this.handleOptionChange}
                        value="feminino" id="female" name="gender"
                        checked={this.state.selectedOption === 'feminino'}>
                </input>
                <label htmlFor="female" className="radio">Feminino</label>
            </div>
        );
    }
}
