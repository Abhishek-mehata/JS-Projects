let body = document.getElementById('body');
let themeButton = document.getElementById('theme-button');
let themeIcon = document.getElementById("theme-icon");
let taskButton = document.getElementById("task-button");
let deleteButton = document.getElementById("del-btn");
let deleteBtnIcon = document.getElementsByClassName("delete-button-image");

let inputField = document.getElementById("todo-input");

// console.log(inputField.innerText);

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        //for dark mode
        themeIcon.src = "./assets/lightMode.svg";
        taskButton.classList.add("white");
        // deleteBtnIcon.src = "./assets/trashWhite.svg";
        Array.from(deleteBtnIcon).forEach(icon => {
            icon.src = "./assets/trashWhite.svg";
        });
    } else {
        // for light mode
        themeIcon.src = "./assets/darkMode.svg"
        taskButton.classList.remove("white");
        // deleteBtnIcon.src = "./assets/trashDark.svg";
        Array.from(deleteBtnIcon).forEach(icon => {
            icon.src = "./assets/trashDark.svg";
        });
    }
});

taskButton.addEventListener('click', (e) => {
    e.preventDefault();
    let taskText = inputField.value.trim();
    // console.log(taskText);
    if (taskText == "") return;

    const LI = document.createElement("li"); // <li></li>
    LI.className = "task-item";// <li class="task-item"></li>

    const SPAN = document.createElement("span");// <span></span>
    SPAN.className = "task-text";// <span class="task-text"></span>
    SPAN.innerText = taskText;

    const DELETE_BUTTON = document.createElement("button");// <button></button>
    DELETE_BUTTON.className = "delete-btn del-btn";// <button class="delete-btn del-btn"></button>

    const DELETE_BUTTON_IMAGE = document.createElement("img");// <img></img>
    DELETE_BUTTON_IMAGE.className = "delete-button-image";// <img class="delete-button-image"></img>
    DELETE_BUTTON_IMAGE.src = document.body.classList.contains('dark-theme') ? "./assets/trashWhite.svg" : "./assets/trashDark.svg"; // <img class="delete-button-image" src="./assets/trashDark.svg"></img>
    DELETE_BUTTON_IMAGE.alt = "Delete Task";


    // to delete the task when the delete button is clicked
    DELETE_BUTTON.addEventListener("click", () => {
        LI.remove();
    });

    DELETE_BUTTON.appendChild(DELETE_BUTTON_IMAGE);
    // <button class="delete-btn del-btn">
    //       <img class="delete-button-image" src="./assets/trashDark.svg">
    // </button>

    LI.appendChild(SPAN);
    // <li class="task-item">
    //       <span class="task-text">Task Text</span>
    // </li>
    LI.appendChild(DELETE_BUTTON);
    // <li class="task-item">
    //       <span class="task-text">Task Text</span>
    //       <button class="delete-btn del-btn">
    //             <img class="delete-button-image" src="./assets/trashDark.svg">
    //       </button>
    // </li>

    document.querySelector("ul").appendChild(LI);
    inputField.value = "" // Clear the input field

});


inputField.addEventListener("keydown",(e)=>{
    console.log(e.key==="Enter")
    if(e.key==="Enter"){
        taskButton.click();
    }
})