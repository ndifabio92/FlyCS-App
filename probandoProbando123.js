console.info('clase 05');

const sitio = document.querySelector('body');
const titulo = document.querySelector('h1');
const menuItems  = document.querySelectorAll('nav ul li');
const articulos = document.querySelectorAll('article');

console.log(titulo);
console.log(menuItems);
console.log(articulos);

titulo.innerHTML = ' clase 05 ';
console.log(articulos[1]);

let saludo = 'hola alienigenas';

articulos[1].innerHTML =  `<h2> ${saludo} </h2>`  

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// Primero debemos comentar o eliminar las líneas que modifican las clases de "sitio"
// 1- Desarrollar la función a continuacion para que el usuario elija el tema del sitio.
// 2- Debemos preguntarle al usuario mediante un confirm si desea usar el modo oscuro.
// 3- Si el usuario confirma debemos aplicar la clase "dark" al "sitio", si cancela debe quedar en modo claro.
// 4- A su vez, si está en modo onsecuritypolicyviolation, el texto del boton debe decir "Cambiar a modo claro 🌞". De lo contrario, si está en modo claro debeb decir "Cambiar a modo oscuro 🌛"



function cambiarTema () {

      const tema = sitio.getAttribute("class");

    (tema == "dark")
         ? document.querySelector('button').innerText ='cambiar a modo claro'
        
         
        : document.querySelector('button').innerText ='cambiar a modo oscuro'

}

cambiarTema();

    

        const btn = document.querySelector('button');
        const tema = sitio.getAttribute("class");

    btn.addEventListener('click', () =>{
        
      sitio.classList.toggle("dark")
      cambiarTema();
        
    })

    

    