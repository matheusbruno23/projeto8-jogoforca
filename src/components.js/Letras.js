import React from "react"
import alfabeto from "../alfabeto"

export default function Letras(props){
    const {letrasClicadas , escolherLetra, desabilitar} = props


    return (
        <div className="teclado">
        <div className="container-letras">
            {alfabeto.map (l => (
            <button data-test="letter"
            onClick={() => escolherLetra(l)}
            disabled={desabilitar || letrasClicadas.includes(l)} 
            className={desabilitar|| letrasClicadas.includes(l) ? "clicada" : ""}
            key={l}
            > 
            {l.toUpperCase()}
            </button>
            ))}
        </div>
        </div>
    )
}

