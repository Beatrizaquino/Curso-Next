export default function jsx4( ) {
    const subtitulo = " Estou no JavaScript!"
    return (
        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{subtitulo}</h2>
            <h5>{entre(20, 1,11)}</h5>
        </div>
    )
}

function entre( valor, min,max) {
    if(valor >= min && valor<= max) {
        return "sim"
    } else {
        return "não"
    }
}