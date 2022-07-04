import { toggleModal } from "./add.js";
import axios from "axios";

const inputName = document.querySelector("#input-name");
const inputShortText = document.querySelector("#input-short-description");
const inputLongText = document.querySelector("#input-long-description");
let base64 = "";
let formEdit = document.querySelector(".formAdd");

const getFormEdit = (e) => {
	formEdit.classList.remove("formAdd");
	formEdit.classList.add("formEdit");
	inputName.value = e.name;
	inputShortText.value = e.shortDescription;
	inputLongText.value = e.description;
	base64 = e.image;
};

const editData = async (getID) => {
	try {
		await axios
			.put(`https://character-database.becode.xyz/characters/${getID}`, {
				name: inputName.value,
				shortDescription: inputShortText.value,
				description: inputLongText.value,
				image: base64,
			})
			.then(() => {
				alert("put");
			});
	} catch (e) {
		console.log(e);
	}
};

const test = (e) => {
	toggleModal();
	getFormEdit(e);
};

export { test };
