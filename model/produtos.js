export default class Produto {
    #id
    #nome
    #preco
//colcoar um jogo da velha na frente da propiedade declara como uma propiedade privada


//agora declaramos o tipo
    constructor(id, nome, preco) {

        this.#id = id
        this.#nome = nome
        this.#preco = preco
    }

    //criamos o metodo get para acessar os valores/atributos
    get id() {
        return this.#id
    }

    get nome() {
        return this.#nome
    }

    get preco() {
        return this.#preco
    }
}