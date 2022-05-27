const navTabs = document.querySelectorAll('[role="tab"]');


navTabs.forEach( tab => {
  tab.addEventListener('click', cambiarTab)
})

function cambiarTab(e) {
  const selectedTab = e.target // Guardamos target tab 
  
  const padreSeletedTab = selectedTab.parentNode // Buscamos el elemento padre de target tab seleccionado

  padreSeletedTab.querySelector('[aria-selected="true"]').setAttribute('aria-selected', false ) // Entre los hijos de este elemento buscar uno con aria true y cambiar por false para quitar lo subrayado

  selectedTab.setAttribute('aria-selected', true) // Agragamos subrayado al target tab 
  
  console.log(padreSeletedTab)
}

