import Filho from "./Filho";

export default function Pai(props) {
    return (
        <div>
            <h1> Família {props.familia}</h1>
            <Filho nome="Beatriz" familia="aquino" />
            <Filho nome="Bruno" familia="Acioli" />
            <Filho nome="Bianca" familia="Amancio" />        
        </div>
    )
}