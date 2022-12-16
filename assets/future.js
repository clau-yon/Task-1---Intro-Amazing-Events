const contenedor = document.getElementById("contenedorPadre"); //guardo
console.log(document.getElementById("contenedorPadre"));

//contenedor.classList.add("bg-light")     //Dando clases en Boostrap
//contenedorPadre.style.background = "grey";
contenedorPadre.style.flex = "1";
contenedorPadre.style.alignItems = "center"; 
contenedorPadre.style.justifyContent = "center"; 

//Agilizar el codigo
fragment = document.createDocumentFragment();

for(let year of data.events){               //Inicio de Ciclo 
    if(year.date > '2022'){                 //Condicion

        const nuevoEventos = document.createElement("div")
        fragment.appendChild(nuevoEventos)
        nuevoEventos.style.width="400px";
        nuevoEventos.textContent = year.date
        nuevoEventos.classList.add("m-5","card","border-dark")

        nuevoEventos.innerHTML = `
        <img src="${year.image}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title fw-bold text-danger">${year.name}</h5>
            <p class="card-text">Date:  ${year.date} </p>
            <p class="card-text fw-bold">Price: $ ${year.price}</p>
            <a href="./details.html?id=${year._id}" class="btn btn-danger">More details</a> 
        </div>
            `
    fragment.appendChild(nuevoEventos)  //Imprime las cartas>2021
    
    }
    
}
contenedorPadre.appendChild(fragment) //Se da de hijo al fragment
