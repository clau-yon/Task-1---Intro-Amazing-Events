const futureCard =document.getElementById("future");
const fragment = document.createDocumentFragment()

for(let year of data.events){
    if(year.date > '2022'){

        let nuevoEventos = document.createElement("div")
        fragment.appendChild(nuevoEventos)
        nuevoEventos.textContent = year.date
        nuevoEventos.classList.add("card", "text-dark", "m-1", "content-card")

        nuevoEventos.innerHTML = `
                <img src="${year.image}" class="card-img-top">
                <div class="card-body">
                <h5 id="name" class="card-title fw-bold text-danger">${year.name}</h5>
                <p id="date" class="card-text">Date:  ${year.date}  </p>
                </div>
                <div class="container-fluid d-flex justify-content-between mt-5">
                <p id="price" class="card-text fw-bold">Price: $ ${year.price}</p>
                    <a href="./details.html" class="btn btn-danger">More details</a>
                </div>
    `
    futureCard.appendChild(fragment)
    
    }
    
}
