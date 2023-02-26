import React from "react"
import alfabeto from "../alfabeto"

export default function Letras(props){
    const {letrasClicadas} = props


    return (
        <div className="teclado">
        <div className="container-letras">
            {alfabeto.map (l => (
            <button onClick={console.log(letrasClicadas.includes(l), letrasClicadas)} 
            disabled={letrasClicadas.length === 0  ? false : true} 
            className={letrasClicadas.length === 0 || letrasClicadas.includes(l) ? '': "clicada" }
            key={l}
            > 
            {l.toUpperCase()}
            </button>
            ))}
        </div>
        </div>
    )
}

