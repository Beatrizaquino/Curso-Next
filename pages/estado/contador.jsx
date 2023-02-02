//FAZER UM CONTADOR
//TRABALHAR COM O ESTADO DO COMPONENTE
//TRABALHAR COM A AÇÃO DO BOTÃO DE ADICIONAR E RETIRAR

import { useState } from "react";
import NumeroDisplay from "../../components/NuDisplay";

export default function Contador() {
  const estilo = {
    color: "#fff",
    height: "50px",
    width: "50px",
    backgroundColor: "#222",
  };

  const [numero, setNumero] = useState(0);

  function inc() {
    setNumero(numero + 1);
  }

  function dec() {
    setNumero(numero - 1);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#ffcbdb",
        color: "#fff",
      }}
    >
      <h1>C O N T A D O R</h1>
      <NumeroDisplay numero={numero} />
      <div>
        <button style={estilo} onClick={dec}>
          -{" "}
        </button>
        <button style={estilo} onClick={inc}>
          +{" "}
        </button>
      </div>
    </div>
  );
}
