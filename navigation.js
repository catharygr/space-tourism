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


