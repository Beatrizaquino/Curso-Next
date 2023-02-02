import { Component } from "react";

export default class Contador extends Component {

    //iniciando um estado interno
    state = {
        num: this.props.valorInicial ?? 0,
        passo:  this.props.passo ?? 1
    }

    inc = () => {
        this.setState({
            num: this.state.num  + this.state.passo 
        })
    }

    dec = () => {
        this.setState({
            num: this.state.num  - this.state.passo
        })
    }
   
    render() {
        return(
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100vh"
            }}> 
                <h1>C O N TA D O R (usando classe)</h1>
            
                <h2>{this.state.num}</h2>
                
                <input type="number" min={1} max={100} value ={this.state.passo}
                onChange={ ev => this.setState({passo: +ev.target.value})}/> 
                <div>
                <button onClick={this.dec}> Clique aqui</button>
                <button onClick={this.inc}> Clique aqui</button>
                </div>
            </div>
        )
    }
}