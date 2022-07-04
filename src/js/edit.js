import axios, {getData} from "axios";
import {setDataByName} from "./data.js";

const inputName = document.querySelector("#input-name-Edit");
const inputShortText = document.querySelector("#input-short-description-Edit");
const inputLongText = document.querySelector("#input-long-description-Edit");
const inputImgEdit = document.querySelector("#input-img-Edit");
const modalContainers = document.querySelector(".edit");
const modalTriggersEdit = document.querySelectorAll(".modal-trigger-edit");
const formEdit = document.querySelector("#form-Edit");
const grid = document.querySelector(".grid-container");
let base64 = "";
let data = [];

const getFormEdit = (e) => {
    inputName.value = e.name;
    inputShortText.value = e.shortDescription;
    inputLongText.value = e.description;
    base64 = e.image;
};

const editData = async (e) => {
    let name = e.name
    let id = e.id
    try {
        await axios
            .put(`https://character-database.becode.xyz/characters/${id}`, {
                name: inputName.value,
                shortDescription: inputShortText.value,
                description: inputLongText.value,
                image: base64,
            })
            .then((e) => {

                let url = `https://character-database.becode.xyz/characters`;
                axios.get(`${url}?name=${name}`).then((res) => {
                    data = res.data;
                })
                    .then(() => {
                        reload(grid);
                        setDataByName(data);
					})
					.then(()=> {
						axios.get(`${url}?name=${name}`).then((res) => {
							data = res.data;
							if (data.length !== 0) {
								const getID = res.data[0].id;
								setDataByName(data);
								let btnDel = document.querySelector(".del");
								btnDel.addEventListener("click", () => {
									if (confirm(`Etes vous sûr de vouloir supprimer ${res.data[0].name}?`)) {
										axios.delete(`https://character-database.becode.xyz/characters/${getID}`);
										//créer une div alert en haut de la page avec un timeout
										alert(`${res.data[0].name} à bien été supprimer`);
										getData();
									}

								});
								let btnModif = document.querySelector(".modif");
								btnModif.addEventListener("click", () => {
									edit(res.data[0]);
								});
							}
						});
					})

            })
    } catch (e) {
        console.log(e);
    }
};

function reload(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const togglesModal = () => {
    modalContainers.classList.toggle("active");
};

modalTriggersEdit.forEach((trigger) => trigger.addEventListener("click", togglesModal));

const edit = (e) => {
    togglesModal();
    getFormEdit(e);
    inputImgEdit.addEventListener("change", () => {
        let reader = new FileReader();
        reader.onload = () => {
            base64 = reader.result.replace("data:", "").replace(/^.+,/, "");
        };
        if (event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]);
        }
    });
    formEdit.addEventListener("submit", (event) => {
        event.preventDefault();
        if (confirm(`Etes vous sur de vouloir modifier ${e.name}`)) {
            editData(e);
            togglesModal();
        }
    });
};

export {edit, modalTriggersEdit};
