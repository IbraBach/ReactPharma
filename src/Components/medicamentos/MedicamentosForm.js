import React, { Component } from 'react';
import axios from 'axios';


class MedicamentosForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nombre: ""
        }
    }

    handleNombreChange = event => {
        this.setState({
            nombre: event.target.value
        })
    }

    handleSave=  event => {
        event.preventDefault()
        axios.post("http://localhost:3001/medicamentos", {
            name: this.state.nombre
        })
        .thrn( res => {
            console.log(res.data)
        })
        this.props.history.puch("/medicamentos")
    }

    render() { 
        return (
            <div className="medicamentos-form">
                <form class="ui form">
                    <div class="field">
                        <label>Nombre medicamento</label>
                        <input type="text" name="first-name" placeholder="Nombre del medicamento" value={this.state.nombre} onChange={this.handleNombreChange}></input>
                    </div>
                    <button className="ui primary button" onChange={this.handleSave}>Guardar</button>
                </form>
            </div>
        );
    }
}
 
export default MedicamentosForm;