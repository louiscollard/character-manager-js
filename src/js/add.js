import axios from "axios";
import { getData } from "./axios.js";

const grid = document.querySelector(".grid-container");
const modalContainer = document.querySelector(".add");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const inputName = document.querySelector("#input-name");
const inputSubmit = document.querySelector("#input-submit");
const inputImg = document.querySelector("input[type=file]");
const inputShortText = document.querySelector("#input-short-description");
const inputLongText = document.querySelector("#input-long-description");
const form = document.querySelector(".formAdd");
let base64 = "";

// Add modal
const toggleModal = () => {
	modalContainer.classList.toggle("active");
	inputName.value = "";
	inputShortText.value = "";
	inputLongText.value = "";
	base64 = "";
};

modalTriggers.forEach((trigger) => trigger.addEventListener("click", toggleModal));

const convertBase64 = () => {

	let reader = new FileReader();
	reader.onload = () => {
		return base64 = reader.result.replace("data:", "").replace(/^.+,/, "");
	};
	if(event.target.files[0]){
		reader.readAsDataURL(event.target.files[0]);
	}
};

inputImg.addEventListener("change", () => {
	base64 = convertBase64();
});

const postData = async () => {
	try {
		await axios
			.post(`https://character-database.becode.xyz/characters`, {
				name: inputName.value,
				shortDescription: inputShortText.value,
				description: inputLongText.value,
				image: base64,
			})
			.then(() => {
				reload(grid);
				getData();
			});
	} catch (e) {
		console.log(e);
	}
};

function reload(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

// Send infos api
form.addEventListener("submit", (e) => {
	e.preventDefault();
	postData();
	toggleModal();

	// remettre à zero les input

	inputName.value = "";
	inputShortText.value = "";
	inputLongText.value = "";
	base64 = "";
});

export { toggleModal, modalContainer, modalTriggers, postData, convertBase64 };
