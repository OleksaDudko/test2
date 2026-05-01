const inputEl = document.querySelector("#bookmarkInput");
const btnEl = document.querySelector("#addBookmarkBtn");
const listEl = document.querySelector("#bookmarkList");


const STORAGE_KEY = "inputValue";


const bookArrey = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
createBookItems(bookArrey);

btnEl.addEventListener("click", () => {
    const value = inputEl.value;
    bookArrey.push(value);
    savedData();
    inputEl.value = "";
    createBookItems(bookArrey);
})


function createBookItems(arr) {
    const item = arr.map((elem, index) => {
        return `<li id="${index}">
                    <a href="#">${elem}</a>
                    <div>
                    <button type="button">Видалити</button>
                    <button type="button">Редагувати</button>
                    </div>
                </li>`;
    }).join("");
    listEl.innerHTML = item;
}


listEl.addEventListener("click", (event) => {
    if (event.target.nodeName !== "BUTTON") {
        return
    }
    // const li = event.target.parentNode;
    const li = event.target.closest("li")
    const id = li.id;
    bookArrey.splice(id, 1);
    savedData();
    createBookItems(bookArrey);
})


function savedData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookArrey));
}

// ==========================================================

const nameEl = document.querySelector("#username");
const passwordEl = document.querySelector("#password");
const saveEl = document.querySelector("#saveBtn");

saveEl.addEventListener("click", (event) => {
    const localName = localStorage.setItem("login", nameEl.value);
    const localPassword = localStorage.setItem("password", passwordEl.value);
    console.log(localName, localPassword);
})

const savedLogin = localStorage.getItem("login");
const savedPassword = localStorage.getItem("password");

nameEl.value = savedLogin;
passwordEl.value = savedPassword