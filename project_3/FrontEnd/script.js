// script.js

const APILINK = 'https://api.themoviedb.org/3/movie/popular?api_key=cfc0e5515a37193d3738d91e6bd2907a';  // Corrected endpoint
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?api_key=cfc0e5515a37193d3738d91e6bd2907a&query=";  // Corrected query placement

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK);  // Corrected function name

function returnMovies(url) {
    fetch(url).then(res => res.json())
    .then(function(data) {
        console.log(data.results);
        data.results.forEach(element => {
            /*const div_card = document.createElement('div');
            div_card.setAttribute('class','card');

            div_card.className = 'card';  // Added class for styling if needed

            const image = document.createElement('img');
            const title = document.createElement('h3');

            title.innerText = element.title;  // Changed to innerText and fixed template literal
            image.src = IMG_PATH + element.poster_path;
            div_card.appendChild(image);
            div_card.appendChild(title);
            main.appendChild(div_card);
            */
           const div_card=document.createElement('div');
           div_card.setAttribute('class','card');

           const div_row=document.createElement('div');
           div_row.setAttribute('class','row');

           const div_column=document.createElement('div');
           div_column.setAttribute('class','column');

           const image=document.createElement('img');
           image.setAttribute('class','thumbnail');
           image.setAttribute('id','image');

           const title=document.createElement('h3');
           title.setAttribute('id','title');
          
           const center=document.createElement('center');
           
           title.innerHTML=`${element.title}`;
           
           image.src=IMG_PATH+element.poster_path;
           
           center.appendChild(image);
           div_card.appendChild(center);
           div_card.appendChild(title);
           div_column.appendChild(div_card);
           div_row.appendChild(div_column);

           main.appendChild(div_row);
        
        });
    }).catch(error => console.error('Error fetching data:', error));  // Error handling
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCHAPI + encodeURIComponent(searchItem));  // Added encodeURIComponent for query
        search.value = '';
    }
});
