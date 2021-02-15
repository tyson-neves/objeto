const data1 = {
    dia: 24,
    mes: 8,
    ano: 2021,

   exibirData: function () {
       return `${this.dia}/${this.mes}/${this.ano}`;
   }
}

console.log(data.exibirData());

const data2 = {
    dia: 22,
    mes: 11,
    ano: 2023,

   exibirData: function () {
       return `${this.dia}/${this.mes}/${this.ano}`;
   }
}

console.log(data.exibirData());

const data3 = {
    dia: 03,
    mes: 4,
    ano: 2022,

   exibirData: function () {
       return `${this.dia}/${this.mes}/${this.ano}`;
   }
}

console.log(data1.exibirData());
console.log(data2.exibirData());
console.log(data3.exibirData());

// o problema é que o código fica duplicado(devemos esquivar de códigos duplicados)e o código fica grande.. isso pq temos poucos parâmetros, mas nas aplicações reais vamos ter muito mais e  isso deixa o código poluído  e desnecessariamente grande 