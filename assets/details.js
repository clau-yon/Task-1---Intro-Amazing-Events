const infoCartaUnica =data.events
const queryString = location.search
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log([id]);

const mostrarCartaUnica = infoCartaUnica.find(tarjeta => tarjeta._id == id)
console.log(mostrarCartaUnica)
const contenedor = document.getElementById("contenedor")
  contenedor.innerHTML = `
                            <div class="card-header d-flex flex-column justify-content-center m-5">
                              <img src="${mostrarCartaUnica.image} class="card-img-top">
                            </div>
                              <div class="card-body text-center">
                                <h2 class="card-title w-bold text-danger">${mostrarCartaUnica.name}</h2>
                                <h5 class="card-text fw-bold">Date:  ${mostrarCartaUnica.date} </h5>
                                <p class="card-text">Description:  ${mostrarCartaUnica.description} </p>
                                <p class="card-text">Category:  ${mostrarCartaUnica.category} </p>
                                <p class="card-text">Place:  ${mostrarCartaUnica.place} </p>
                                <p class="card-text">Capacity:  ${mostrarCartaUnica.capacity} </p>
                                <p class="card-text">Assistance:  ${mostrarCartaUnica.assistance} </p>
                                <h5 class="card-text fw-bold">Price: $ ${mostrarCartaUnica.price}</h5>
                              </div>`