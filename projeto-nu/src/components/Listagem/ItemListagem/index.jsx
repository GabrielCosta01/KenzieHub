import imgTrash from "../../../assets/trash.png"

const ItemListagem = ({item, removeListItem}) => {
    return(
        <>
            <li className={
                item.tipo === 'Entrada' ? 'card_li entry' : 'card_li output'
            }>
                <div className="div_card">
                    <h2>{item.descricao}</h2>
                    <span>R${item.valor}</span>
                    <img src={imgTrash} alt="Icone de lixeira" onClick={()=>removeListItem(item)} />
                </div>
                <p>{item.tipo}</p>
            </li>
        </>
    )
}

export default ItemListagem