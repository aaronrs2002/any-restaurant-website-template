/*
let config = [{
    apiAddress: "restaurantData.json",
    navLinks: ["home", "about", "menu", "contact"],
    banners: [{ img: "img/banner.jpg", bannerHTML: "<h3>Welcome, We have food!</h3>" }, { img: "img/banner2.jpg", bannerHTML: "<h3>We Eat food!</h3>" }, { img: "img/banner3.jpg", bannerHTML: "<h3>Clean Your Plate here!!</h3>" },],
    about: "We make the best food. Here is our story of three generations.",
    media: [{ type: "img", address: "https://imageurl.com" }, { type: "ytVideo", address: "MrsOwvHgW48" }, { type: "html", address: "anyHTML here" }, { type: "map", address: "1060 W. Addison Chicago, IL" }],
    events: [],
    blogAddress: "https://blogspot.com",
    address: "1060 W. Addison Ave. Chicago Il",
    phone: "555-222-3434",
    email: "info@eat.com"

}]

*/

let navHTML = "";
for (let i = 0; i < config[0].navLinks.length; i++) {
    let active = "";
    if (i === 0) {
        active = "active";
    }
    navHTML = navHTML + "<li class='nav-item'><a href='#' data-id='" + i + "' class='nav-link " + active + "' onClick='linkSelected(" + i + ")'>" + config[0].navLinks[i] + "</a></li>";
}

document.querySelector("ul.nav").innerHTML = navHTML;

function linkSelected(whichLink) {
    [].forEach.call(document.querySelectorAll(".nav-link[data-id]"), (e) => {
        e.classList.remove("active");
    });

    [].forEach.call(document.querySelectorAll("section[data-section]"), (e) => {
        e.classList.add("hide");
    });

    console.log("whichLink " + whichLink);
    document.querySelector("section[data-section='" + whichLink + "']").classList.remove("hide");



    document.querySelector(".nav-link[data-id='" + whichLink + "']").classList.add("active");
    document.querySelector("title").innerHTML = config[0].navLinks[whichLink];



}

async function getMenu(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`error: ${response.status}`);
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.log("Error: " + error);
        throw error;
    }
}

let menu;
let categories = [];
let categoryList = [];

async function start() {
    const urlStart = config[0].apiAddress;

    try {
        const menu = await getMenu(urlStart);


        let categoriesHTML = "";
        for (let i = 0; i < menu.length; i++) {
            categories.push({ category: menu[i].category, items: [] });
            if (categoryList.indexOf(menu[i].category) === -1) {
                categoriesHTML = categoriesHTML + `<button class='list-group-item list-group-item-action' onClick='selectCategory("${menu[i].category}")'>${menu[i].category}</button>`;
                categoryList.push(menu[i].category);
            }


        }

        for (let i = 0; i < menu.length; i++) {

            for (let j = 0; j < categories.length; j++) {
                if (categories[j].category === menu[i].category) {
                    categories[j].items = [...categories[j].items, menu[i]]
                }
            }
            // categories[categoryList.indexOf(menu[i].category)].items = [...categories[categoryList.indexOf(menu[i].category)].items, menu[i]]



        }


        document.getElementById("categories").innerHTML = categoriesHTML;
        //    console.log("categories: " + JSON.stringify(categories));
    } catch (error) {
        console.log("Error: " + error);
    }
}
start()


function selectCategory(selected) {

    console.log("selected: " + selected)


    let itemsHTML = "<h3>" + selected + "</h3>";

    let tempList = [];
    for (let i = 0; i < categories.length; i++) {

        if (categories[i].category === selected) {




            for (j = 0; j < categories[i].items.length; j++) {

                if (tempList.indexOf(categories[i].items[j].title) === -1) {



                    let tempIngredients = "";
                    for (let h = 0; h < categories[i].items[j].ingredients.length; h++) {
                        tempIngredients = tempIngredients + "<li class='list-group-item'>" + categories[i].items[j].ingredients[h] + "</li>";
                    }


                    itemsHTML = itemsHTML + "<div class='card'><div class='card-title' ><h3>" + categories[i].items[j].title + "</h3></div><div class='card-body'><p>" +
                        categories[i].items[j].message + "</p><ul  class='list-group'>" + tempIngredients + "</ul></div></div >";

                    tempList.push(categories[i].items[j].title);
                    console.log("tempList: " + tempList);
                }

            }


        }

    }
    console.log("itemsHTML: " + itemsHTML);
    document.getElementById("itemsTarget").innerHTML = itemsHTML;




}


/*
    {
        "_id": {
            "$oid": "5f6a26511378005dc6589207"
        },
        "ingredients": [
            "2/3 C Sugar",
            "1 1/2 T Yeast",
            "1 1/2 t Salt",
            "1/4 C Melted Butter",
            "6 C Flour",
            "2 C Warm Water"
        ],
        "imgs": [
            "https://i.pinimg.com/originals/ee/f6/e4/eef6e416cd8d63b814312e03e5181f34.jpg",
            "https://www.manusmenu.com/wp-content/uploads/2018/08/White-Sandwich-Bread-4-1-of-1.jpg"
        ],
        "youTubeId": [
            "R1iclVhiyMI"
        ],
        "comments": [
            {
                "_id": {
                    "$oid": "5d927ba8c6e42c1776e7fecc"
                },
                "comment": "One of my favorites!",
                "imageUrl": "https://lh3.googleusercontent.com/a-/AAuE7mALfk8-iWIzDDbYJ6TWunDMzyYV7TFcfhMxklMl9Fo=s96-c",
                "commenterEmail": "aaron@web-presence.biz",
                "commenterId": "106996680788438752656",
                "commentTimeStamp": "1569881000668"
            },
            {
                "_id": {
                    "$oid": "5ef528a1ccb0510017355c06"
                },
                "comment": "not the best.",
                "imageUrl": "https://lh3.googleusercontent.com/a-/AOh14GgwqaZzuSj2tpxoDEek_Qj15t5igOF7ZRKown8usA=s96-c",
                "commenterEmail": "aaronrs2002@gmail.com",
                "commenterId": "101380000475593513417",
                "commentTimeStamp": "1593125024313"
            }
        ],
        "message": "<ol><li>Add Sugar &amp; Yeast into warm water, stir and let it sit for 5 minutes.</li><li>Put into mixing bowl and add butter and salt</li><li>Add 1 cup of flour at a time</li><li>Sprinkle flour onto a flat surface and put bread mixture onto it</li><li>Sprinkle four on top of bread mixture and knead with a spatula until it is not sticky to touch</li><li>Knead with hands until smooth and elastic</li><li>Butter a bowl and put bread mixture in and turn it over so that it is coated on all sides</li><li>Cover bowl with a damp towel and put in a warm place for an hour until doubled in size</li><li>Deflate and put on floured surface</li><li>Cut in half &amp; roll each half until about 1/4 inch thick</li><li>Roll and pinch the ends then fold the ends under</li><li>Place in buttered Bread Pan</li><li>Cover with damp towel for 20 minutes</li><li>Put in oven at 350 for 30 minutes</li></ol>",
        "id": {
            "$numberInt": "8"
        },
        "category": "bread",
        "title": "White Sandwich Bread",
        "googleId": "101380000475593513417",
        "imageUrl": "https://lh3.googleusercontent.com/a-/AAuE7mCV_954eRVLrXskSTsIilkBV1T5zzoIxJXubbO6kA=s96-c",
        "email": "aaronrs2002@gmail.com",
        "user": "Aaron Smith"
    },

*/