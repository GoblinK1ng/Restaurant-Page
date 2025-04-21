export function createHomepage(){
    const content = document.getElementById("content");
    const main = document.createElement("div");
    main.id = "main-container";
    

    var homeHeaderNames = ["Title","About", "Hours","Location"];
    
    homeHeaderNames.forEach(name =>{
        const header = document.createElement("div");
        header.id = name;
        main.appendChild(header);
    });

    content.appendChild(main);
};