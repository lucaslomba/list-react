import React from 'react';
import ListaDeNotas from './components/ListaDeNotas'

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Titulo"/>
        <textarea placeholder="Escreva sua nota"/>
        <button>Criar nota</button>
      </form>

      <ListaDeNotas/>
      </section>
  );
}

export default App;
