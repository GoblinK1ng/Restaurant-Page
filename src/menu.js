export function createMenu(){
    const content = document.getElementById("content");
    content.innerHTML = "";
    const main = document.createElement("div");
    main.id = "main-container";
    

    const menuItems = [];

    class MenuItem{
        constructor(name, category, description, calories, cost){
            this.category = category;
            this.name = name;
            this.description = description;
            this.calories = calories;
            this.cost = cost;
        }
    }

    function addMenuItem(name, category, description, calories, cost){
        menuItems.push(new MenuItem(name, category, description, calories, cost));
    }

    addMenuItem("1st Item", "Chungus", "this thing", "2100 Calories", 5.99);
    addMenuItem("2st Item", "Thungus", "this thing", "2100 Calories", 5.99);
    addMenuItem("3st Item", "Thungus", "this thing", "2100 Calories", 5.99);
    addMenuItem("4st Item", "Chungus", "this thing", "2100 Calories", 5.99);
    

    const title = document.createElement("div");
    title.textContent = "Menu";
    title.id = "Title";
    title.classList = "title header";
    main.appendChild(title);

     

    for (const key in menuItems){
        
        const currentItem = menuItems[key];
        let category = null;
        for ( let item of main.children){
            
            
            if (item.id === currentItem.category){
                
                category = item;
                break;
            }
        }
        
        

        if (category === null) {
            
            category = document.createElement("div");
            const categoryTitle = document.createElement("h2");
            categoryTitle.id = "category-title";
            categoryTitle.textContent = currentItem.category;
            category.appendChild(categoryTitle);
            
            category.classList = "category";
            category.id = currentItem.category;
            main.appendChild(category);
        }

        const header = document.createElement("div");
        console.log(currentItem.name);
        header.id = currentItem.name;
        header.classList = "menu header";

        const headerName = document.createElement("h2");
        const headerPrice = document.createElement("p");
        const headerDescription = document.createElement("p");
        const headerCalories = document.createElement("p");

        headerName.textContent = currentItem.name;
        headerDescription.textContent = currentItem.description;
        headerPrice.textContent = currentItem.cost;
        console.log(currentItem.cost);
        headerCalories.textContent = currentItem.calories;
        

        header.appendChild(headerName);
        header.appendChild(headerPrice);
        header.appendChild(headerDescription);
        header.appendChild(headerCalories);

        category.appendChild(header);
    };

    

    content.appendChild(main);

    

    const about = document.getElementById("About");
    


    const hours = document.getElementById("Hours");
    

    const location = document.getElementById("Location");
    
};