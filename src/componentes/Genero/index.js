import Artista from '../Artista'
import './Genero.css'
import hexToRgba from 'hex-to-rgba';

const Genero = ({ genero, artistas, aoDeletar, mudarCor,aoFavoritar }) => {
    return (
        (artistas.length > 0) ?
            <section className='genero' style={{ backgroundColor: hexToRgba(genero.cor, '0.6') }}>
                <input onChange={evento => { mudarCor(evento.target.value, genero.id) }} value={genero.cor} type='color' className='inputCor' />
                <h3 style={{ borderColor: genero.cor }}>{genero.nome}</h3>
                <div className='artistas'>
                    {artistas.map((artista, indice) => {
                        return (
                            <Artista
                                corDeFundo={genero.cor}
                                key={indice}
                                artista={artista}
                                aoDeletar={aoDeletar}
                                aoFavoritar={aoFavoritar}
                            />)
                    })}
                </div>
            </section>
            : ''
    )
}

export default Genero


