import React, { Component } from 'react';
import Axios from 'axios';


class MedicamentosForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nombre: ""
        }
    }

    handleNameChange = event => {
        console.log(event.target.value)
        
        this.setState({
            nombre: event.target.value
        })
    }

    handleSave=  event => {
        event.preventDefault()
        Axios.post("http://localhost:3001/medicamentos", {
            name: this.state.nombre
        })
        .then( res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err);
        })
        this.props.history.push("/medicamentos");
        
    }

    render() { 
        return (
            <div className="medicamentos-form">
                <form className="ui form">
                    <div className="field">
                        <label>Nombre medicamento</label>
                        <input type="text" name="medicamento" placeholder="Nombre del medicamento" value={this.state.name} onChange={this.handleNameChange}></input>
                    </div>
                    <button className="ui primary button" onClick={this.handleSave}>Guardar</button>
                </form>
            </div>
        );
    }
}
 
export default MedicamentosForm;