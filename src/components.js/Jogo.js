import palavras from "../palavras";
import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"

export default function Jogo (props){
    const {iniciar, erro} = props
    const forcas = [forca0, forca1 ,forca2 , forca3 ,forca4 ,forca5 ,forca6]
    return (

    <>
    <div className="container">
        <Forca  forcas={forcas} erro={erro}/>
        <Direita iniciar={iniciar}/>
    </div>
    </>

)

}

function Direita (props){
    const {iniciar} = props


    return(
        <div className="direita">
        <div className="botao">
            <button onClick={iniciar}>
            Escolher palavra
            </button>
        </div>
            <div className="palavra-jogo">
            <div className="letra-jogo">_</div>
            <div className="letra-jogo">_</div>
            <div className="letra-jogo">_</div>
            <div className="letra-jogo">_</div>
            <div className="letra-jogo">_</div>
            <div className="letra-jogo">_</div>                
            <div className="letra-jogo">_</div>
            <div className="letra-jogo">_</div>
            <div className="letra-jogo">_</div>
            <div className="letra-jogo">_</div>
        </div>
    </div>
    )
}

function Forca(props){
    const {forcas, erro} = props
    return (
        <div className="forca">
            <img src={forcas[erro]} alt="forca"/>
        </div>
    )
}