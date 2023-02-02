import { useState } from "react"

export default function formulario() {

    const estilo = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",

    }

    const estilobutton = {
        backgroundColor: "#fff",
        color: "#000",
        height: "30px",
        width: "100px",
        margin: "20px",
        borderRadius: "40px",
        fontSize: "20px"
    }

    const  estiloinput = {
        padding: "10px",
        borderRadius: "30px",
        fontSize: "15px"


    }

    const [valor, setValor] = useState("inicial")

    function alterarValor() {
        setValor(valor + "@")
    }

    return (
        <div style={estilo}>
            <input style={estiloinput} type= "text" value={valor} onChange = {e => setValor(e.target.value)}/>
            <button style={estilobutton} onClick={alterarValor}> Alterar </button>
        </div>
    )
}