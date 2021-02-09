'use strict';

const showsElement = document.querySelector('.js-shows');

// api

fetch('http://api.tvmaze.com/search/shows?q=girls')
  .then((response) => response.json())
  .then((data) => {
    paintResultSearch (data)
  });


// paint

function paintResultSearch (resultSearch) {
  let htmlCode = '';
    for (const film of resultSearch) {
      htmlCode += '<li>';
      htmlCode += `<p>Serie: ${film.show.name}</p>`;  //el name no está en la raiz por eso show.name
      if (film.show.image === null) {                 // condicional para cuando no tengamos imagen asociada, si es null me muestras imagen dummy
        htmlCode += '<p> <img src="https://via.placeholder.com/210x295/ffffff/666666/?"/>';
      } else {
        htmlCode += `<p><img src="${film.show.image.medium}"/></p>`;  //la imagen no está en la raiz y además API ofrece varios formatos, selecciono medium uniformizar
      }
      htmlCode += '</li>';
    }
    showsElement.innerHTML = htmlCode;
}


// local storage
//search
// filter
// start app
