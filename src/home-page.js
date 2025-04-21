export function createHomepage(){
    const content = document.getElementById("content");
    const main = document.createElement("div");
    main.id = "main-container";
    

    const homeHeaderNames = {
        About: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore voluptatem aut officiis saepe nesciunt, corporis non eum quo optio tenetur esse sapiente modi laboriosam facere deserunt ducimus reprehenderit deleniti quos!",
        Hours: "",
        Location: "This place"
    };

    const title = document.createElement("div");
    title.textContent = "Waffles Waffles to Go";
    title.id = "Title";
    title.classList = "home-header";
    main.appendChild(title);

    for (const key in homeHeaderNames){
        const header = document.createElement("div");
        header.id = key;
        header.classList = "home-header";

        const headerTitle = document.createElement("h2");
        const headerAbout = document.createElement("p");

        headerTitle.textContent = key;
        headerAbout.textContent = homeHeaderNames[key];

        header.appendChild(headerTitle);
        header.appendChild(headerAbout);

        main.appendChild(header);
    };

    

    content.appendChild(main);

    

    const about = document.getElementById("About");
    


    const hours = document.getElementById("Hours");
    

    const location = document.getElementById("Location");
    
};