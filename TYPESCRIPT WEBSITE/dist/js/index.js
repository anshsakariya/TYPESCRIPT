"use strict";
const getusername = document.querySelector('#user');
const formsubmit = document.querySelector("#form");
const main_container = document.querySelector(".main_container");
//function call on page load
async function myCustomFetcher(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(` network response was not ok - status: ${response.status} `);
    }
    const data = await response.json();
    console.log(data);
    return data;
}
const showResultUI = (singleUser) => {
    const { avatar_url, login, url } = singleUser;
    main_container.insertAdjacentHTML("beforeend", `<div class = 'card'>
    <img src=${avatar_url} alt=${login}/>
    <hr/>
    <div class = "card-footer">
    <img src=${avatar_url} alt=${login}/>
    <a href= "${url}">github</a>
    </div>
    <div>
    `);
};
function fetchUserData(url) {
    myCustomFetcher(url, {}).then((userInfo) => {
        for (const singleUser of userInfo) {
            showResultUI(singleUser);
            console.log("login" + singleUser.login);
        }
    });
}
//default fun call
fetchUserData("https://api.github.com/users");
//let perform search fun
formsubmit.addEventListener("submit", async (e) => {
    e.preventDefault();
    const searchTerm = getusername.value.toLowerCase();
    try {
        const url = "https://api.github.com/users";
        const allUserData = await myCustomFetcher(url, {});
        const matchingUsers = allUserData.filter((user) => {
            return user.login.toLowerCase().includes(searchTerm);
        });
        //we need to clear the previous data
        main_container.innerHTML = "";
        if (matchingUsers.length === 0) {
            main_container?.insertAdjacentHTML("beforeend", `<p class="empty-msg">no matching user founding</p>`);
        }
        else {
            for (const singleUser of matchingUsers) {
                showResultUI(singleUser);
            }
        }
    }
    catch (error) {
        console.log(error);
    }
});