export default function Jogo (){
return (
    <>
    <div className="container">
        <Forca  />
        <Direita />
    </div>
    </>

)

}

function Direita (){
    return(
        <div className="direita">
        <div className="botao">
        <button onClick={() => console.log('oi,bb')}>Escolher palavra</button>
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

function Forca(){
    return (
        <div className="forca">
            <img src="./assets/imgs/forca0.png" alt="forca"/>
        </div>
    )
}