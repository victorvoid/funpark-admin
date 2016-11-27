import React, {Component} from 'react';

export class InputGender extends Component{
    render(){
        return(
            <div className="gender">
                <input type="radio" onChange={this.props.onChange}
                        value="masculino" id="male" name="gender"
                        checked={this.props.value === 'masculino'}>
                </input>
                <label htmlFor="male" className="radio">Masculino</label>

                <input type="radio" onChange={this.props.onChange}
                        value="feminino" id="female" name="gender"
                        checked={this.props.value === 'feminino'}>
                </input>
                <label htmlFor="female" className="radio">Feminino</label>
            </div>
        );
    }
}
