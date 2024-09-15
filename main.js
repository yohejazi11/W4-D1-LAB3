let url = 'https://rickandmortyapi.com/api/character';
let container = document.getElementById('container');

fetch(url)
    .then(response => response.json())
    .then(json =>{
        json.results.forEach(element => {
            let cart=document.createElement('div');
            let name=document.createElement('h3');
            let image=document.createElement('img');
            cart.setAttribute('id','cart');
            cart.setAttribute('class','cart');
            name.setAttribute('class','name');
            image.setAttribute('class','image');

            name.textContent=element.name;
            image.src=element.image;
            cart.appendChild(name);
            cart.appendChild(image);
            container.appendChild(cart);


        });
    });
