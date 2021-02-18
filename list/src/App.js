import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas'
import FormularioCadastro from './components/FormularioCadastro'
import "./assets/App.css"

class App extends Component{

  constructor(){
    super()
    this.state = {
      notas: []
    }
  }

  criarNota(titulo, nota){
    const novaNota = {titulo, nota}
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
        </section>
    );
  }
}

export default App;
