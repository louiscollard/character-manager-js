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
		let del = document.createElement("button")
		let modif = document.createElement("button")



		section.classList.add("card");
		body.appendChild(section);
		section.classList.add("card");
		cardBody.classList.add("card-body");
		img.setAttribute("src", `data:image/jpg;base64,${datas.image}`);
		cardName.classList.add("card-body__name");
		cardName.innerHTML = `${datas.name}`;
		short.classList.add("card-body__short_text");
		short.innerHTML = `${datas.shortDescription}`;
		long.classList.add("card-body__long_text");
		long.innerText = `${datas.description}`;
		del.innerText =  `Effacer`
		del.classList.add("del");
		modif.innerText =  `modifier`
		modif.classList.add("modif");



		cardBody.append(cardName, short,long, del, modif);
		body.appendChild(section);
		section.append(img, cardBody);
		console.log(datas.id)
		//Btn modifier et delete
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
	cardBody.append(cardName, short,link);
	body.appendChild(section);
	section.append(img, cardBody);
	link.innerHTML = `Afficher plus`;
};



export { setData, setDataByName };
