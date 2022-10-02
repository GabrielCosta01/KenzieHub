/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import "./style/global.css"

import './App.css';
import { useState } from 'react';

import Body from "./style/body.js"

import Inicio from "./components/Inicio"
import Illustration from "./components/Illustration"

import Header from './components/Header';
import Creation from "./components/Creation"
import Boxvalor from "./components/Boxvalor";
import Listagem from './components/Listagem';

function App() {
  const listaCategorias = ['Todos', 'Entradas', 'Despesas'];
  
  const [listaItens, setListaItens] = useState([]);

const [filtered, setFiltered] = useState([])

const [isDashboard, setIsdashboard] = useState(false) 



function isIndex(){
  setIsdashboard(true)
}

function isDash(){
  setIsdashboard(false)
}

function addList(formData) {
  if(!listaItens.find(item => item.descricao.toLowerCase() === formData.descricao.toLowerCase())){
    setListaItens([...listaItens, formData])
  }
}

function removeListItem(ClickedGame){
  const newList = listaItens.filter(item => item !== ClickedGame)
  if(confirm('Deseja realmente remover?')){
    setListaItens(newList);
  }
}

function removeListFiltro(ClickedGame){
  const newList = listaItens.filter(item => item !== ClickedGame)
  if(confirm('Deseja realmente remover?')){
    setListaItens(newList);
    setFiltered('');
  }
}

  return (
    <>
    <main className='main_container'>

{!isDashboard && <Inicio> <button onClick={() => isIndex()} className="buttons" id="btnInicio">Iniciar</button> </Inicio>}
{!isDashboard && <Illustration />}
    </main>

    {isDashboard && (
    <Body>
      <Header><button onClick={() => isDash()} className="buttonGrey">Inicio</button> </Header>
      <main className='mainDash_containerbody'>
          
          <section className='mainBody_section_container'>
            <Creation addList={addList} />
            <Boxvalor listaItens={listaItens} />
          </section>

          <section className='section_listagem'>
            <Listagem listasItens={listaItens} removeListItem={removeListItem} removeListFiltro={removeListFiltro} filtered={filtered} setFiltered={setFiltered}  />
          </section>

          </main>
    </Body>
    )}
      </>
  );
}

export default App;
