import './Formulario.css'
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';


const Formulario = ({ aoArtistaCadastrado, generos, cadastrarGenero }) => {

    const [artista, setArtista] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [genero, setGenero] = useState('')

    const [nomeGenero, setNomeGenero] = useState('')
    const [corGenero, setCorGenero] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoArtistaCadastrado({
            artista: artista,
            descricao: descricao,
            imagem: imagem,
            genero: genero
        })
        setArtista('')
        setDescricao('')
        setImagem('')
        setGenero('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados parar criar o card do artista</h2>
                <Campo
                    obrigatorio={true}
                    label="Artista"
                    placeholder="Digite o nome do artista ou banda"
                    valor={artista}
                    aoAlterado={valor => setArtista(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="Descrição"
                    placeholder="Digite uma pequena descrição"
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)}
                />
                <Campo
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Gênero"
                    itens={generos}
                    valor={genero}
                    aoAlterado={valor => setGenero(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>

            <form onSubmit={(evento) => {
                evento.preventDefault()
                cadastrarGenero({ nome: nomeGenero, cor: corGenero })
            }}>
                <h2>Preencha os dados parar criar um novo gênero</h2>
                <Campo
                    obrigatorio
                    label="Gênero"
                    placeholder="Digite o genero"
                    valor={nomeGenero}
                    aoAlterado={valor => setNomeGenero(valor)}
                />
                <Campo
                    obrigatorio
                    type='color'
                    label="Cor"
                    placeholder="Digite a cor em hexadecimal"
                    valor={corGenero}
                    aoAlterado={valor => setCorGenero(valor)}
                />
                <Botao>
                    Criar
                    Genero
                </Botao>
            </form>
        </section>
    )
}

export default Formulario