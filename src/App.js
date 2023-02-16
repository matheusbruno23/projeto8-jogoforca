import Jogo from "./components.js/Jogo";
import Letras from "./components.js/Letras";
import React from "react";
// import palavras from "./palavras";

export default function App() {

  const [erroForca, setErroForca] = React.useState(0);
    const [clicar , setClicar] = React.useState('letra naoclicada')

  const [aparecerPalavra, setAparecerPalavra] = React.useState('escondido')

  console.log(clicar)
  return (
    <div className="App">
      <Jogo erro={erroForca}/>
      
      <Letras classe={clicar}/>
    </div>
  );
}


