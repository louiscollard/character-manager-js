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
                btnMore.forEach((e) => {
                    e.addEventListener("click", () => {
                        let fullprofileName = e.parentNode.children[0].textContent;
                        axios.get(`${url}?name=${fullprofileName}`)
                            .then((res) => {
                                data = res.data;
                                if (data.length !== 0) {
                                    const getID = res.data[0].id;
                                    setDataByName(data);
                                    let btnDel = document.querySelector(".del")
                                    btnDel.addEventListener("click", () => {
                                        if (confirm(`Etes vous sûr de vouloir supprimer ${res.data[0].name}?`)) {
                                            axios.delete(
                                                `https://character-database.becode.xyz/characters/${getID}`
                                            );
                                            alert(`${res.data[0].name} à bien été supprimer`);
                                        }
                                        getData();
                                    })
                                } else {
                                    alert(`Le personnage rechercher n'existe pas`);
                                    getData();
                                }
                            })
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
