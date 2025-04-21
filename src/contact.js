export function createContact(){
    const content = document.getElementById("content");
    content.innerHTML = "";
    const main = document.createElement("div");
    main.id = "main-container";
    

    const contacts = [
        {name: "Bingus", 
        phone: "123 456 5719", 
        location: "some place dr, New York"},
        {name: "Dingus",
        phone: "987 654 3210",
        location: "Another place Rd, York new"
        }
    ];

    

    for (const key in contacts){
        const currentContact = contacts[key];

        const header = document.createElement("div");
        

        header.id = currentContact.name;
        header.classList = "contact header";

        const headerTitle = document.createElement("h2");
        const headerPhone = document.createElement("p");
        const headerLocation = document.createElement("p");
        

        headerTitle.textContent = currentContact.name;
        headerPhone.textContent = currentContact.phone;
        headerLocation.textContent =currentContact.location;

        header.appendChild(headerTitle);
        header.appendChild(headerPhone);
        header.appendChild(headerLocation);

        main.appendChild(header);
    };

    

    content.appendChild(main);

    

    const about = document.getElementById("About");
    


    const hours = document.getElementById("Hours");
    

    const location = document.getElementById("Location");
    
};