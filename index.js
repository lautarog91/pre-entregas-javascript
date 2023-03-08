/*Creo arreglo usuarios en js que toma los objetos de usuarios que esta en el local storage */
let usuarios=JSON.parse(localStorage.getItem("usuarios"))|| [];
/*Creo variable formulario, tomo los inputs ingresados y declaro escuchador de eventos  */
let formulario = document.getElementById("formulario");
formulario.addEventListener ("submit",(e)=>{
    e.preventDefault();
    let inputs = e.target.children;
    let nombre= inputs [0].value;
    let apellido =inputs[1].value;
    let edad =inputs[2].value;
    let clase=inputs[3].value;
/*Declaro condicional */
    if( clase==="funcional"||clase==="kick-boxing"||clase==="ambas"){
        /*Si se cumple se crea el objeto, se pushea a usuarios y se crea div en HTML */ 
            let persona={
                nombre:nombre,
                apellido:apellido,
                edad:edad,
                clase:clase,}

            usuarios.push(persona)

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
            document.body.append(div)
            /*Creo usuarios en localstorage que me tome lo de usuarios en js */ 
        localStorage.setItem("usuarios",JSON.stringify(usuarios))
        }

        /*En caso de no cumplirse se crea este div en HTML*/ 
            else{
                let div=document.createElement("div");
                div.innerHTML =`<h2>NO HAS INGRESADO CORRECTAMENTE EL NOMBRE DE CLASE.<h2/>`;
                document.body.append(div)

            }


})








    