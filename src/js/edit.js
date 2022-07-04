import axios from "axios";
import { getData } from "./axios.js";
import {setDataByName} from "./data.js";

const inputName = document.querySelector("#input-name-Edit");
const inputShortText = document.querySelector("#input-short-description-Edit");
const inputLongText = document.querySelector("#input-long-description-Edit");
const inputImgEdit = document.querySelector("#input-img-Edit");
let base64 = "";
let modalContainers = document.querySelector(".edit");
const formEdit = document.querySelector("#form-Edit");
let base64Edit = "";
let img = "";
const grid = document.querySelector(".grid-container");
let data = [];


const getFormEdit = (e) => {
	inputName.value = e.name;
	inputShortText.value = e.shortDescription;
	inputLongText.value = e.description;
	base64 = e.image;
};



const editData = async (e) => {
	try {
		await axios
			.put(`https://character-database.becode.xyz/characters/${e}`, {
				name: inputName.value,
				shortDescription: inputShortText.value,
				description: inputLongText.value,
				image: base64,
			})
			.then((e) => {
				let fullprofileName = e.name
				let url = `https://character-database.becode.xyz/characters`;
				axios.get(`${url}?name=${fullprofileName}`).then((res) => {
					data = res.data;})
				setDataByName(data);
				console.log(data)
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


const edit = (e) => {
	togglesModal();
	getFormEdit(e);
	inputImgEdit.addEventListener("change", () => {
		let reader = new FileReader();
		reader.onload = () => {
			base64 = reader.result.replace("data:", "").replace(/^.+,/, "");
		};
		if(event.target.files[0]){
			reader.readAsDataURL(event.target.files[0]);
		}
	});
	formEdit.addEventListener("submit", (event) => {
		event.preventDefault();
		if (confirm(`Etes vous sur de vouloir modifier ${e.name}`)){
			editData(e.id);
			togglesModal();
			reload(grid);
			let fullprofileName = e.name
			let url = `https://character-database.becode.xyz/characters`;
			axios.get(`${url}?name=${fullprofileName}`).then((res) => {
				data = res.data;})
			setDataByName(data);
		}


	});
};

export {edit};
