/*function Datos(){

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

const tipoDeclases = [  
    {id:1,nombre:"funcional", precio:4500 },
    {id:2,nombre:"kick-boxing",precio:5000},
    {id:3,nombre: "ambas clases",precio:9000},
]

let clases=prompt("ingrese tipo de clases,funcional, kick-boxing, ambas clases");
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

class Persona{
constructor(nombre,apellido,clases){
    this.nombre=nombre;
    this.apellido=apellido;
    this.clases=clases;
}
}

const personaUno = new Persona(nombre, apellido,clases);

let div = document.createElement("div");
div.innerHTML=`
<h2>Hola</h2>
`


console.log(personaUno);           
}
Datos()
console.log(Date())*/

/*
let primerFiltro=[]
let usuarios=JSON.parse(localStorage.getItem("usuarios"))|| [];

let formulario = document.getElementById("formulario");
formulario.addEventListener ("submit",(e)=>{
    e.preventDefault();
    let inputs = e.target.children;
    let nombre= inputs [0].value;
    let apellido =inputs[1].value;
    let edad =inputs[2].value;
    let clase=inputs[3].value;

    let persona={
            nombre:nombre,
            apellido:apellido,
            edad:edad,
            clase:clase,}

            primerFiltro.push(persona)

            const resultado=primerFiltro.find(persona=>persona.clase==="funcional")
            const resultado2=primerFiltro.find(persona=>persona.clase==="kick-boxing")
            const resultado3=primerFiltro.find(persona=>persona.clase==="ambas")
            
            
            if(resultado){
    usuarios.push(resultado)
    let div=document.createElement("div");
    div.innerHTML =`<h2>Bienvenido<h2/>`;

    let divContent=document.createElement("div");
    divContent.innerHTML=`
    <p>${persona.nombre}</p>
    <p>${persona.apellido}</p>
    <p>${persona.edad}</p>
    <p>${persona.clase}</p>
    `
    div.appendChild(divContent)
    document.body.append(div)}
    
    if  (resultado2){
        usuarios.push(resultado2)
        let div=document.createElement("div");
        div.innerHTML =`<h2>Bienvenido<h2/>`;
    
        let divContent=document.createElement("div");
        divContent.innerHTML=`
        <p>${persona.nombre}</p>
        <p>${persona.apellido}</p>
        <p>${persona.edad}</p>
        <p>${persona.clase}</p>
        `
        div.appendChild(divContent)
        document.body.append(div)}


        if (resultado3){
            usuarios.push(resultado3)
            let div=document.createElement("div");
            div.innerHTML =`<h2>Bienvenido<h2/>`;
        
            let divContent=document.createElement("div");
            divContent.innerHTML=`
            <p>${persona.nombre}</p>
            <p>${persona.apellido}</p>
            <p>${persona.edad}</p>
            <p>${persona.clase}</p>
            `
            div.appendChild(divContent)
            document.body.append(div)}

        else{
        let article=document.createElement("article");
    article.innerHTML =`<h2>No has ingresado correctamente el tipo de clase.<h2/>`;
    document.body.append(article)
    }

    
    localStorage.setItem("usuarios",JSON.stringify(usuarios))
})
*/
let usuarios=JSON.parse(localStorage.getItem("usuarios"))|| [];

let formulario = document.getElementById("formulario");
formulario.addEventListener ("submit",(e)=>{
    e.preventDefault();
    let inputs = e.target.children;
    let nombre= inputs [0].value;
    let apellido =inputs[1].value;
    let edad =inputs[2].value;
    let clase=inputs[3].value;})

    if( clase==="funcional"||clase==="kick-boxing"||clase==="ambas"){
        
            let persona={
                nombre:nombre,
                apellido:apellido,
                edad:edad,
                clase:clase,}

            usuarios.push(persona)}

        /* let div=document.createElement("div");
            div.innerHTML =`<h2>Bienvenido<h2/>`;
        
            let divContent=document.createElement("div");
            divContent.innerHTML=`
            <p>${persona.nombre}</p>
            <p>${persona.apellido}</p>
            <p>${persona.edad}</p>
            <p>${persona.clase}</p>
            `
            div.appendChild(divContent)
            document.body.append(div)*/
            else{
                let div=document.createElement("div");
                div.innerHTML =`<h2>NO HAS INGRESADO CORRECTAMENTE EL NOMBRE DE CLASE.<h2/>`;
                document.body.append(div)

            }

            localStorage.setItem("usuarios",JSON.stringify(usuarios))









    