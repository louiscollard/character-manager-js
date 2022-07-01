import {setData, setDataByName} from "./data.js";
import axios from "axios";

let url = `https://character-database.becode.xyz/characters`;
let grid = document.querySelector(".grid-container")
let data = [];

const getData = async () => {
    try {
        await axios.get(url)
            .then((res) => {
                data = res.data;
                if (data.length !== 0) {
                    setData(data);
                } else {
                    grid.innerHTML =`Il n'y a aucun personnage dans L'API`;
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

};


export {getData};
