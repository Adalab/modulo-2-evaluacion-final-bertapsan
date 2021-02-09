'use strict';

const showsElement = document.querySelector('.js-shows');           // mostrar los resultados de la búsqueda
const searchElement = document.querySelector('.js-form__input');   // recoger el texto que teclea la usuaria
const formButtonElement = document.querySelector('.js-form__button'); // llamarla en el listner de la búsqueda
const formElement = document.querySelector('.js-form');

// api

function callToApi() {   // Genero una función para llamar a la api, facilitar el search
fetch('http://api.tvmaze.com/search/shows?q=' + searchElement.value) // a la url de la api le he añadido un value para generar la búsqueda
  .then((response) => response.json())
  .then((data) => {
    paintResultSearch (data)
  });
}
// paint

function paintResultSearch (resultSearch) {   
  let htmlCode = '';
    for (const film of resultSearch) {
      htmlCode += '<li>';
      htmlCode += `<p>Serie: ${film.show.name}</p>`;  //el name no está en la raiz por eso show.name
      if (film.show.image === null) {                 // condicional para cuando no tengamos imagen asociada, si es null me muestras imagen dummy
        htmlCode += '<p> <img src="https://via.placeholder.com/210x295/ffffff/666666/?"/>';
      } else {
        htmlCode += `<p><img src="${film.show.image.medium}"/></p>`;  //la imagen no está en la raiz y además API ofrece varios formatos, selecciono medium para uniformizar
      }
      htmlCode += '</li>';
    }
    showsElement.innerHTML = htmlCode;
}


// local storage
//search

function handleSearch() {
  /* console.log('hola', searchElement.value); */
  callToApi();
}
formButtonElement.addEventListener('click', handleSearch);  // el listner lo pongo sobre el botón de búsqueda


// submit form - prevent
function handleForm(ev) { // ojo el prevent se hace sobre el form no sobre el botón!
  ev.preventDefault();
}
formElement.addEventListener('submit', handleForm);

// filter
// start app
