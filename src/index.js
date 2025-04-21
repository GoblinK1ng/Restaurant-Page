console.log("THis exists");

import { createHomepage } from "./home-page";
import "./style.css";

const homeButton = document.getElementById("Home");
homeButton.addEventListener("click", ()=>{
    createHomepage();
});
