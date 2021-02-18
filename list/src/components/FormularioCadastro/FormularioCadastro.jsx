import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {
  constructor(props){
    super(props);
    this.titulo = "";
    this.nota = "";
    this.color = ""
  }
  
  _handleMudancaTitulo(event){
    event.stopPropagation()
    this.titulo = event.target.value
  }
  _handleMudancaTexto(event){
    event.stopPropagation()
    this.nota = event.target.value
  }

  _handleMudancaColor(event){
    event.stopPropagation()
    this.color = event.target.value
    console.log(this.color)
    document.getElementById("SelectColor").value = this.color 
  }

  _criarNota(event){
    event.preventDefault();
    event.stopPropagation()

    this.props.criarNota(this.titulo, this.nota)
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <div className="SelectAndSave">
          <div className="SelectColorDiv">
            <input type="color" id="SelectColor" value="#fff34f" onChange={this._handleMudancaColor.bind(this)}/>
            <p>Selecione a cor do post-it</p>
          </div>
          <button className="form-cadastro_submit">
            Criar Nota
          </button>
        </div>
      </form>
    );
  }
}

export default FormularioCadastro;
