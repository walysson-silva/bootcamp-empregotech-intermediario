function clicou() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar() {
    window.open("https://digitalinnovation.one/sign-up?ref=2U4XDXRH1P");
    //window.location.href = "https://digitalinnovation.one/sign-up?ref=2U4XDXRH1P";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento) {
   //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página Carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma (n1, n2) {
    return n1 + n2
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

var validar = 0;

function validaIdade(idade) {
    if (idade >= 18){
        validar = true
    }else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade");
validaIdade(idade)
console.log(validar);
*/

//alert (soma(5,10));
//alert (setReplace("Vai Japão", "Japão", "Brasil"));


//var lista = [“Alemanha”, “Inglaterra”, “Escócia”]/
//lista.push(“Polônia”);
//lista.pop(“Inglaterra”);

/*var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getMonth()+1);
*/
/*
var count;
for (count = 0; count <= 5; count ++) {
    alert(count);
};
*/

/*var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count ++ ;
};
*/

/*
var idade = prompt("Qual a sua idade? : ");
//var idade = 18;
if ( idade >= 18 ) {
    alert("maior de idade");
}else {
    alert("menor de idade");
};
*/

/*
var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = {nome: "maçã", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva"); //acrescenta elemento
//lista.pop(); //retira o último elemento
//console.log(lista[0]);//retorna o primeiro elemento
//console.log(lista.toString()[0]);//retorna a primeira letra do primeiro elemento
//console.log(lista.join(" - "));

//var nome = "Wálysson Silva";
//var idade = 29;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert (nome + " tem " + idade + " anos ");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase);
//console.log(frase.replace("Japão", "Brasil"));//trocando o nome Japão por Brasil
//console.log(frase.toUpperCase());//Deixando as letras maiúsculas
//console.log(frase.toLowerCase());//Deixando as letras minúsculas.
//alert(frase.replace("Japão", "Brasil"));
