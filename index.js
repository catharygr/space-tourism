// NAVEGACION

const navegacionPrincipal = document.querySelector('.navegacion-principal')
const movileNavToggle = document.querySelector('.mobile-nav-toggle')

movileNavToggle.addEventListener('click', () => {
   const visibilidad = navegacionPrincipal.getAttribute('data-visible') 

   if(visibilidad === 'false') {
     navegacionPrincipal.setAttribute('data-visible',true)
     movileNavToggle.setAttribute('aria-expanded',true)
   } else {
    navegacionPrincipal.setAttribute('data-visible',false)
    movileNavToggle.setAttribute('aria-expanded',false)
   }
} )




// TABS


const navTabs = document.querySelectorAll('[role="tab"]');
const articulo = document.querySelector('#articulo')
const articuloImg = document.querySelector('#articulo--img')
let contenido = '' 

navTabs.forEach( tab => {
 tab.addEventListener('click', cambiarTab)
})

async function obtenerData() {
    const respuesta = await fetch('./data.json')
    const data = await respuesta.json()
    contenido = data
}
obtenerData()

function cambiarTab(e) {
  const selectedTab = e.target // Guardamos target tab 
  
  const padreSeletedTab = selectedTab.parentNode // Buscamos el elemento padre de target tab seleccionado

  padreSeletedTab.querySelector('[aria-selected="true"]').setAttribute('aria-selected', false ) // Entre los hijos de este elemento buscar uno con aria true y cambiar por false para quitar lo subrayado

  selectedTab.setAttribute('aria-selected', true) // Agregamos subrayado al target tab 

  const paginaSeleccionada = padreSeletedTab.getAttribute('data-page')
  const tabSeleccionado = selectedTab.getAttribute('data-indice')
  const contenidoSeleccionado = contenido[paginaSeleccionada][tabSeleccionado]

  console.log(paginaSeleccionada)

  if (paginaSeleccionada === 'destinations') {
    setTimeout(cambiarDestination, 250)
  } else if (paginaSeleccionada === 'crew') {
    setTimeout(cambiarCrew, 250)
  } else if (paginaSeleccionada === 'technology') {
    setTimeout(cambiarTechnology, 250)
  }


  articulo.classList.add('opacidad-off')
  articuloImg.classList.add('opacidad-off')
  
  function cambiarDestination() {
    articulo.innerHTML = `
    <h2 class="ff-serif fs-800 uppercase color-blanco">${contenidoSeleccionado.name}</h2>
    <p>${contenidoSeleccionado.description}</p>
    <div class="destination-meta flex">
    <div>
    <h3 class="color-claro fs-200 uppercase">ave.distance</h3>
    <p class="ff-serif uppercase">${contenidoSeleccionado.distance}</p>
    </div>
    <div>
    <h3 class="color-claro fs-200 uppercase">est.travel time</h3>
    <p class="ff-serif uppercase">${contenidoSeleccionado.travel}</p>
    </div>
    </div>
    `
    
    articuloImg.innerHTML = `
    <source srcset="${contenidoSeleccionado.images.webp}" type="image/webp">
    <img src="${contenidoSeleccionado.images.png}" alt="${contenidoSeleccionado.name}">
    `
    articulo.classList.remove('opacidad-off')
    articuloImg.classList.remove('opacidad-off')
  }

  function cambiarCrew() {
    articulo.innerHTML = `
    <header class="flow flow--space-small">
    <h2 class="fs-600 ff-serif uppercase">${contenidoSeleccionado.role}</h2>
    <p class="fs-700 uppercase ff-serif color-blanco">${contenidoSeleccionado.name}</p>
  </header>
  <p>${contenidoSeleccionado.bio}</p>
    `
    
    articuloImg.innerHTML = `
    <source srcset="${contenidoSeleccionado.images.webp}" type="image/webp">
    <img src="${contenidoSeleccionado.images.png}" alt="${contenidoSeleccionado.name}">
    `
    articulo.classList.remove('opacidad-off')
    articuloImg.classList.remove('opacidad-off')
  }

  function cambiarTechnology() {
    articulo.innerHTML = `
    <h2 class="ff-serif fs-800 uppercase color-blanco">${contenidoSeleccionado.name}</h2>
    <p>${contenidoSeleccionado.description}</p>
    <div class="destination-meta flex">
    <div>
    <h3 class="color-claro fs-200 uppercase">ave.distance</h3>
    <p class="ff-serif uppercase">${contenidoSeleccionado.distance}</p>
    </div>
    <div>
    <h3 class="color-claro fs-200 uppercase">est.travel time</h3>
    <p class="ff-serif uppercase">${contenidoSeleccionado.travel}</p>
    </div>
    </div>
    `
    
    articuloImg.innerHTML = `
    <source srcset="${contenidoSeleccionado.images.webp}" type="image/webp">
    <img src="${contenidoSeleccionado.images.png}" alt="${contenidoSeleccionado.name}">
    `
    articulo.classList.remove('opacidad-off')
    articuloImg.classList.remove('opacidad-off')
  }
    
}


  /* Seudo codigo 

   1- Amarrarse a todos los DOM
   2- hacer un forEach a todos las pestañas que estan asigandos a las const navTabs con un eventlistener para poder hacerles con un click y lo hacemos desde la funcion cambiarTab
   3- Dentro de la funcion con el evento target lo guardamos en la variable selectedTab
  4- A esta variable con el metodo parenTNome buscamos el elemento padre y se lo asignamos a la variable padreSelectTab
  5- A esta variable con el query selecionamos la clase aria que esta en true y con el metodo setattribute lo cambiamos por false para quitar lo subrayado 
  6- Con este mismo metodo le agregamos el subrayado al targetTab
  7- Desde la pestaña padre con el metodo getattribute inyectamos  la clase data-page y hacemos lo mismo con sus hijos para acceder a sus indices  y le asignamos este valor a una nueva variable para su mejor acceso
  8- En la funcion con comillas invertidas (metodo spred operator ) mediante un id y el metodo innerhtml copiampos el contenido del articulo  y con el signo de peso cambiamos todo su contendio por estas variables y de esta manera se puede ver en el DOM
  9- Hacemos lo mismo con la imagen
  10- Con el metodo classlist add y remov e inyectando desde css opicity y transition conseguir una mejor animation del contenido y con la funcion seTimeeot controlamos el tiempo.
  */