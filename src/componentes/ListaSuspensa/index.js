import './Listasuspensa.css'

const ListaSuspensa = (props) => {
    
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)}  required={props.required} value={props.valor}>
                <option hidden>Selecione</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa