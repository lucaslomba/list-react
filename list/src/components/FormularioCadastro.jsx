import React, { Component } from 'react'

export default class FormularioCadastro extends Component{
    render(){
        return(
            <form>
                <input type="text" placeholder="Titulo"/>
                <textarea placeholder="Escreva sua nota"/>
                <button>Criar nota</button>
            </form>
        )
    }
}