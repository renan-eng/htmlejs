// Explicações básicas sóbre variáveis, alert e console.log
// var nome = "Renan Guimarães";
// var n1 = 31;
// var n2 = 10;
// var frase = "Japão é o melhor time do mundo";
// //alert(nome + ' tem ' + idade + ' anos.');
// //alert(idade + idade2);
// console.log(nome);
// console.log(n1 * n2);
// console.log(frase.replace("Japão", "Brasil")); // trocar uma palavra presente na str por outra especificada dentro dos parametros da função
// //alert(fase.replace("Japão", "Brasil"));
// console.log(frase.toLowerCase()); // LowerCase transforma toda a str em letras minúsculas
// console.log(frase.toUpperCase()); // UpperCase transfroma toda a str em letras maiusculas

// Declarar uma lista
var lista = ["Maçã", "Pêra", "Laranja"];
console.log(lista);

// Tamanho da lista
var tam = lista.length;
console.log(tam);

// Exibir item expecifico da lista
console.log(lista[1]);

// Adiciona um item no final da lista
lista.push("Uva");
console.log(lista);

// Remove último item da lista
lista.pop();
console.log(lista);

// Inverte ordem da lista
lista = lista.reverse();
console.log(lista);

// Converte a lista em uma str
lista1 = ["Maçã", "Pêra", "Laranja"];
lista = lista.toString();
console.log(lista);
console.log(lista[0]);
console.log(lista1[0]);

// converte uma lista em uma str e define o caractere seprador de seus elementos
lista1 = lista1.join(" - ");
console.log(lista1);

// Dicionário
var fruta = {
    nome: 'maçã',
    cor: 'vermelha'
};
console.log(fruta);
console.log(fruta.nome);

// Listas de Dicionários
var frutas = [{
    nome: 'maçã',
    cor: 'vermelha'
}, {
    nome: 'uva',
    cor: 'roxa'
}];
console.log(frutas);
console.log(frutas[1].nome);

// Condicionais e estruturas de repetição

var idade = 18;
if (idade >= 18){
    console.log('maior de idade');
}else{
    console.log('menor de idade');
}

// Perguntar a idade do usuário
// var idade2 = prompt('Qual a sua idade?');
// if (idade2 >= 18){
//     alert('maior de idade');
// }else{
//     alert('menor de idade');
// }

// Estruturas de repetição

var count = 0;
while(count < 5){
    console.log(count);
    count = count + 1; // ou count++
}

var i = 0;
for(i=0; i < 5; i++){
    console.log(i);
}

// Datas 
var date = new Date();
console.log(date);
console.log('-----------');
console.log(date.getMonth()+1); // getMonth conta apartir do 0, para retornar o mês certo temos que adicionar +1 
console.log('-----------');
console.log(date.getMinutes());
console.log('-----------');
console.log(date.getDay()+1);
console.log('-----------');
console.log(date.getHours());
console.log('-----------');
console.log(date.getTime());

// Funções

function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novoNome){
    return frase.replace(nome, novoNome);
}

alert(soma(5, 10))
alert(setReplace('Vai Japão', 'Japão', 'Brasil'));