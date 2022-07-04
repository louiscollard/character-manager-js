import axios from "axios";

const inputName = document.querySelector("#input-name-Edit");
const inputShortText = document.querySelector("#input-short-description-Edit");
const inputLongText = document.querySelector("#input-long-description-Edit");
const inputImg = document.querySelector("input[type=file]");
let base64 = "";
let modalContainers = document.querySelector(".edit");
const formEdit = document.querySelector("#form-Edit");
let base64Edit = "";
let img = "";


const getFormEdit = (e) => {
	inputName.value = e.name;
	inputShortText.value = e.shortDescription;
	inputLongText.value = e.description;
	base64Edit = e.image;
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


const togglesModal = () => {
	modalContainers.classList.toggle("active");
};


const edit = (e) => {
	togglesModal();
	getFormEdit(e);
	formEdit.addEventListener("submit", (event) => {
		event.preventDefault();
		editData(e.id);
		togglesModal();
	});
};

export {edit};
