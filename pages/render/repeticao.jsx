
//no exercicio de hoje aprendemos a transformar um array em um elemento jsx, porem od esafioé que todos os elemntos devem ter uma chave única, assim adicionados  apropria repetição da lista como um key pra o elementos
// também existe a possibilidade de usar um" MAP" que é uma função que seve para transformar um elemnto em outro(transformar uma string em uma li)

export default function Repeticao1() {

    const listaAprovados = [
        'maria',
        'João',
        'Lucas',
        'Beatriz',
        'Guilherme',
        'Karla',
        'Bianca'
    ]

/*   function renderizarLista() {

        const itens = []

        for (let i = 0; i < listaAprovados.length; i++) {
            itens.push(<li key={i}>{listaAprovados[i]}</li>)
        }

        return itens
        
    } */

    function renderizarLista() {
        return listaAprovados.map((nome, i ) => <li key={i}>{nome}</li>)
    }

    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}