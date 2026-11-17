let Nota1 = Number (document.getElementById("nota1").value);
let Nota2 = Number (document.getElementById("nota2").value);
let Nota3 = Number (document.getElementById("nota3").value);

let media = (nota1 + nota2 + nota3) /3; 

document.getElementById("resultado").innerText = "Sua média  é " + media;

function CalcularMedia () {

    let media =  (nota1 + nota2 + nota3) /3;

}
