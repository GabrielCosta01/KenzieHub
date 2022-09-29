/* eslint-disable no-undef */
import "./style.css"
import ItemListagem from "./ItemListagem"
import imgTrash from "../../assets/trash.png"

const Listagem = ({ listasItens, removeListItem, filtered ,setFiltered }) => {

  function filter(tipo){
    let filtrado = listasItens.filter(item => item.tipo === tipo )
    
    console.log(filtrado);
    filteredList(filtrado)
    setFiltered([...filtrado])
  } 
  
  function filteredList(filtered){
    const listaFiltrada = filtered
    console.log(listaFiltrada);

    const ul = document.querySelector('.lista_ul')
    ul.innerHTML = ''

    filtered.map((item, index) => (
    
    <li className='card_li entry' key={index}>
          <div className="div_card">
              <h2>{item.descricao}</h2>
              <span>R${item.valor}</span>
              <img src={imgTrash} alt="Icone de lixeira" onClick={()=>removeListItem(item)} />
          </div>
          <p>{item.tipo}</p>
      </li>
))

  }

  function filterAll(){
    const ul = document.querySelector('.lista_ul');
    ul.innerHTML = ''
    console.log(listasItens);
    return (        
            listasItens.length
             ?
              <ul className="lista_ul">{listasItens.map((itemFinanceiro, index) => (
                console.log(itemFinanceiro)
                  // <ItemListagem key={index} item={itemFinanceiro} removeListItem={removeListItem} />
                    ))}
            </ul>
            :
            <h1>Você ainda não possui nenhum lançamento</h1>
          )
  }
    return(
        <>
        <div className="headerListagem_container">
          <h1>Resumo financeiro</h1>
            <div>
              <button onClick={()=> filterAll()}>Todos</button>
              <button onClick={()=> filter('Entrada')}>Entradas</button>
              <button onClick={()=> filter('Despesa')}>Despesas</button>
            </div>
        </div>

        {filtered.map((itemFinanceiro, index) => (
          
            <li className={itemFinanceiro.tipo === 'Entrada' ? 'card_li entry' : 'card_li output'} key={index}>
                <div className="div_card">
                    <h2>{itemFinanceiro.descricao}</h2>
                    <span>R${itemFinanceiro.valor}</span>
                    <img src={imgTrash} alt="Icone de lixeira" onClick={()=>removeListItem(item)} />
                </div>
                <p>{itemFinanceiro.tipo}</p>
            </li>
        ))}
        
        {
        listasItens.length ?
          <ul className="lista_ul">{listasItens.map((itemFinanceiro, index) => (
              <ItemListagem key={index} item={itemFinanceiro} removeListItem={removeListItem} />
                ))}
        </ul>
        :
         <h1>Você ainda não possui nenhum lançamento</h1>
         }
           
        </>
    )
}
export default Listagem