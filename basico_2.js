const produto = {
    nome: "iPad",
    preco: 5600,
    desconto: 0.15,
    precoComDesconto: function() {
        return this.preco * (1 - this.desconto); // this é uma forma de referenciar o objeto... ou seja pra vc usar as propriedades voce TEM que usar this. Isso serve só para propriedades DENTRO DO OBJETO
    }
}
console.log(produto.nome);
console.log(produto.precoComDesconto());
