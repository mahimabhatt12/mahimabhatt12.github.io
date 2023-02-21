const results = document.getElementById('results');
let movies = JSON.parse(localStorage.getItem('Favourite movies'));
console.log(movies);

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

//Add click event on favourite button
let favRemoveBtn = document.querySelectorAll(".favouriteRemove");
for(let i = 0; i < favRemoveBtn.length; i++) {
    favRemoveBtn[i].addEventListener("click", (e) => {
        movieTitle = e.target.parentElement.id;
        console.log(movieTitle);
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