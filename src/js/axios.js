import { setData, setDataByName } from "./data.js";
import axios from "axios";

let url = `https://character-database.becode.xyz/characters`;

let data = [];

const getData = async () => {
	try {
		await axios
			.get(url)
			.then((res) => {
				data = res.data;
				if (data.length !== 0) {
					setData(data);
				} else {
					console.log(`Il n'y a aucun personnage dans L'API`);
				}
			})
			.then(function () {
				let btnMore = document.querySelectorAll(".card-more");
				btnMore.forEach((e) => {
					e.addEventListener("click", () => {
						let grid = document.querySelector(".grid-container");
						grid.innerHTML = "";
						let fullprofileName = e.parentNode.children[0].textContent;
						axios.get(`${url}?name=${fullprofileName}`).then((res) => {
							data = res.data;
							console.log(data);
							console.log(data.name);
							if (data.length !== 0) {
								setDataByName(data);
							} else {
								alert(`Le personnage rechercher n'existe pas`);
								getData();
							}
						});
					});
				});
			});
	} catch (error) {
		console.error(error);
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

export { getData, getDataById };
