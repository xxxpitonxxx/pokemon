/*fetch('https://pokeapi.co/api/v2/pokemon/psyduck')
    .then((response) => response.json())
    .then((data) => console.log(data['species']['name']))

    fetch('https://pokeapi.co/api/v2/pokemon/psyduck')
    .then((response) => response.json())
    .then((dat) => console.log(dat))

    fetch('https://pokeapi.co/api/v2/pokemon/psyduck')
    .then((response) => response.json())
    .then((d) => console.log(d['sprites']['back_shiny']))
*/





    let btn = document.getElementById("getdata");
    btn.addEventListener('click', function() {
        let pokename = document.getElementById('pokename').value;
        pokename = pokename.toLowerCase();
        if (pokename == "") {
            pokename = "psyduck";
        }

        fetch('https://pokeapi.co/api/v2/pokemon/' + pokename)
            .then((response) => response.json())
            .then((data) => {
/*
                let name = document.getElementById("name");
                name.innerHTML = "Имя: " + data["name"];
                let name1 = document.getElementById("name1");
                name1.innerHTML = "Имя: " + data["species"]["name1"];
                let name2 = document.getElementById("name2");
                name2.innerHTML = "Имя: " + data["moves"]["order"];
*/
                let sprite = document.getElementById("name");
                sprite.innerHTML = '<img src="'+data["sprites"]["front_default"]+'"></img>';
                let sprite1 = document.getElementById("name1");
                sprite1.innerHTML = '<img src="'+data["sprites"]["other"]["dream_world"]["front_default"]+'"></img>';
                let sprite2 = document.getElementById("name2");
                sprite2.innerHTML = "Имя: " +data["name"];
                let sprite3 = document.getElementById("name3");
                sprite3.innerHTML = "ID: " +data["id"];

            })
    })



    



