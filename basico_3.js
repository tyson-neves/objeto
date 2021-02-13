const data = {
    dia: 1,
    mes: 10,
    ano: 2021
};

// você pode alterar os atributos internos de um objeto, mas não da para alterar o objeto em si pq ele é uma constante.
data.dia = 24;
data.mes = 12;
data.ano = 2021;

console.log(`${data.dia}/${data.mes}/${data.ano}`);
