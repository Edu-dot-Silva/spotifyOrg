import { AiFillCloseCircle,AiFillHeart,AiOutlineHeart } from 'react-icons/ai'
// importando icone do react icons
import './Artista.css'

const Artista = ({ artista,corDeFundo, aoDeletar,aoFavoritar }) => {
    function favoritar(){
        aoFavoritar(artista.id)
    }
    return (
        <div className='artista'>
            <AiFillCloseCircle 
            size={25} 
            color='red' 
            className='deletar' 
            onClick={() => aoDeletar(artista.id)} 
            />
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={artista.imagem} alt={artista.nome} />
            </div>
            <div className='rodape'>
                <h4>{artista.artista}</h4>
                <h5>{artista.descricao}</h5>
                <div className='favoritar'>
                    {artista.favorito ? <AiFillHeart onClick={favoritar} color='#1DB954' size={40} cursor={"pointer"}/> : <AiOutlineHeart onClick={favoritar} color='black' size={40} cursor={"pointer"}/>}
                </div>
            </div>
        </div>
    )
}
export default Artista