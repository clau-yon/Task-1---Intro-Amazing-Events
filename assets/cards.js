
const presentCard =document.getElementById("cartas");
const fragment = document.createDocumentFragment()
for(let year of data.events){
    let actualEvento = document.createElement("div")
    fragment.appendChild(actualEvento)
    //actualEvento.textContent = year.date
    actualEvento.classList.add("card", "text-dark", "m-1", "content-card")

    actualEvento.innerHTML = `
        <img src="${year.image}" class="card-img-top">
            <div class="card-body">
            <h5 id="name" class="card-title fw-bold text-danger">${year.name}</h5>
            <p id="date" class="card-text">Date:  ${year.description} </p>
            <p id="price" class="card-text fw-bold">Price: $ ${year.price}</p>
            <a href="./details.html" class="btn btn-danger">More details</a>    `
    
    
    presentCard.appendChild(fragment)
    
}
