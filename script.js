function esperienzaSviluppatore(AnniEsperienza){
    if (AnniEsperienza <= 1 ) 
    { return "Sei un principiante"}
    if (AnniEsperienza >= 1 && AnniEsperienza <= 3)
    {return "Sei un esperto"}
    if (AnniEsperienza >= 4 )
     {return "Sei un pro"}
}
let anni = prompt("quanti anni di esperienza hai come sviluppatore");

document.write(esperienzaSviluppatore(Number(anni)));

function somma(){ 
    return input() + input() 
}
function input(){
    let numero = prompt("digita un numero");
 return Number(numero);
}
console.log(somma())







 