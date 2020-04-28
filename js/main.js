

//function botao(){
 //   alert("obrigado por clicar");


function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
   // console.log(document.getElementById("agradecimento"));
}


function redirecionar(){
    window.open("https://www.google.com/");
    //window.location.href = "https://www.google.com/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse"
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mause"
    //alert("trocar texto")
}

function voltar(elemento){
    elemento.innerHTML = "passe o mouse aqui"
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Pagina Carregada")
}

function funcaochange(elemento){
    console.log(elemento.value)
}
/*
function validadeidade(idade){
    var validar
    if (idade >= 18){
        validar = true; 
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validadeidade(idade));


function soma(n1 , n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"))


var d = new Date();
    alert(d.getMonth()+1)



var lista = ["maça", "pera", "laranja"]
lista.push("uva")
console.log(lista)
console.log(lista.length)
console.log(lista.join(" - "))

var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta)

var idade = prompt("Qual sua idade? ")
if (idade >=18){
    alert("Maior de idade")
}else{
    alert("menor de idade")
};


var count = 0;
while(count < 5){
    console.log(count);
    count ++;
};


var count;
for(count=0; count<=5; count++){
    alert(count);
};
*/