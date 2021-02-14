// objeto data
// atributos: dia, mes, ano
// método: exibir -> dia/mes/ano

const data = {
    dia: 24,
    mes: 8,
    ano: 2021,

   exibirData: function () {
       return `${this.dia}/${this.mes}/${this.ano}`;
   }
}

console.log(data.exibirData());