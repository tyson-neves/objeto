//Função construtora -> construir  um Objeto

function Data(dia = 1, mes = 1, ano = 2021) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;

    this.exibir = function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}
// criando os objetos, usando o new e o this.
const data1 = new Data();
const data2 = new Data(24, 12, 2022);
const data3 = new Data(31, 12, 2021);

console.log(data1.exibir());
console.log(data2.exibir());
console.log(data3.exibir());

console.log(data1);
console.log(data2);
console.log(data3);
