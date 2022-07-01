import { setData, setDataById } from "./data.js";
import axios from "axios";

let url = `https://character-database.becode.xyz/characters`;

let data = [];

const getData = async () => {
	try {
		await axios.get(url).then((res) => {
			data = res.data;
		});
	} catch (error) {
		console.error(error);
	}
	if (data.length !== 0) {
		setData(data);
	} else {
		console.log(`Il n'y a aucun personnage dans L'API`);
	}
};

const getDataByName = async (name) => {
	try {
		await axios.get(`${url}?name=${name}`).then((res) => {
			data = res.data;
			console.log(data);
		});
	} catch (error) {
		console.error(error);
	}
	if (data.length !== 0) {
		setData(data);
	} else {
		alert(`Le personnage rechercher n'existe pas`);
		await getData();
	}
};

const getDataById = async (id) => {
	try {
		await axios.get(`${url}/${id}`).then((res) => {
			data = res.data;
		});
	} catch (error) {
		console.error("id pas trouvé");
	}
	if (data.length !== 0) {
		setDataById(data);
	} else {
		alert(`L'id rechercher n'existe pas`);
		await getData();
	}
};

export { getData, getDataById, getDataByName, url };
