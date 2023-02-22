function Datos(){
/*solicitar nombre */ 
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
/*solicitar apellido*/ 
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
    /*solicitar edad */
let edad=parseInt(prompt("ingrese su edad."));
while(isNaN (edad)){
    alert("ingrese edad correcta");
    edad=parseInt(prompt("ingrese su edad"))
}
/*Objeto clases*/ 
const tipoDeclases = [  
    {id:1,nombre:"funcional", precio:4500 },
    {id:2,nombre:"kick-boxing",precio:5000},
    {id:3,nombre: "ambas clases",precio:9000},
]
/*solicitar clase*/ 
let clases=prompt("ingrese tipo de clases,funcional, kick-boxing, ambas clases");
/*mensajes de alerta */
switch(clases){
    case "kick-boxing":

        alert(`Hola ${nombre} ${apellido} el precio de la clase de ${tipoDeclases[1].nombre}  es $ ${tipoDeclases[1].precio} `);
        break

    case "funcional":

        alert(`Hola ${nombre} ${apellido} el precio de la clase de ${tipoDeclases[0].nombre} es $ ${tipoDeclases[0].precio}`);
        break
    
    case "ambas clases":

        alert(`Hola ${nombre} ${apellido} el precio de ${tipoDeclases[2].nombre}  es $ ${tipoDeclases[2].precio}`);
        break
        
    default:
        alert(`Error.`);
        break }
            ;
/*constructor de personas */             
class Persona{
constructor(nombre,apellido,clases){
    this.nombre=nombre;
    this.apellido=apellido;
    this.clases=clases;
}
}

const personaUno = new Persona(nombre, apellido,clases);
/*mensaje por consola*/ 
console.log(personaUno);           
}
Datos()
console.log(Date())

