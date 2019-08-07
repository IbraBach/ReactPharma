import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class MedicamentosList extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            medicamnetos: []
         }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/medicamentos")
            .then( res => {
                console.log (res.data);
                this.setState(res.data);
            })
    }

    delete = id => {
        axios.delete(`http://localhost:3001/medicamentos/${id}/`)
        .then(res => {
            const nuevosElementos = this.state.medicamnetos.filter(i => (i.id !== id));
            console.log(nuevosElementos)
            this.setState({
                medicamnetos: nuevosElementos
            })

        })
    }

    render() { 
        return (
            <div>
                <Link id="medicamentos" className="ui primayr button" to="/medicamentos/add">
                    <i className="icon plus"></i>
                </Link>
                <table class="ui red table">
                <thead>
                    
                </thead>
                <tbody>
                    {
                        this.state.medicamnetos.map(
                            item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td style={{textAlign: "right"}}>
                                            <button class="ui primary button">VER</button>
                                            <button class="ui red button" onClick={event => this.delete()}>BORRAR</button> {/* hay que convertir la acción de borrar en un evento */}                                 
                                        </td>
                                    </tr>
                                )
                            }
                        )
                    }
                    <tr>
                        <td>Apples</td>
                        <td>200</td>
                        <td>0g</td>
                    </tr>
                    <tr>
                    <td>Orange</td>
                    <td>310</td>
                    <td>0g</td>
                    </tr>
                </tbody>
            </table>
            </div>
            );
    }
}

export default MedicamentosList;