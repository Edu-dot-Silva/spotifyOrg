import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Genero from './componentes/Genero';
// import Artista from './componentes/Artista';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [generos, setGeneros] = useState([
    {
      id: uuidv4(),
      nome: 'Pop',
      cor: '#31b6a8'
    },
    {
      id: uuidv4(),
      nome: 'Rock',
      cor: '#000'
    },
    {
      id: uuidv4(),
      nome: 'Rap',
      cor: '#c2a52b'
    },
    {
      id: uuidv4(),
      nome: 'Eletronic',
      cor: '#3e25fc'
    },
    {
      id: uuidv4(),
      nome: 'RnB',
      cor: '#591659'
    },
    {
      id: uuidv4(),
      nome: 'Reggaeton',
      cor: '#dc8c18'
    },
    {
      id: uuidv4(),
      nome: 'Country',
      cor: '#703c36'
    }
  ])

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      artista: 'Edu',
      descricao: 'okflekclekc0',
      imagem: 'elckelkce',
      genero: generos[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      artista: 'Edu',
      descricao: 'okflekclekc0',
      imagem: 'elckelkce',
      genero: generos[1].nome
    },
  ]


  const [artistas, setArtistas] = useState(inicial)

  function deletarArtista(id) {
    setArtistas(artistas.filter(artista => artista.id !== id))
  }

  function mudarCorGenero(cor, id) {
    setGeneros(generos.map(genero => {
      if (genero.id === id) {
        genero.cor = cor;
      }
      return genero;
    }))
  }

  function cadastrarGenero (novoGenero){
    setGeneros([...generos,{...novoGenero ,id: uuidv4() }])
    alert('Gênero Criado!!! Veja na lista de gêneros do outro formulario.')
  }

  function resolverFavorito(id){
    setArtistas(artistas.map(artista =>{
      if(artista.id === id) artista.favorito = !artista.favorito;
      return artista
    }))
    

  }

  const aoNovoArtistaAdicionado = (artista) => {
    console.log(artista)
    setArtistas([...artistas, artista])
  }

  return (
    <div className="App">


      <Banner />
      <Formulario 

      cadastrarGenero={cadastrarGenero}

      generos={generos.map(genero => genero.nome)} 
      aoArtistaCadastrado={aoNovoArtistaAdicionado} />
      <p className='meusArtistas'>Meus artistas:</p>

      {generos.map((genero, indice) => <Genero
      aoFavoritar={resolverFavorito}
        mudarCor={mudarCorGenero}
        key={indice}
        genero={genero}
        // id={genero.id}
        nome={genero.nome}
        cor={genero.cor}
        artistas={artistas.filter(artista => artista.genero === genero.nome)}
        aoDeletar={deletarArtista}
      />)}

      <Rodape />


    </div>
  )
}

export default App;
