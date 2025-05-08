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
    navHTML = navHTML + "<li class='nav-item'><a href='#' data-id='" + i + "' class='nav-link' onClick='linkSelected(" + i + ")'>" + config[0].navLinks[i] + "</a></li>";
}

document.querySelector("ul.nav").innerHTML = navHTML;

function linkSelected(whichLink) {
    [].forEach.call(document.querySelectorAll(".nav-link[data-id]"), (e) => {
        e.classList.remove("active");
    });

    [].forEach.call(document.querySelectorAll("section[data-section]"), (e) => {
        e.classList.add("hide");
    });

    console.log("config[0].navLinks[whichLink] " + config[0].navLinks[whichLink]);
    document.querySelector("section[data-section='" + config[0].navLinks[whichLink] + "']").classList.remove("hide");



    document.querySelector(".nav-link[data-id='" + whichLink + "']").classList.add("active");
    document.querySelector("title").innerHTML = config[0].navLinks[whichLink];



}

