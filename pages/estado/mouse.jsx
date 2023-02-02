import { useState } from "react";

export default function mouse() {
  const arrayX = useState(0);
  let x = arrayX[0];
  const alterarX = arrayX[1];

  const arrayY = useState(0);
  let y = arrayY[0];
  const alterarY = arrayY[1];

  const estilo = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffcbdb",
    color: "#fff",
    height: "100vh",
  };

  function quandoMouse(ev) {
    alterarX(ev.clientX);
    alterarY(ev.clientY);
  }

  return (
    <div style={estilo} onMouseMove={quandoMouse}>
      <div>Eixo X: {x}</div>
      <div>Eixo Y: {y}</div>
    </div>
  );
}
