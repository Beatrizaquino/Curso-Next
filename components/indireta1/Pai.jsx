import Filho1 from "./Filho1";

export default function Pai1(props) {

    function falarComigo(param){
        console.log(param)
        console.log("Somebody speak to me!")
    }

    return (
        <Filho1  funcao={falarComigo}/>
    )
}