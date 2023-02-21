//Fetched and stored the 'results' div element in a constant variable: results
const results = document.getElementById('results');

//Fetched and stored the localStored movie information in a constant variable: movie
let movie = JSON.parse(localStorage.getItem('Movie Information'));

//Function to create the structure of the localStored movie informations in a listing format in order to display the data on the HTML page
if(movie){
    results.innerHTML = `
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4 p-3">
                <img src="${movie.Poster}" class="img-fluid rounded-start movie-img" alt="...">
            </div>
            <div class="col-md-8 py-5 pe-5">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${movie.Title}</h5>
                    <h5 class="card-title fw-semibold">${movie.Genre}</h5>
                    <p class="card-text fst-italic">${movie.Actors}</p>
                    <p class="card-text">${movie.Plot}</p>
                    <p class="card-text float-end"><small class="text-muted">${movie.Released}</small></p>
                </div>
            </div>
        </div>
    </div>
    `;
}
