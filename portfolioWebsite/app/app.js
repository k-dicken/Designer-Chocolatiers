//CHOCOLATE SECTION JS
let chocolatesJSON = {
    "1": {
        "ID": 1,
        "Name": "Caramel Nut Blanc",
        "Desc": "A chewy caramel with a crispy hazelnut crunch.",
        "Calories": 10,  
        "Allergies": "Nuts"  
    },

    "2": {
        "ID": 2,
        "Name": "Cappuccino",
        "Desc": "A rich coffee caramel.",
        "Calories": 8,  
        "Allergies": "No Allergens"
    },

    "3": {
        "ID": 3,
        "Name": "Fresh Coconut",
        "Desc": "Fresh coconut suspended in dark chocolate.",
        "Calories": 11,  
        "Allergies": "No Allergens"
    }

}

//track size of chocolate json
let chocolateSize = Object.keys(chocolatesJSON).length;

//track the current chocolate id
let chocolateDisplayCount = 1;

//change the chocolate information
function displayChocolate() {
    //grab the elements
    let titlep = document.querySelector(".chocolates-info-title");
    let descp = document.querySelector(".chocolates-info-desc");
    let caloriesp = document.querySelector(".chocolates-info-calories");
    let allergiesp = document.querySelector(".chocolates-info-allergies");
    let chocolateimg = document.querySelector(".selection-image-chocolate");

    //set elements to json content based on count
    titlep.innerHTML = chocolatesJSON[chocolateDisplayCount].Name;
    descp.innerHTML = chocolatesJSON[chocolateDisplayCount].Desc;
    caloriesp.innerHTML = chocolatesJSON[chocolateDisplayCount].Calories + " kcal/per";
    allergiesp.innerHTML = "Contains " + chocolatesJSON[chocolateDisplayCount].Allergies;
    chocolateimg.src = "www/img/chocolates/chocolate-" + chocolateDisplayCount + ".png";


}

//run display when right arrow is clicked
function chocolateIncrease() {
    chocolateDisplayCount = chocolateDisplayCount + 1;

    if (chocolateDisplayCount > chocolateSize) {
        chocolateDisplayCount = 1;
    }

    displayChocolate();
}

//run display when left arrow is clicked
function chocolateDecrease() {
    if (chocolateDisplayCount == 1) {
        chocolateDisplayCount = chocolateSize;

    } else {
        chocolateDisplayCount = chocolateDisplayCount - 1;
    }

    displayChocolate();
}



// CAROUSEL SECTION JS
let carouselJSON = {
    "1": {
        "ID": 1,
        "Desc": "Duis ut diam quam nulla porttitor massa id neque. Purus sit amet luctus venenatis lectus. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Id consectetur purus ut faucibus pulvinar. Nisl suscipit adipiscing bibendum est ultricies integer quis.", 
    },
    "2": {
        "ID": 2,
        "Desc": "Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Viverra adipiscing at in tellus integer. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Id consectetur purus ut faucibus pulvinar.", 
    },
}    


//track size of chocolate json
let carouselSize = Object.keys(carouselJSON).length;

//track the current chocolate id
let carouselDisplayCount = 1;

//change the chocolate information
function displayCarousel() {
    //grab the elements
    let carouselimg = document.querySelector("#carousel");
    let carouselDesc = document.querySelector(".carousel-content-desc");

    //set elements to json content based on count
    carouselimg.style.backgroundImage = "url(www/img/carousel/carousel-" + carouselDisplayCount + ".jpg)";
    carouselDesc.innerHTML = carouselJSON[carouselDisplayCount].Desc;
}

//run display when right arrow is clicked
function carouselIncrease() {
    carouselDisplayCount = carouselDisplayCount + 1;

    if (carouselDisplayCount > carouselSize) {
        carouselDisplayCount = 1;
    }

    displayCarousel();
}

//run display when left arrow is clicked
function carouselDecrease() {
    if (carouselDisplayCount == 1) {
        carouselDisplayCount = carouselSize;

    } else {
        carouselDisplayCount = carouselDisplayCount - 1;
    }

    displayCarousel();
}