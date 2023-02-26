import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"

export default function Jogo (props){
    const {iniciar, erro , palavraEscolhida, corPalavra} = props
    const forcas = [forca0, forca1 ,forca2 , forca3 ,forca4 ,forca5 ,forca6]
    return (

    <>
    <div className="container">
        <Forca  forcas={forcas} erro={erro}/>
        <Direita iniciar={iniciar} palavraEscolhida={palavraEscolhida} corPalavra={corPalavra} />
    </div>
    </>

)

}

function Direita (props){
    const {iniciar, palavraEscolhida, corPalavra} = props


    return(
        <div className="direita">
        <div className="botao">
            <button data-test="choose-word" onClick={iniciar}>
            Escolher palavra
            </button>
        </div>
        <div className="palavra-jogo">
            <h1 data-test="word" className={corPalavra}>{palavraEscolhida}</h1>
        </div>
    </div>
    )
}

function Forca(props){
    const {forcas, erro} = props
    return (
        <div className="forca">
            <img  data-test="game-image" src={forcas[erro]} alt="forca"/>
        </div>
    )
}