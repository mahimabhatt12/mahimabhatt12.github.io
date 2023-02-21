//Fetched and stored the results div element to store the movie listing in a constant variable: results
const results = document.getElementById('results');

//Fetched and stored the localStored movie information in a constant variable: movie
let movies = JSON.parse(localStorage.getItem('Favourite movies'));

//Function to create the structure of the localStored movie informations in a listing format in order to display the data on the HTML page
if(movies != null && movies.length > 0){
    for (var i = 0; i < movies.length; i++) {
        results.innerHTML += `
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4 p-3">
                        <img src="${movies[i]?.Poster}" class="img-fluid rounded-start movie-img">
                    </div>
                    <div class="col-md-8 py-5 pe-5">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">${movies[i]?.Title}</h5>
                            <h5 class="card-title fw-semibold">${movies[i]?.Genre}</h5>
                            <p class="card-text fst-italic">${movies[i]?.Actors}</p>
                            <p class="card-text">${movies[i]?.Plot}</p>
                            <p class="card-text float-end"><small class="text-muted">${movies[i]?.Released}</small></p>
                        </div>
                        <div class="mt-5" id="${movies[i]?.Title}">
                            <button type="button" class="btn btn-outline-danger float-end favouriteRemove">- My List</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

//Fetched and stored all the elemets having a common class 'favouriteRemove' in a constant variable: results
let favRemoveBtn = document.querySelectorAll(".favouriteRemove");
//Add click event on the click of favourite remove button
for(let i = 0; i < favRemoveBtn.length; i++) {
    favRemoveBtn[i].addEventListener("click", (e) => {
        movieTitle = e.target.parentElement.id;
        favRemoveBtn[i].style.backgroundColor = "#dc3545";
        favRemoveBtn[i].style.color = "#fff";
        let favMovies = [];
        let tempData = JSON.parse(localStorage.getItem("Favourite movies"));
        if (tempData) {
            favMovies = tempData.filter(function( obj ) {
                return obj.Title !== movieTitle;
            })
            localStorage.setItem("Favourite movies", JSON.stringify(favMovies));
            setTimeout(function(){
                window.location.reload();
            }, 1000);
        }
    });
}
