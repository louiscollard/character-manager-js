let body = document.querySelector(".grid-container");

const setData = (data) => {
	body.innerHTML = "";
	for (let datas of data) {
		createCard(datas);
	}
};

//modifier
const setDataByName = (data) => {
	for (let datas of data) {
		body.innerHTML = "";
		let section = document.createElement("section");
		let img = document.createElement("img");
		let cardBody = document.createElement("div");
		let cardName = document.createElement("h5");
		let short = document.createElement("p");
		let long = document.createElement("p");
		let del = document.createElement("button");
		let modif = document.createElement("button");
		let sectionBtn = document.createElement("section-btn");

		section.classList.add("card-full-screen");
		body.appendChild(section);
		section.classList.add("card-card-full-screen");
		cardBody.classList.add("card-body-card-full-screen");
		img.setAttribute("src", `data:image/jpg;base64,${datas.image}`);
		cardName.classList.add("card-body__name-card-full-screen");
		cardName.innerHTML = `${datas.name}`;
		short.classList.add("card-body__short_text-card-full-screen");
		short.innerHTML = `${datas.shortDescription}`;
		long.classList.add("card-body__long_text-card-full-screen");
		long.innerText = `${datas.description}`;
		del.innerText = `Effacer`;
		del.classList.add("del");
		modif.innerText = `modifier`;
		modif.classList.add("modif");
		sectionBtn.append(del, modif);

		cardBody.append(cardName, short, long, sectionBtn);
		body.appendChild(section);
		section.append(img, cardBody);
	}
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
	section.classList.add("card");
	cardBody.classList.add("card-body");
	img.setAttribute("src", `data:image/jpg;base64,${data.image}`);
	cardName.classList.add("card-body__name");
	cardName.innerHTML = `${data.name}`;
	short.classList.add("card-body__short_text");
	short.innerHTML = `${data.shortDescription}`;
	long.classList.add("card-body__long_text");
	long.innerText = `${data.description}`;
	cardBody.append(cardName, short, link);
	body.appendChild(section);
	section.append(img, cardBody);
	link.innerHTML = `Afficher plus`;
};

export { setData, setDataByName };
