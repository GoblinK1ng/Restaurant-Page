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

    const about = document.getElementById("About");
    const aboutTitle = document.createElement("h2");
    const aboutWords = document.createElement("p");
    aboutTitle.textContent = "About Us";
    aboutWords.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore voluptatem aut officiis saepe nesciunt, corporis non eum quo optio tenetur esse sapiente modi laboriosam facere deserunt ducimus reprehenderit deleniti quos!";
    about.appendChild(aboutTitle);
    about.appendChild(aboutWords);


    const hours = document.getElementById("Hours");
    hours.textContent = "Waffles Waffles to Go";

    const location = document.getElementById("Location");
    location.textContent = "Waffles Waffles to Go";
};