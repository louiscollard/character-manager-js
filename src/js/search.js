import axios from "axios";
import {setData} from "./data.js";
import {getData} from "./axios.js";


let inputSearch = document.querySelector("#inputSearch")
let submitSearch = document.querySelector("#submitSearch")
let grid = document.querySelector(".grid-container")
let data = [];
let url = `https://character-database.becode.xyz/characters`;

let displayCharacterSearch = (inputSearch) => {
    try {
        axios.get(`${url}?name=${inputSearch.value}`)
            .then((res) => {
                data = res.data;
                console.log(data);
                if (data.length !== 0) {
                    setData(data);
                } else {
                    alert(`Le personnage rechercher n'existe pas`);
                    getData();
                }
            })
            .then(function () {
                let btnMore = document.querySelectorAll(".card-more")
                btnMore.forEach((e)=> {
                    e.addEventListener("click", () => {
                        alert("bonjour")
                    })
                })
            })
    } catch (error) {
        console.error(error);
    }

}

let search = () => {
    grid.innerHTML = "";
    displayCharacterSearch(inputSearch);
    inputSearch.value = "";
}



submitSearch.addEventListener("click", () => {
    search();
})

document.addEventListener("keyup", (e) => {
    if(e.key === "Enter"){
        search();
    }
})
