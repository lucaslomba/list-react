import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas'
import FormularioCadastro from './components/FormularioCadastro'
import "./assets/App.css"

class App extends Component{
  render(){
    return (
      <section>
        <FormularioCadastro/>
        <ListaDeNotas/>
        </section>
    );
  }
}

export default App;
