let body = document.querySelector(".grid-container");
let modals = document.querySelector(".modals");

const setData = (data) => {
	for (let datas of data) {
		createCard(datas);
	}
};

const setDataById = (data) => {
	createCard(data);
};

const createCard = (data) => {
	let section = document.createElement("section");
	let img = document.createElement("img");
	let cardBody = document.createElement("div");
	let link = document.createElement("a");
	let cardName = document.createElement("h5");
	let short = document.createElement("p");
	let long = document.createElement("p");

	link.classList.add("card-more");
	section.classList.add("card");
	body.appendChild(section);
	section.innerHTML = `${data.name}`;
	section.classList.add("card");
	cardBody.classList.add("card-body");
	img.setAttribute("src", `data:image/jpg;base64,${data.image}`);
	cardName.classList.add("card-body__name");
	cardName.innerHTML = `${data.name}`;
	short.classList.add("card-body__short_text");
	short.innerHTML = `${data.shortDescription}`;
	long.classList.add("card-body__long_text");
	long.innerText = `${data.description}`;
	cardBody.append(cardName, short);
	body.appendChild(section);
	section.append(img, cardBody);
	section.appendChild(link);
	link.innerHTML = `Afficher plus`;
};

const editModals = () => {
	alert("bonjour");
};

export { setData, setDataById };
