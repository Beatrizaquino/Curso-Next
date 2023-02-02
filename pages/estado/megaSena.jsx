import { useEffect } from "react";
import { useState } from "react";
import NumeroDisplay from "../../components/NuDisplay";
import { mega } from "../../functions/mega";

export default function megaSena() {
  const [qtde, setQtde] = useState(6);
  const [numeros, setNumeros] = useState([]);

  useEffect(() => {
    setNumeros(mega())
  }, [])

  function renderNumeros() {
    return numeros.map((numero) => (
      <NumeroDisplay key={numero} numero={numero} />
    ));
  }
  const styleBUtton = {
    backgroundColor: "#fff",
    color: "#000",
    fontSize: "25px",
    padding: "15px",
    borderRadius: "20px"
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1>MERDA DE MEGA SENA</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>{renderNumeros()}</div>
      <div>
        <input type="number"  min={6} max={20} value={qtde} onChange={ev => setQtde(ev.target.value)}/>
        <button style={styleBUtton} onClick={ () => setNumeros(mega(qtde))}>  Gerar aposta</button>
      </div>
    </div>
  );
}
