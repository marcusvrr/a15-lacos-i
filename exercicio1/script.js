let comer = prompt('Você deseja comer uma coxinha? \n"S":sim \n"N":Não').toUpperCase();
let valor = 0;
while (comer !== "N"){
    valor+=2.50;
    comer = prompt('Você deseja comer mais uma coxinha? \n"S":sim \n"N":Não').toUpperCase();
}
console.log(`O valor total da conta foi R$ ${valor} reais`)