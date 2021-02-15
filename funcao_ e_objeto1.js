
// resolvendo o "problema de forma literal" primeira possibilidade 


// criando a função que será reaproveitada. Ao invés de passar os valores literais passamos parâmetros fazendo com que possamos passar  os valores depois chamando a função mais vezes.
function criarData(dia, mes, ano) {
    return { 
    dia: dia,
    mes: mes,
    ano: ano,

   exibirData: function() {
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

