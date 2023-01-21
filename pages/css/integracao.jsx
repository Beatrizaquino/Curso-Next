//o css funciona como um style global - logo impacta em tudo que for gerado no mesmo classname
//definindo classe mãe para poder diferenciar no goblal styles

export default function integracao() {

    return (
        <div className="integracao">
            <div className="vermelha">Titutlo #1</div>
            <div className="azul">Titulo #2</div>
            <div className="branco">Titulo #3</div>
        </div>
    )
}