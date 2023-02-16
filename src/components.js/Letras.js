import React from "react"

export default function Letras(props){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


    return (
        <div className="teclado">
        <div className="container-letras">
            {alfabeto.map((l)=> <Letra letra={l} classe={props.classe}></Letra>)}
        </div>
        </div>
    )
    function Letra(props){
        return (     
            <div className={props.classe}>{props.letra.toUpperCase()}</div>
            
        )
    
        
    }
}

