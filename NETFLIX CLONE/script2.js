const api = "api_key=6cd814e70652c46f3ceb037d912e2756";

const base_url = "https://api.themoviedb.org/3";

const banner_url = "https://image.tmdb.org/t/p/original";
const image_url = "https://image.tmdb.org/t/p/w185";

const requests = {

    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
  
};

function truncate(str, n){
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
}

// banner
fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())


    .then((data) => {
        // every refresh movie changes

        const setMovie = 
            data.results[Math.floor(Math.random() * data.results.length - 1)];

        
        var banner = document.getElementById("banner");
        var banner_title = document.getElementById("banner__title");
        var banner__desc = document.getElementById("banner__description");


        banner.style.backgroundImage = 
           "url(" + banner_url + setMovie.backdrop_path+ ")";
           banner__desc.innerText = truncate(setMovie.overview, 150);
           banner_title.innerText = setMovie.name;        
    });
// rows

fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())
    
    

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);


        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "NETFLIX ORIGINALS";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);


        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row__poster";

            var s = movie.name.replace(/\s+/g, "");

            poster.id = s;
            poster.src = image_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });


    // trending

    fetch(requests.fetchTrending)
    .then((res) => res.json())
    
    

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        headrow.appendChild(row);


        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "TRENDING";
        row.appendChild(title);


        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);


        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row__poster";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = image_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });
// Action
fetch(requests.fetchActionMovies)
    .then((res) => res.json())
    
    

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        headrow.appendChild(row);


        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "ACTION MOVIES";
        row.appendChild(title);


        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);


        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row__poster";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = image_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    });

// Comedy
fetch(requests.fetchComedyMovies)
    .then((res) => res.json())
    
    

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        headrow.appendChild(row);


        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "COMEDY MOVIES";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);


        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row__poster";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = image_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    });
    
//Romance
fetch(requests.fetchRomanceMovies)
    .then((res) => res.json())
    
    

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        headrow.appendChild(row);


        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "ROMANCE MOVIES";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);


        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row__poster";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = image_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    });

// Horror
fetch(requests.fetchHorrorMovies)
    .then((res) => res.json())
    
    

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        headrow.appendChild(row);


        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "HORROR MOVIES";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);


        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row__poster";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = image_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    });

// Documentaries
fetch(requests.fetchDocumentaries)
    .then((res) => res.json())
    
    

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        headrow.appendChild(row);


        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "DOCUMENTARIES";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);


        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row__poster";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = image_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    });







