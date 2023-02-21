//Fetched and stored the 'search' button element in a constant variable: searchBtn
const searchBtn = document.getElementById('search');
//Fetched and stored the 'results' div element in a constant variable: results
const results = document.getElementById('results');

//Declared and initialized the variables
let search_term = '';
let movies;

//Created a Fetch API in order to retrieve all the movies where the title matches the input search term, and stored them in a constant variable: movies
const fetchmovies = async () => {
    movies = await fetch(
        'https://www.omdbapi.com/?i=tt3896198&apikey=4785f449&t=' + search_term
    ).then(res => res.json());
};

//Function to create the structure of the movie list in order to display the data on the HTML page
const showmovies = async () => {
    results.innerHTML = '';

    await fetchmovies();

	//'ul' element created
    const ul = document.createElement('ul');
    ul.classList.add('movies');

	//Checking whether the API has any results or not
    if (movies.Response === "False") {
        results.style.right = "42%";
        results.innerHTML = 'No Results found for "' + search_term + '"';
        return;
    } else {
        const li = document.createElement('li');
        li.classList.add('movie-item');

		//'img' element created for storing movie image
        const movie_poster = document.createElement('img');
        movie_poster.src = movies.Poster;
        movie_poster.classList.add('movie-poster');

		//'p' element created for storing movie name
        const movie_name = document.createElement('p');
        movie_name.innerText = movies.Title;
        movie_name.classList.add('movie-name');

		//'div' element created for storing movie information
        const movie_info = document.createElement('div');
        movie_info.classList.add('movie-info');

		//'div' element created for storing first movie info item
		const movie_info_item1 = document.createElement('div');
		movie_info_item1.classList.add('movie-info-item');

		//'p' element created for storing movie actors
		const movie_actors = document.createElement('p');
		movie_actors.innerText = 'Actors: ' + movies.Actors;
		movie_actors.classList.add('movie-actors');

		movie_info_item1.appendChild(movie_actors);

		//'div' element created for storing second movie info item
		const movie_info_item2 = document.createElement('div');
		movie_info_item2.classList.add('movie-info-item');

		//'p' element created for storing movie rating
		const movie_imdbRating = document.createElement('p');
		movie_imdbRating.innerText = 'IMDB Rating: ' + movies.imdbRating;
		movie_imdbRating.classList.add('movie-rating');

		movie_info_item2.appendChild(movie_imdbRating);

		//'div' element created for storing third movie info item
		const movie_info_item3 = document.createElement('div');
		movie_info_item3.classList.add('movie-info-item');

		//'p' element created for storing movie year
		const movie_year = document.createElement('p');
		movie_year.innerText = 'Year: ' + movies.Year;
		movie_year.classList.add('movie-year');

		movie_info_item3.appendChild(movie_year);

        //Div for Favourite and More Info buttons
        const subDiv = document.createElement('div');
        subDiv.classList.add('custom-div');
		
		//'button' element created as favourite button
		const fav_btn = document.createElement('button');
		fav_btn.classList.add('fav-btn');
		fav_btn.classList.add('btn');
		fav_btn.classList.add('btn-outline-success');
		fav_btn.setAttribute('id','favourite');
		fav_btn.innerText = '+ My List';
		
		//'button' element created as more-info button
		const infoDiv = document.createElement('button');
		infoDiv.setAttribute('onclick','movieInfoPage();');
		infoDiv.classList.add('bg-white');
		infoDiv.classList.add('border');
		infoDiv.classList.add('border-white');
		infoDiv.classList.add('fa-2x');
		infoDiv.classList.add('m-2');
		infoDiv.innerText = '>>';

        subDiv.appendChild(fav_btn);
        subDiv.appendChild(infoDiv);

        movie_info.appendChild(movie_info_item1);
        movie_info.appendChild(movie_info_item2);
        movie_info.appendChild(movie_info_item3);

        li.appendChild(movie_poster);
        li.appendChild(movie_name);
        li.appendChild(movie_info);
        li.appendChild(subDiv);

        ul.appendChild(li);

        results.appendChild(ul);

        //Add click event on the click of favourite button
        const favBtn = document.getElementById("favourite");
        favBtn.addEventListener("click", (e) => {
            favBtn.style.backgroundColor = "#198754";
            favBtn.style.color = "#fff";
            let favMovies = [];
            let tempData = JSON.parse(localStorage.getItem("Favourite movies"));
            if (tempData) {
                favMovies = tempData;
                favMovies.push(movies);
                localStorage.setItem("Favourite movies", JSON.stringify(favMovies));
            } else {
                favMovies.push(movies);
                localStorage.setItem("Favourite movies", JSON.stringify(favMovies));
            }
        });
    }
};

//Add input event on search bar
searchBtn.addEventListener('input', e => {
    search_term = e.target.value;
    if(search_term.length == 0){
        document.getElementById("results").innerHTML = "";
    } else{
        results.style.right = "23.9%";
        showmovies();
    }
});

//A function to call Movie Information Page when 'more info button' is clicked
function movieInfoPage(){
    localStorageAsync
    .set('Movie Information', JSON.stringify(movies))
    .then(function() {
        parent.location = "movieInfo.html";
    })
}

//Created a Promise in order to set/get items from local storage, and stored them in a constant variable: localStorageAsync
const localStorageAsync = {
    set: function (key, value) {
        return Promise.resolve().then(function () {
            localStorage.setItem(key, value);
        });
    },
    get: function (key) {
        return Promise.resolve().then(function () {
            return localStorage.getItem(key);
        });
    }
};

//A function to call Favourite Page when 'favourite button' is clicked
function handleFavouriteBtn(){
    parent.location = "favourite.html";
}
