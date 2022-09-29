import { useState } from "react";
import "../../style/global.css";
import "../../style/input.css";
import "../../style/select.css";
import "./style.css";

const Create = ({addList}) => {
    const [descricaoData, setdescricaoData] = useState('');
    const [valorData, setValorData] = useState();
    const [tipoData, setTipoData] = useState('Entrada');
    function handleSubmit(event){
        event.preventDefault();
        if(descricaoData.length && valorData.length){
            addList({
                descricao: descricaoData,
                valor: valorData,
                tipo: tipoData,
            });
            setdescricaoData('')
            setValorData('')
        }
    }

    return(
        <div className="create_container">
          <form onSubmit={(event)=> handleSubmit(event)} className="form_container" >

            <p>Descrição</p>
            <input type="text"  placeholder="Digite aqui sua descrição" onChange={(event) => setdescricaoData(event.target.value)} value={descricaoData} />
            <span>Ex: Compra de roupas</span>

            <div className="box_container">

                <div className="box_Create">
                    <span>Valor</span>
                    <input type="number" placeholder="R$" onChange={(event) => setValorData(event.target.value) } value={valorData} />
                </div>

                <div className="box_Create">
                    <span>Tipo de valor</span>

                    <select onChange={(event) => setTipoData(event.target.value)}>   
                        <option value="Entrada">Entrada</option>
                        <option value="Despesa">Despesa</option>
                    </select>
                </div>
            </div>
                    <button type="submit" className="button_create">Inserir valor</button>
            </form>
        </div>
    )
}
export default Create