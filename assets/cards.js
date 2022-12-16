const contenedor = document.getElementById("contenedorCajas"); //guardo
console.log(document.getElementById("contenedorCajas"));

contenedor.classList.add("container","justify-content-center","align-items-center")     //Dando clases en Boostrap

//Agilizar el codigo
fragment = document.createDocumentFragment();
for(let tarjeta of data.events){  
    //Empezamos con las cartas
    const cards = document.createElement("div")
    cards.style.width = "400px";
    //cards.style.alignItems = "center";        //CORREGIR
    cards.classList.add("m-3","card","border-primary")
    cards.innerHTML = `  
     
            <img src="${tarjeta.image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title fw-bold text-danger">${tarjeta.name}</h5>
                <p class="card-text">Date:  ${tarjeta.date} </p>
                <p class="card-text fw-bold">Price: $ ${tarjeta.price}</p>
                <a href="./details.html?id=${tarjeta._id}" class="btn btn-danger">More details</a> 
            </div>

    `
    fragment.appendChild(cards)  //Imprime las cartas
}


contenedor.appendChild(fragment) //Se da de hijo al fragment


