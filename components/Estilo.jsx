//uitilizando styles no html poi assim você consegue aplicar condicional, se um elemntor for maior que 0 aplicar uma determinada classe
export default function Estilo(props) {
    //const classeAplicada = props.numero >= 0 ? "azul" : "vermelha" - pode-se declarar desta forma ou declarar direto dentro da classname

    return (
        <div>
            <h1 style={{backgroundColor: props.numero >= 0? "#f4f4": "#f1f1f1", 
            color: "#fff",
            textAlign: "center"
            }}>
                Texto Qualquer
                </h1>
            <h2 className={ props.numero >= 0 ? "azul" : "vermelha"}>Texto #02</h2>
        </div>
    )
}