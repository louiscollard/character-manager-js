let body = document.querySelector(".grid-container")
const setData = (data) => {
    for (let datas of data) {
        createCard(datas)
    }
}


const setDataById = (data) => {

}

const createCard = (data) => {
    let section = document.createElement("section")
    let img = document.createElement("img")
    let cardBody = document.createElement("div")
    section.classList.add("card")
    body.appendChild(section)
    section.innerHTML = `${data.name}
    `
    img.
}


export {setData, setDataById};