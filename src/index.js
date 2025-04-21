console.log("THis exists");

import { createHomepage } from "./home-page";
import { createContact } from "./contact";
import { createMenu } from "./menu";
import "./style.css";

const homeButton = document.getElementById("Home");
homeButton.addEventListener("click", ()=>{
    createHomepage();
});

const contactButton = document.getElementById("Contact");
contactButton.addEventListener("click", ()=>{
    createContact();
});

const menuButton = document.getElementById("Menu");
menuButton.addEventListener("click", ()=>{
    createMenu();
});
