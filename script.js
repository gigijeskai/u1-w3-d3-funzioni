function sottrazione (numero1, numero2) {
    let risultato = numero1 - numero2;
    return risultato
}
let sottrazioneDueNumeri = sottrazione(5, 3)
console.log(sottrazioneDueNumeri);

function esperienzaSviluppatore(AnniEsperienza){
    if (AnniEsperienza <= 1 )
    { return "Sei un principiante"}
    if (AnniEsperienza >= 1 && AnniEsperienza <= 3)
    {return "Sei un esperto"}
    if (AnniEsperienza >= 4 )
     {return "WOW, Sei un pro"}
}
let anni = prompt("quanti anni di esperienza hai come sviluppatore");
document.write(esperienzaSviluppatore(anni));



function input(){
    let numero = prompt("digita un numero");
 return Number(numero);
}
function somma(){ 
    return input() + input(); 
}
console.log(somma())

function quantiAnniHai(annoCorrente,AnnoDiNascita ) {
    let età = annoCorrente - AnnoDiNascita;
    return età;
}
alert(quantiAnniHai(2022,1996));








 