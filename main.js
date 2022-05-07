let api_url2 = "https://pokeapi.co/api/v2/pokemon"
let api_url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100"
let consumo = fetch(api_url)
consumo.then((res) => res.json())
    .then((data) => {
        let data_results = data.results
        let div_contenido = document.querySelector("#div1")
        data_results.forEach((pokemon) => {
            const { url} = pokemon
            let masContenido = url
            let consumo1 = fetch(masContenido)
            consumo1.then(res => res.json())
            .then( data => {
            
                let url3 = data.abilities[1].ability.url
                let consumo3 = fetch(url3)
                consumo3.then(res => res.json())
                .then( data3 => { 
                    console.log(data3)
                    div_contenido.innerHTML += `
                    <div class="col-4">
                    <div class="card" style="align-items: center;
                    text-align: center;">
                    <img src="${data.sprites.other.home.front_shiny}" class="card-img-top" style="width: 50%;" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <h6 class="card-subtitle">${data3.names[1].name}</h6>
                    <p style="color: red;">GENERACION: <span style="color: black;">${data3.generation.name}</span></p>
                    <p class="card-text">${data3.effect_entries[0].effect}  ${data3.effect_entries[1].effect}</p>
                </div>
                </div>
            </div>
                `
                })
            
            })
        })
    }).catch((error) => {
        alert("No se puede conectar con la API")
        console.log(error)
    })


    function BusqueAlgo () {
        let div_contenido = document.querySelector("#div1")
        div_contenido.innerHTML=""
        let input_valor = document.querySelector("#input_buscador").value
        let api_url_buscador = `${api_url2}/${input_valor}`
        let consumo = fetch(api_url_buscador)
consumo.then((res) => res.json())
    .then((data1) => {
        let data_results = data1.abilities
        data_results.forEach(pokemon => {
            let masContenido = pokemon.ability.url
            let consumo1 = fetch(masContenido)
            consumo1.then(res => res.json())
            .then( data => {
                    div_contenido.innerHTML += `
                    <div class="col-6">
                    <div class="card" style="align-items: center;
                    text-align: center;">
                    <img src="${data1.sprites.other.home.front_shiny}" class="card-img-top" style="width: 50%;" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data1.name}</h5>
                    <h6 class="card-subtitle">${data.names[1].name}</h6>
                    <p style="color: red;">GENERACION: <span style="color: black;">${data.generation.name}</span></p>
                    <p class="card-text">${data.effect_entries[0].effect}  ${data.effect_entries[1].effect}</p>
                </div>
                </div>
            </div>
                `
                })
        })
    }).catch((error) => {
        alert("No se puede conectar con la API")
        console.log(error)
    })
}



