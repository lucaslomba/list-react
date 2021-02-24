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

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1)

    this.setState({nota: arrayNotas})
  }

  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas apagarNota={this.deletarNota.bind(this)} notas={this.state.notas}/>
        </section>
    );
  }
}

export default App;
