import React from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import MedicamentosList from "./Components/medicamentos/MedicamentosList"
import MedicamentosForm from "./Components/medicamentos/MedicamentosForm"

class App extends React.Component{
    render(){
        return(
        
        <div className="ui container">
            <Router>
                <Menu></Menu>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/Medicamentos" component={MedicamentosList}></Route>
                <Router exact path="/about" component={About}></Router>
                <Router exact path="/medicamentos/Add" component={MedicamentosForm}></Router>
            </Router>
        </div>
        )
    }
}

export default App;
