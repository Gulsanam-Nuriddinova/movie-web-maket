let elList = document.getElementById('list')
let elButton = document.getElementById('btn')

console.log(movies);


movies.forEach((item, index) => {
    

    let elItem = document.createElement('li')
    let elItemImg = document.createElement('img')
    let elItemTitle = document.createElement('h4')
    let elItemDiv = document.createElement('div')
    let elItemRating = document.createElement('span')
    let elItemYear = document.createElement('span')
    let elItemGenre =document.createElement('span')

    elItemImg.src = item.poster
    elItemTitle.textContent = item.title

    elItemGenre.textContent = `Ganre: ${item.genre}`
    elItemYear.textContent = `Year: ${item.year}`
    elItemRating.textContent = `Rating: ${item.rating}`
    
    if (index >= 6) {
        elItem.style.display = 'none';
    }

    elList.append(elItem)
    elItem.append(elItemImg)
    elItem.append(elItemTitle)
    elItem.append(elItemDiv)
    elItemDiv.append(elItemGenre)
    elItemDiv.append(elItemYear)
    elItemDiv.append(elItemRating)
    
})

    elButton.addEventListener( 'click', () => {
        let allItems = elList.querySelectorAll('li');
        allItems.forEach(item => {
            item.style.display = 'block'; // Barcha qutilarni ko'rsatish
        });
        elButton.style.display = 'none'
    })