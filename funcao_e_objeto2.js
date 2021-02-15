// resolvendo o "problema de forma literal" segunda possibilidade (SIMPLIFICAÇÃO)


function criarData(dia, mes, ano) {
    return { // como as chaves e os parâmetro tem o mesmo nome a gente pode retirar ele as chaves e passar só os parâmetros
    dia,
    mes,
    ano,

    // podemos também retirar o ": function" nas versões mais atualizadas do javascript 2015, ela é usada abertamente desde 2017 após atualizações dos browsers 
   exibirData() {
       return `${this.dia}/${this.mes}/${this.ano}`;
   }
    }
}

// passamos as datas que queremos exibir
const data1 = criarData(24,08,2021);
const data2 = criarData(22,11,2023);
const data3 = criarData(3,4,2022);

// mostrando as datas
console.log(data1.exibirData());
console.log(data2.exibirData());
console.log(data3.exibirData());