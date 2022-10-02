/* eslint-disable no-undef */
import "./style.css"
import ItemListagem from "./ItemListagem"
import imgTrash from "../../assets/trash.png"

const Listagem = ({ listasItens, removeListItem, removeListFiltro, filtered ,setFiltered }) => {

  function filter(tipo){
    const ul = document.querySelector('.lista_ul');
    ul.innerHTML = ''
    let filtrado = listasItens.filter(item => item.tipo === tipo )
    setFiltered([...filtrado])

  } 
  
    return(
        <>
        <div className="headerListagem_container">
          <h1>Resumo financeiro</h1>
            <div>
              <button>Todos</button>
              <button onClick={()=> filter('Entrada').remove()}>Entradas</button>
              <button onClick={()=> filter('Despesa')}>Despesas</button>
            </div>
        </div>



        {
        listasItens.length ?
          <ul className="lista_ul">{listasItens.map((itemFinanceiro, index) => (
              <ItemListagem key={index} item={itemFinanceiro} removeListItem={removeListItem} />
              
                ))}
        </ul>
        :
         <h1>Você ainda não possui nenhum lançamento</h1>
         }
           
           {filtered.length > 0 ?
        (filtered.map((itemFinanceiro, index) => (
          
            <li className={itemFinanceiro.tipo === 'Entrada' ? 'card_li entry' : 'card_li output'} key={index}>
                <div className="div_card">
                    <h2>{itemFinanceiro.descricao}</h2>
                    <span>R${itemFinanceiro.valor}</span>
                    <img src={imgTrash} alt="Icone de lixeira" onClick={()=>removeListFiltro(itemFinanceiro)} />
                </div>
                <p>{itemFinanceiro.tipo}</p>
            </li>
        )))
          :
          false
      }
        </>
    )
}
export default Listagem