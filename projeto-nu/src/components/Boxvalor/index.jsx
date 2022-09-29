/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./style.css"

const Boxvalor = ({listaItens}) => {
    const listaValores = listaItens.map(item => parseInt(item.valor) );


    function valueTotal(lista){
        let total = lista.reduce((acc, valor) => acc + valor)
        return total
    }

    return (
        <>
            {listaValores.length !== 0 && (
                
                <div className="boxvalor_container">
                    <h4>Valor Total: {listaValores.length === 1 ? listaValores : valueTotal(listaValores)}</h4>
                    <p>O valor se refere ao saldo</p>
                </div>
            )}
        </>
    )
}

export default Boxvalor