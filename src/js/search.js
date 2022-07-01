import axios from "axios";
import {setData, setDataByName} from "./data.js";
import {getData} from "./axios.js";


let inputSearch = document.querySelector("#inputSearch")
let submitSearch = document.querySelector("#submitSearch")
let grid = document.querySelector(".grid-container")
let data = [];
let url = `https://character-database.becode.xyz/characters`;

let displayCharacterSearch = (inputSearch) => {
    let inputValue = inputSearch.value;

    try {
        axios.get(`${url}?name=${inputValue}`)
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
                        let grid = document.querySelector(".grid-container")
                        grid.innerHTML = "";
                        let fullprofileName = e.parentNode.children[0].textContent;
                        axios.get(`${url}?name=${fullprofileName}`)
                            .then((res) => {
                                data = res.data;
                                console.log(data);
                                console.log(data.name);
                                if (data.length !== 0) {
                                    setDataByName(data);
                                } else {
                                    alert(`Le personnage rechercher n'existe pas`);
                                    getData();
                                }
                            })
                    })
                })
                let btnDel = document.querySelector(".card-body__del")
                btnDel.addEventListener("click", () => {
                    console.log("fullprofileName")
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
