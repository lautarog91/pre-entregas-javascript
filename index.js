function Datos(){

let nombre ="";
let esNumero=true;

while(esNumero){
    nombre=prompt("Ingrese el nombre");
    esNumero=false;
    for (let i = 0; i < nombre.length; i++) {
        if (!isNaN(nombre[i])) {
        esNumero = true;
        alert("El nombre no puede contener números")
        break;  }
    }}

let apellido="";
let esNumero2=true;

while(esNumero2){
    apellido=prompt("Ingrese el apellido");
    esNumero2=false;
    for (let i = 0; i < apellido.length; i++) {
        if (!isNaN(apellido[i])) {
        esNumero2 = true;
        alert("El apellido no puede contener números")
        break;  }
    }} 
    
let edad=parseInt(prompt("ingrese su edad."));
while(isNaN (edad)){
    alert("ingrese edad correcta");
    edad=parseInt(prompt("ingrese su edad"))
}

let clases=prompt("ingrese tipo de clases(funcional, kick-boxing, ambas");

switch(clases){
    case "kick-boxing":
        alert(`Hola ${nombre} ${apellido} el precio de la clase de kick-boxing es $5500 `);
        break

    case "funcional":
        alert(`Hola ${nombre} ${apellido} el precio de la clase de funcional es $5000`);
        break
    
    case "ambas":
        alert(`Hola ${nombre} ${apellido} el precio de ambas clases es $9500`);
        
        /*default:
            alert(`Error.`);
break */}
}
Datos()
console.log(Date())

/*let clases=prompt("ingrese que clases va a tomar(kick, funcional o ambas")
if (clases=="kick"){
    alert( `hola ${nombre} ${apellido} las clases de kick salen 5500 pesos.`)
}
else if(clases=="funcional"){
    alert(`hola ${nombre} ${apellido} las clases de funcional salen 5000 pesos.`)
}
else if(clases=="ambas"){
    alert(`hola ${nombre} ${apellido} ambos tipos de clases salen 9000 pesos.`)
}
else{
    alert(`${nombre} ${apellido} no ingresaste correctamente el tipo de clases`)
}*/