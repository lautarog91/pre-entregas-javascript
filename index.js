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
    if( clase==="funcional"||clase==="kick-boxing"||clase==="musculacion"){
        /*Si se cumple se crea el objeto, se pushea a usuarios y se crea div en HTML */ 
            class persona{constructor (nombre,apellido,edad,clase){
                this.nombre=nombre;
                this.apellido=apellido;
                this.edad=edad;
                this.clase=clase;}
            }
            const persona1=new persona(nombre,apellido,edad,clase)
            usuarios.push(persona1)



            let div=document.createElement("div");
            div.innerHTML =`<h2>Bienvenido<h2/>`;
        
            let divContent=document.createElement("div");
            divContent.innerHTML=`
            <p>${persona1.nombre}</p>
            <p>${persona1.apellido}</p>
            <p> Años: ${persona1.edad}</p>
            <p> A tu clase de ${persona1.clase}</p>
            `
            div.appendChild(divContent)
            document.body.append(div)
            /*Creo usuarios en localstorage que me tome lo de usuarios en js */ 
        localStorage.setItem("usuarios",JSON.stringify(usuarios))

Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Tus datos han sido cargados',
    showConfirmButton: false,
    timer: 2500
})

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response)=>response.json())
    .then((json)=>localStorage.setItem("Api",JSON.stringify(json)));


    let usuariosApi=localStorage.getItem("Api")

    let div2=document.createElement("div");
    div2.innerHTML =usuariosApi;
    document.body.append(div2)

        }

        /*En caso de no cumplirse se crea este div en HTML*/ 
            else{
                
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'error al cargar datos',
                    showConfirmButton: false,
                    timer: 2500
                })
            }


})







/*
    const carrito=[]

    carrito.lenght===0 && console.log("el carrito esta vacio")*/