"use strict";

const body = document.querySelector('body');

fetch('https://62136dc9f43692c9c6044e65.mockapi.io/users')
    .then(data => data.json())
    .then(result => result.forEach(v => {

        {
            const userData = {
                name: v.name,
                id: v.id,
                imgURL: `${v.avatar}`
            }

            myFunc(userData.imgURL, userData.id, userData.name)
        }
    }))



function myFunc(url, id, name) {

    body.insertAdjacentHTML('beforeend', `
    <div class="user">
    <div class="image">
    <img src="${url}" alt=${name} class="user_image">
    </div>
    <div class = "content">
    <h2>USER-${id}</h2>
    <p class='id_no'><strong>Id</strong>\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0${id}</p>
    <p><strong>Name </strong>:\xa0\xa0${name}</p>
    </div>
    </div>`);

}