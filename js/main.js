function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert('Obrigado por clicar!');
}

function redirecionar(){
    //window.open("https://globalacademy.com/"); // abre em um nova janela o link entre ""
    window.location.href = "https://globalacademy.com/"; //abre na mesma janela o link entre ""
}

function trocar1(){
    document.getElementById("mousemove1").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto")
}

function voltar1(){
    document.getElementById("mousemove1").innerHTML = "Passe o mouse aqui";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto")
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Pagina carregada")
}

function  funcaoChange(elemento){
    console.log(elemento.value);
}
    