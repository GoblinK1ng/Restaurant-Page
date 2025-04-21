export function createHomepage(){
    const content = document.getElementById("content");
    const main = document.createElement("div");
    main.id = "main-container";
    

    var homeHeaderNames = ["Title","About", "Hours","Location"];

    homeHeaderNames.forEach(name =>{
        const header = document.createElement("div");
        header.id = name;
        header.classList = "home-header";
        main.appendChild(header);
    });

    

    content.appendChild(main);

    const title = document.getElementById("Title");
    title.textContent = "Waffles Waffles to Go";

    const abouts = document.getElementById("About");
    abouts.textContent = "Waffles Waffles to Go";

    const hours = document.getElementById("Hours");
    hours.textContent = "Waffles Waffles to Go";

    const location = document.getElementById("Location");
    location.textContent = "Waffles Waffles to Go";
};