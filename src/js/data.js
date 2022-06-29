let body = document.querySelector(".grid-container");
const setData = (data) => {
	for (let datas of data) {
		createCard(datas);
	}
};

const setDataById = (data) => {};

const createCard = (data) => {
	let section = document.createElement("section");
	let img = document.createElement("img");
	let cardBody = document.createElement("div");
	let link = document.createElement("a");
	link.classList.add("card-more");
	section.classList.add("card");
	body.appendChild(section);
	link.innerHTML = `Afficher plus`;
	section.innerHTML = `${data.name}
    `;
	section.appendChild(link);
};

export { setData, setDataById };
