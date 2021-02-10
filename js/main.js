'use strict';

const showsElement = document.querySelector('.js-shows'); // mostrar los resultados de la búsqueda
const searchElement = document.querySelector('.js-form__input'); // recoger el texto que teclea la usuaria
const formButtonElement = document.querySelector('.js-form__button'); // llamarla en el listner de la búsqueda
const formElement = document.querySelector('.js-form'); // creo para generar preventDefault (envío de form)
const favoritesElement = document.querySelector('.js-favorites'); // mostrar los resultados de favorites
// favorites es una fake array temporal
const favorites = [
  {
    score: 17.82129,
    show: {
      id: 139,
      url: 'http://www.tvmaze.com/shows/139/girls',
      name: 'Girls',
      type: 'Scripted',
      language: 'English',
      genres: ['Drama', 'Romance'],
      status: 'Ended',
      runtime: 30,
      premiered: '2012-04-15',
      officialSite: 'http://www.hbo.com/girls',
      schedule: {
        time: '22:00',
        days: ['Sunday'],
      },
      rating: {
        average: 6.8,
      },
      weight: 92,
      network: {
        id: 8,
        name: 'HBO',
        country: {
          name: 'United States',
          code: 'US',
          timezone: 'America/New_York',
        },
      },
      webChannel: null,
      externals: {
        tvrage: 30124,
        thetvdb: 220411,
        imdb: 'tt1723816',
      },
      image: {
        medium:
          'http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg',
        original:
          'http://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg',
      },
      summary:
        '<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>',
      updated: 1611310521,
      _links: {
        self: {
          href: 'http://api.tvmaze.com/shows/139',
        },
        previousepisode: {
          href: 'http://api.tvmaze.com/episodes/1079686',
        },
      },
    },
  },
  {
    score: 13.773907,
    show: {
      id: 23542,
      url: 'http://www.tvmaze.com/shows/23542/good-girls',
      name: 'Good Girls',
      type: 'Scripted',
      language: 'English',
      genres: ['Drama', 'Comedy', 'Crime'],
      status: 'Running',
      runtime: 60,
      premiered: '2018-02-26',
      officialSite: 'https://www.nbc.com/good-girls',
      schedule: {
        time: '22:00',
        days: ['Sunday'],
      },
      rating: {
        average: 7.4,
      },
      weight: 96,
      network: {
        id: 1,
        name: 'NBC',
        country: {
          name: 'United States',
          code: 'US',
          timezone: 'America/New_York',
        },
      },
      webChannel: null,
      externals: {
        tvrage: null,
        thetvdb: 328577,
        imdb: 'tt6474378',
      },
      image: {
        medium:
          'http://static.tvmaze.com/uploads/images/medium_portrait/235/589545.jpg',
        original:
          'http://static.tvmaze.com/uploads/images/original_untouched/235/589545.jpg',
      },
      summary:
        '<p><b>Good Girls</b> follows three "good girl" suburban wives and mothers who suddenly find themselves in desperate circumstances and decide to stop playing it safe, and risk everything to take their power back.</p>',
      updated: 1612469711,
      _links: {
        self: {
          href: 'http://api.tvmaze.com/shows/23542',
        },
        previousepisode: {
          href: 'http://api.tvmaze.com/episodes/1829755',
        },
        nextepisode: {
          href: 'http://api.tvmaze.com/episodes/2023879',
        },
      },
    },
  },
  {
    score: 13.479788,
    show: {
      id: 33320,
      url: 'http://www.tvmaze.com/shows/33320/derry-girls',
      name: 'Derry Girls',
      type: 'Scripted',
      language: 'English',
      genres: ['Comedy'],
      status: 'Running',
      runtime: 30,
      premiered: '2018-01-04',
      officialSite: 'http://www.channel4.com/programmes/derry-girls',
      schedule: {
        time: '22:00',
        days: ['Tuesday'],
      },
      rating: {
        average: 8,
      },
      weight: 87,
      network: {
        id: 45,
        name: 'Channel 4',
        country: {
          name: 'United Kingdom',
          code: 'GB',
          timezone: 'Europe/London',
        },
      },
      webChannel: null,
      externals: {
        tvrage: null,
        thetvdb: 338903,
        imdb: 'tt7120662',
      },
      image: {
        medium:
          'http://static.tvmaze.com/uploads/images/medium_portrait/184/460240.jpg',
        original:
          'http://static.tvmaze.com/uploads/images/original_untouched/184/460240.jpg',
      },
      summary:
        "<p>16-year-old Erin Quinn lives with her uncompromising mother, her long-suffering father and the fearsome ‘Granda Joe', a man whose love for his daughters and granddaughters is surpassed only by his contempt for his son-in-law.</p><p>It's the early 90s, and Erin is used to seeing her country on the nightly news and speaking in acronyms (The IRA, The UDA, The RUC). This is a time of armed police in armoured Land Rovers and British Army check points. But it's also the time of Murder She Wrote, The Cranberries, MJ and Lisa Marie, Doc Martens, bomber jackets, The X Files, Nirvana and Wayne's World. And while The Troubles may hang over her home town, Erin has troubles of her own</p>",
      updated: 1608838190,
      _links: {
        self: {
          href: 'http://api.tvmaze.com/shows/33320',
        },
        previousepisode: {
          href: 'http://api.tvmaze.com/episodes/1631064',
        },
      },
    },
  },
  {
    score: 13.471825,
    show: {
      id: 722,
      url: 'http://www.tvmaze.com/shows/722/the-golden-girls',
      name: 'The Golden Girls',
      type: 'Scripted',
      language: 'English',
      genres: ['Drama', 'Comedy'],
      status: 'Ended',
      runtime: 30,
      premiered: '1985-09-14',
      officialSite: null,
      schedule: {
        time: '21:00',
        days: ['Saturday'],
      },
      rating: {
        average: 8.4,
      },
      weight: 94,
      network: {
        id: 1,
        name: 'NBC',
        country: {
          name: 'United States',
          code: 'US',
          timezone: 'America/New_York',
        },
      },
      webChannel: null,
      externals: {
        tvrage: 5820,
        thetvdb: 71292,
        imdb: 'tt0088526',
      },
      image: {
        medium:
          'http://static.tvmaze.com/uploads/images/medium_portrait/6/15097.jpg',
        original:
          'http://static.tvmaze.com/uploads/images/original_untouched/6/15097.jpg',
      },
      summary:
        '<p><b>The Golden Girls</b> follows four South Florida seniors sharing a house, their dreams, and a whole lot of cheesecake. Bright, promiscuous, clueless, and hilarious, these lovely mismatched ladies form the perfect circle of friends.</p>',
      updated: 1610225849,
      _links: {
        self: {
          href: 'http://api.tvmaze.com/shows/722',
        },
        previousepisode: {
          href: 'http://api.tvmaze.com/episodes/64040',
        },
      },
    },
  },
  {
    score: 13.404897,
    show: {
      id: 1308,
      url: 'http://www.tvmaze.com/shows/1308/bad-girls',
      name: 'Bad Girls',
      type: 'Scripted',
      language: 'English',
      genres: ['Drama', 'Crime', 'Romance'],
      status: 'Ended',
      runtime: 60,
      premiered: '1999-06-01',
      officialSite: null,
      schedule: {
        time: '21:00',
        days: ['Thursday'],
      },
      rating: {
        average: 7.8,
      },
      weight: 88,
      network: {
        id: 35,
        name: 'ITV',
        country: {
          name: 'United Kingdom',
          code: 'GB',
          timezone: 'Europe/London',
        },
      },
      webChannel: null,
      externals: {
        tvrage: 2701,
        thetvdb: 75328,
        imdb: 'tt0203248',
      },
      image: {
        medium:
          'http://static.tvmaze.com/uploads/images/medium_portrait/7/18492.jpg',
        original:
          'http://static.tvmaze.com/uploads/images/original_untouched/7/18492.jpg',
      },
      summary:
        "<p>Step inside HMP Larkhall and meet the women of G-Wing, who've committed various offences that range from shoplifting to murder. <b>Bad Girls</b> shows what life is like for these women in the 'inside world' and also shows the real-life problems (and maybe behaviour!) of the officers who watch them!</p>",
      updated: 1612809366,
      _links: {
        self: {
          href: 'http://api.tvmaze.com/shows/1308',
        },
        previousepisode: {
          href: 'http://api.tvmaze.com/episodes/111010',
        },
      },
    },
  },
  {
    score: 13.180891,
    show: {
      id: 525,
      url: 'http://www.tvmaze.com/shows/525/gilmore-girls',
      name: 'Gilmore Girls',
      type: 'Scripted',
      language: 'English',
      genres: ['Drama', 'Comedy', 'Romance'],
      status: 'Ended',
      runtime: 60,
      premiered: '2000-10-05',
      officialSite: null,
      schedule: {
        time: '21:00',
        days: ['Tuesday'],
      },
      rating: {
        average: 8.4,
      },
      weight: 89,
      network: {
        id: 5,
        name: 'The CW',
        country: {
          name: 'United States',
          code: 'US',
          timezone: 'America/New_York',
        },
      },
      webChannel: null,
      externals: {
        tvrage: 3683,
        thetvdb: 76568,
        imdb: 'tt0238784',
      },
      image: {
        medium:
          'http://static.tvmaze.com/uploads/images/medium_portrait/4/11308.jpg',
        original:
          'http://static.tvmaze.com/uploads/images/original_untouched/4/11308.jpg',
      },
      summary:
        '<p><b>Gilmore Girls</b> is a drama centering around the relationship between a thirtysomething single mother and her teen daughter living in Stars Hollow, Connecticut.</p>',
      updated: 1604752911,
      _links: {
        self: {
          href: 'http://api.tvmaze.com/shows/525',
        },
        previousepisode: {
          href: 'http://api.tvmaze.com/episodes/47639',
        },
      },
    },
  },
  {
    score: 12.987418,
    show: {
      id: 6771,
      url: 'http://www.tvmaze.com/shows/6771/the-powerpuff-girls',
      name: 'The Powerpuff Girls',
      type: 'Animation',
      language: 'English',
      genres: ['Comedy', 'Action', 'Science-Fiction'],
      status: 'Running',
      runtime: 15,
      premiered: '2016-04-04',
      officialSite:
        'https://www.cartoonnetwork.com/video/powerpuff-girls/index.html',
      schedule: {
        time: '17:30',
        days: ['Sunday'],
      },
      rating: {
        average: 6.2,
      },
      weight: 43,
      network: {
        id: 11,
        name: 'Cartoon Network',
        country: {
          name: 'United States',
          code: 'US',
          timezone: 'America/New_York',
        },
      },
      webChannel: null,
      externals: {
        tvrage: null,
        thetvdb: 307473,
        imdb: 'tt4718304',
      },
      image: {
        medium:
          'http://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg',
        original:
          'http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg',
      },
      summary:
        "<p>The city of Townsville may be a beautiful, bustling metropolis, but don't be fooled! There's evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as <b>The Powerpuff Girls</b>. Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a who's who of evil, they show what it really means to \"fight like a girl.\"</p>",
      updated: 1573685920,
      _links: {
        self: {
          href: 'http://api.tvmaze.com/shows/6771',
        },
        previousepisode: {
          href: 'http://api.tvmaze.com/episodes/1662010',
        },
      },
    },
  },
  {
    score: 12.896316,
    show: {
      id: 49892,
      url: 'http://www.tvmaze.com/shows/49892/the-powerpuff-girls',
      name: 'The Powerpuff Girls',
      type: 'Scripted',
      language: 'English',
      genres: [],
      status: 'In Development',
      runtime: null,
      premiered: null,
      officialSite: null,
      schedule: {
        time: '',
        days: [],
      },
      rating: {
        average: null,
      },
      weight: 40,
      network: {
        id: 5,
        name: 'The CW',
        country: {
          name: 'United States',
          code: 'US',
          timezone: 'America/New_York',
        },
      },
      webChannel: null,
      externals: {
        tvrage: null,
        thetvdb: null,
        imdb: null,
      },
      image: null,
      summary:
        '<p>The superhero children have grown and are now disillusioned twentysomethings who resent having lost their childhood to crime fighting. Will they agree to reunite now that the world needs them more than ever?</p>',
      updated: 1598405711,
      _links: {
        self: {
          href: 'http://api.tvmaze.com/shows/49892',
        },
      },
    },
  },
];
 let fav =[]; // variable para recopilar las favorites


//***** api

function callToApi() {
  // Genero una función para llamar a la api, facilitar el search
  fetch('//api.tvmaze.com/search/shows?q=' + searchElement.value) // a la url de la api le he añadido un value para generar la búsqueda
    .then((response) => response.json())
    .then((data) => {
      paintResultSearch(data);
    });
}

//***** paint search

function paintResultSearch(resultSearch) {
  let htmlCode = '';
  for (const film of resultSearch) {
    /* console.log(film.show.id); */
    htmlCode += `<li class="js-films" id="${film.show.id}">`;   //incorporo el id para poder trabajar la parte de favoritos
    htmlCode += `<p>Serie: ${film.show.name}</p>`;              //el name no está en la raiz por eso show.name
    if (film.show.image === null) {
      // condicional para cuando no tengamos imagen asociada, si es null me muestras imagen dummy
      htmlCode +=
        '<p> <img src="https://via.placeholder.com/210x295/ffffff/666666/?"/>';
    } else {
      htmlCode += `<p><img src="${film.show.image.medium}"/></p>`; //la imagen no está en la raiz y además API ofrece varios formatos, selecciono medium para uniformizar
    }
    htmlCode += '</li>';
  }
  showsElement.innerHTML = htmlCode;
  listenFilmEvents(); //para limpiar/organizar saco la función que escucha el click sobre las películas y la pongo en //listen film events, y aquí solo la llamo
}


//**** paint favorites // este apartado se nutre de una "fake" array

let htmlFavoritesCode = '';
for (const favorite of favorites) {
  htmlFavoritesCode += `<li class="js-filmsfab" id="${favorite.show.id}">`;  // el id tiene una clase distinta al de search pq si no se marca al clicarlo
  htmlFavoritesCode += `<p>Serie: ${favorite.show.name}</p>`;
  if (favorite.show.image === null) {
    htmlFavoritesCode += '<p><img src="https://via.placeholder.com/210x295/ffffff/666666/?"/>';
  } else {
    htmlFavoritesCode += `<p><img src="${favorite.show.image.medium}"/></p>`;
  }
  htmlFavoritesCode += `</li>`;
}
favoritesElement.innerHTML = htmlFavoritesCode;




//***** listen film events + add/remove class

function handleFilm(ev) {
  if (ev.currentTarget.classList.contains('js-fabMark')) { 
    ev.currentTarget.classList.remove('js-fabMark');
  }
    else {
    ev.currentTarget.classList.add('js-fabMark');
    }
  }

function listenFilmEvents() {
  //listen films click (se hace "dentro del pintado" pq la ejecutamos tras el mismo)
  const filmsElement = document.querySelectorAll('.js-films');
  for (const filmElement of filmsElement) {
    filmElement.addEventListener('click', handleFilm);
  }
}

//**** add/remove to favArray
// FindIndex() para buscar el elemnto dentro de la fav (array de favorites)
//let fav = [];
//
//if findIndex(ID) ===-1  ---> push en favArray
//
//else ---> splice() indicando posición devuelta por IndexOf, y borrar 1 elemento


//***** search

function handleSearch() {
  /* console.log('hola', searchElement.value); */
  callToApi();
}
formButtonElement.addEventListener('click', handleSearch); // el listner lo pongo sobre el botón de búsqueda

//***** submit form - prevent
function handleForm(ev) {
  // ojo el prevent se hace sobre el form no sobre el botón!
  ev.preventDefault();
}
formElement.addEventListener('submit', handleForm);



