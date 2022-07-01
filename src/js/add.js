import axios from "axios";
import {getData} from "./axios.js";


const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const inputName = document.querySelector("#input-name")
const inputSubmit = document.querySelector("#input-submit")
const inputImg = document.querySelector("input[type=file]");
const inputShortText = document.querySelector("#input-short-description");
const inputLongText = document.querySelector("#input-long-description")
const form = document.querySelector("#form")
let base64 = "";

// Add modal
const toggleModal = () => {
	modalContainer.classList.toggle("active");
};

modalTriggers.forEach((trigger) => trigger.addEventListener("click", toggleModal));

const convertBase64 = () => {
	let file = document.querySelector("input[type=file]")["files"][0];
	let reader = new FileReader();
	reader.onload = () => {
		base64 = reader.result.replace("data:", "").replace(/^.+,/, "");
	};
	reader.readAsDataURL(file);
};

inputImg.addEventListener("change", () => {
	convertBase64();
});

const postData = async () => {
	try {
		await axios.post(
			`https://character-database.becode.xyz/characters`,
			{
				name: inputName.value,
				shortDescription: inputShortText.value,
				description: inputLongText.value,
				image: base64,
			}
		);
	} catch (e) {
		console.log(e);
	}
};

// Send infos api
form.addEventListener("submit", (e) => {
	e.preventDefault();
	postData();
	toggleModal();
});

export { toggleModal, modalContainer, modalTriggers, postData };
