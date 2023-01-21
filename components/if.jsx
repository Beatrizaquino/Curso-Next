export default function If(props) {
    if(props.teste) {
        return props.children
    } else{
        return null
    }
}

//isso gera um componente que vamos renderizar de forma condicional