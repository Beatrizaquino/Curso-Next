export default function Filho1(props) {
    console.log(props.funcao)
    return (
        <div>
            <h1>F I L H O D A P U T A</h1>
            <button onClick={ ( ) => props.funcao("PAI EU SOU UM GENIO, MAS AS VEZES SOU UM LIXO")}>Speak to pai</button>
        </div>
    )
}