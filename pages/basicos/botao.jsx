 function acao1() {
    console.log("Parabéns!! sua existencia é uma merda")
 }

export default function botao() {
    return (
        <div> 
            <button onClick={acao1}>CLick</button>
            <button onClick={ () => console.log("testando o estado da açao")}>CLick 02</button>

        </div>
    )
}