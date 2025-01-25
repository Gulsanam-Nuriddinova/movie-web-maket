let elInput = document.getElementById('search');
let elInputBtn = document.getElementById('search-btn');
let elList = document.getElementById('list');
let elButton = document.getElementById('btn');



function capitalizeInput(input) {
    return input.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

function searchMovie() {
    let query = capitalizeInput(elInput.value.toLowerCase()); 
    let filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(query) || 
        movie.genre.some(genre => genre.toLowerCase().includes(query)) || 
        movie.description.toLowerCase().includes(query)
    );
    displayMovies(filteredMovies);
}




function displayMovies(movies) {
    elList.innerHTML = ''; 

    movies.forEach((item, index) => {
        let elItem = document.createElement('li');
        let elItemImg = document.createElement('img');
        let elItemTitle = document.createElement('h4');
        let elItemDiv = document.createElement('div');
        let elItemRating = document.createElement('span');
        let elItemYear = document.createElement('span');
        let elItemGenre = document.createElement('span');
        

        elItemImg.src = item.poster;
        elItemTitle.textContent = item.title;

        elItemGenre.textContent = `Genre: ${item.genre.join(', ')}`; 
        elItemYear.textContent = `Year: ${item.year}`;
        elItemRating.textContent = `Rating: ${item.rating}`;
        

        if (index >= 6) {
            elItem.style.display = 'none';
        }

        elList.append(elItem);
        elItem.append(elItemImg);
        elItem.append(elItemTitle);
        elItem.append(elItemDiv);
        elItemDiv.append(elItemGenre);
        elItemDiv.append(elItemYear);
        elItemDiv.append(elItemRating);
        
    });
}


function searchMovie() {
    let query = elInput.value.toLowerCase();
    let filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(query) || 
        movie.genre.some(genre => genre.toLowerCase().includes(query)) || 
        movie.description.toLowerCase().includes(query)
    );
    displayMovies(filteredMovies);
}


elInputBtn.addEventListener('click', searchMovie);


elInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchMovie();
    }
});


elButton.addEventListener('click', () => {
    let allItems = elList.querySelectorAll('li');
    allItems.forEach(item => {
        item.style.display = 'block';
    });
    elButton.style.display = 'none';
});


displayMovies(movies);
