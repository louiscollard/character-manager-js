let body = document.querySelector(".grid-container")
const setData = (data) => {
    for (let datas of data) {
        createCard(datas)
    }
}


const setDataById = (data) => {
    createCard(data)
}

const createCard = (data) => {
    let section = document.createElement("section");
    let img = document.createElement("img");
    let cardBody = document.createElement("div");
    section.classList.add("card");
    cardBody.classList.add("card-body")
    img.setAttribute('src', `data:image/jpg;base64,${data.image}`);
    let cardName = document.createElement("h5");
    cardName.classList.add("card-body__name")
    cardName.innerHTML = `${data.name}`;
    let short = document.createElement("p");
    short.classList.add("card-body__short_text")
    short.innerHTML = `${data.shortDescription}`
    let long = document.createElement("p");
    long.classList.add("card-body__long_text")
    long.innerText = `${data.description}`

    cardBody.append(cardName, short)
    body.appendChild(section)
    section.append(img, cardBody)

}


export {setData, setDataById};