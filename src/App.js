import { useState } from "react";
import Jogo from "./components.js/Jogo";
import Letras from "./components.js/Letras";
import React from "react";
import palavras from "./palavras";
import alfabeto from "./alfabeto";

export default function App() {

  const [letrasClicadas, setLetrasClicadas] = useState([alfabeto])
  const [erro, setErro] = useState(0)
  const [corPalavra, setCorPalavra] = useState('preto')
  const [palavraEscolhida, setPalavraEscolhida] = useState([])
  const [palavraCerta, setPalavraCerta] = useState([])
  const [desabilitar, setDesabilitar] = useState(true)


  function escolherPalavra(){
    const index = Math.floor(Math.random() * palavras.length)
    const palavra = palavras[index]
    const arrayLetras = palavra.split('')
    setPalavraCerta(arrayLetras)



    let underline = []
    arrayLetras.forEach(() => underline.push("_ "))
    setPalavraEscolhida(underline)
  }

  function iniciar(){
    setLetrasClicadas([])
    setErro(0)
    escolherPalavra()
    setCorPalavra('preto')
    setDesabilitar(false)
    console.log(letrasClicadas)
  }


  function escolherLetra(letraClicada){
    setLetrasClicadas([...letrasClicadas,letraClicada])
  
    if(palavraCerta.includes(letraClicada)){
      acertou(letraClicada)
    }
    else{
      errou()
    }

  }

  function acertou(letraClicada){
    const palavraJogo = [...palavraEscolhida]

    palavraCerta.forEach((letra , i) =>{
      if(palavraCerta[i] === letraClicada){
        palavraJogo[i] = letra
      }

    })

    setPalavraEscolhida(palavraJogo)

    if(!palavraJogo.includes("_ ")){
      setCorPalavra('verde')
      desabilitarTudo()
    }

  }

  function errou(letraClicada){
    const erros = erro + 1
    setErro(erros)
    if(erros === 6){
      setCorPalavra('vermelho')
      desabilitarTudo()
    }
  }

    function desabilitarTudo(){
      setLetrasClicadas(alfabeto)
      setPalavraEscolhida(palavraCerta)
    }


  return (
    <div className="App">
      <Jogo iniciar={iniciar} erro={erro} palavraEscolhida={palavraEscolhida} corPalavra={corPalavra}/>
      
      <Letras letrasClicadas={letrasClicadas} escolherLetra={escolherLetra} desabilitar={desabilitar}/>
    </div>
  );
}


