import { Component } from "react";
import Contador from "../../components/indireta1/Contador";

export default class ContadorPage extends Component {
    
    render() {
        return (
        <>
            <Contador valorInicial={100} passo={100} />
            <Contador />

            </>
        )
    }
}