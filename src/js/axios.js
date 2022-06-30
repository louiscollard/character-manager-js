import { setData, setDataByName } from "./data.js";
import axios from "axios";

let url = `https://character-database.becode.xyz/characters`;

let data = [];

const getData = async () => {
	try {
		await axios.get(url)
			.then((res) => {
			data = res.data;
				if (data.length !== 0) {

					setData(data);
				} else {
					console.log(`Il n'y a aucun personnage dans L'API`);
				}
			})
			.then(function () {
				let btnMore = document.querySelectorAll(".card-more")
				btnMore.forEach((e)=> {
					e.addEventListener("click", () => {
						let fullprofileName = e.parentNode.children[0].textContent;
						axios.get(`${url}?name=${fullprofileName}`)
							.then((res) => {
								data = res.data;
								console.log(data)
								if (data.length !== 0) {
									const getID = res.data[0].id;
									setDataByName(data);
									let btnDel = document.querySelector(".del")
									btnDel.addEventListener("click", () => {

										axios.delete(
											`https://character-database.becode.xyz/characters/${getID}`
										);
										alert("You have delete the profile");

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



export { getData};
