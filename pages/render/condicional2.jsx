import If from "../../components/if";


export default function condicional() {

    const numero = 3
    return (
        <><If teste={numero % 2 === 0}>
            <h2>O número {numero} é par</h2>
        </If>
        <If teste={numero % 2 === 1}>
                <h2>O número {numero} é impar</h2>
        </If></>
    )
}