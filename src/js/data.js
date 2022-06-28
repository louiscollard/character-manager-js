let body = document.querySelector("body")
const setData = (data) => {
    for (let datas of data){
     let text = document.createElement("p");
     let img = document.createElement("img")
     text.innerText = `${datas.name}`;
     text.innerHTML += `<br> ${datas.description}`;
     text.innerHTML += `<br><br> ${datas.shortDescription}`;
     img.setAttribute('src', `data:image/jpg;base64,${datas.image}`)
     body.appendChild(text)
     body.appendChild(img)
    }
}


const setDataById = (data) => {
    let text = document.createElement("p");
    let img = document.createElement("img")
    text.innerText = `${data.name}`;
    text.innerHTML += `<br> ${data.description}`;
    text.innerHTML += `<br><br> ${data.shortDescription}`;
    img.setAttribute('src', `data:image/jpg;base64,${data.image}`)
    body.appendChild(text)
    body.appendChild(img)
}


export {setData, setDataById};