export default function Titulo(props) {

    return props.pequeno ? (
    <>
        <p>{props.principal}</p>
        <p>{props.secundario}</p>
    </>
    ) : (
    <>
        <h1>{props.principal}</h1>
        <h1>{props.secundario}</h1>
    </>
    )


}

//todo mundo vai usar props enton usa props