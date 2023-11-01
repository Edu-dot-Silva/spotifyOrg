import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='redesSociais'>
                <img className='redesRodape' src='./imagens/instagram.png' alt='' />
                <img className='redesRodape' src='./imagens/spotify.png' alt=''/>
                <img className='redesRodape' src='./imagens/twitter.png' alt='' />
            </div>
            <div className='textoRodape'>
                <p>Projeto desenvolvido para treinar fundamentos de React ensinados na Alura ©2023</p>
            </div>
            <div className='logoRodape'>
                <img className='logoRodape' src='./imagens/logo.png' alt=''/>
            </div>
        </footer>
    )
}

export default Rodape