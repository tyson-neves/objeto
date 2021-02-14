const numeros = [10, 20, 30]; // array

//objeto
const produto = {
    nome: "Caneta",
    preco: 9.99,
    desconto: 0.2

};

console.log(typeof produto);

console.log(numeros[0]);

//forma MENOS usada de acessar o objeto
console.log(produto["nome"]);
console.log(produto["preco"]);
console.log(produto["desconto"]);

// forma MAIS usada de acessar o objeto
console.log(produto.nome); 
console.log(produto.preco); 
console.log(produto.desconto); 



