import { useState } from "react";
import Jogo from "./components.js/Jogo";
import Letras from "./components.js/Letras";
import React from "react";
import alfabeto from "./alfabeto";

export default function App() {

  const [letrasClicadas, setLetrasClicadas] = useState([alfabeto])
  const [erro, setErro] = useState(0)


  function iniciar(){
    setLetrasClicadas([])
  }


  return (
    <div className="App">
      <Jogo iniciar={iniciar} erro={erro}/>
      
      <Letras letrasClicadas={letrasClicadas} />
    </div>
  );
}


