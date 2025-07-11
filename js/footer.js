

/*START THEMES*/
const themesList = ["Spacelab", "United", "Slate", "Cerulean", "Darkly", "Litera", "Materia", "Sandstone", "Superhero", "Cosmo", "Flatly", "Lumen", "Minty", "Simplex", "Solar", "Cyborg", "Journal", "Lux", "Pulse", "Sketchy", "Yeti", "Morph", "Quartz", "Vapor", "Zephyr"];
let chosenTheme;
let tempTheme = config[activeRestaurant].theme;
let url = window.location;
let themeVal = {};
let themeOptions = "<option value='default'>Select Theme</option>";
let gaParam = "";
if (url.toString().indexOf("exclude") !== -1) {
    gaParam = "exclude=true&";
}


for (let i = 0; i < themesList.length; i++) {
    themeOptions = themeOptions + "<option value='" + themesList[i].toLocaleLowerCase() + "'>Theme: <span class='capitalize'>" + themesList[i] + "</span></option>";
}
document.getElementById("themes").innerHTML = themeOptions;

function changeTheme() {

    let gaParam = "";
    /* if (url.toString().indexOf("exclude") !== -1) {
         gaParam = "exclude=true";
     }*/
    let whichTheme = document.getElementById("themes").value;
    if (whichTheme === "default") {
        return false;
    } else {
        // document.getElementById("themedStyle").setAttribute("href", "https://bootswatch.com/5/" + whichTheme + "/bootstrap.css");
        let chosenTheme = whichTheme.replace("https://bootswatch.com/5/", "").replace("/bootstrap.css");
        config[activeRestaurant].theme = chosenTheme;
        document.querySelector("#themedStyle").setAttribute("href", "https://bootswatch.com/5/" + config[activeRestaurant].theme + "/bootstrap.css")

        localStorage.setItem("theme", chosenTheme);

        //setGameLinks(chosenTheme);
        // window.location = "?" + gaParam + "&theme=" + chosenTheme + "&";
    }

}
/*SPLIT PARAMS*/
(url + "?")
    .split("?")[1]
    .split("&")
    .forEach(function (pair) {
        pair = (pair + "=").split("=").map(decodeURIComponent);
        if (pair[0].length) {
            themeVal[pair[0]] = pair[1];
            if (pair[0] === "theme") {

                const themeFromUrl = "https://bootswatch.com/5/" + pair[1] + "/bootstrap.css";

                document.getElementById("themedStyle").setAttribute("href", themeFromUrl);
                localStorage.setItem("theme", pair[1]);
            }
            /*   if (pair[0] === "balance") {
                 localStorage.setItem("balance", pair[1].replace("#", ""));
 
             }*/
        }
    });

if (localStorage.getItem("theme")) {

    let needAddress = "https://bootswatch.com/5/";
    if (localStorage.getItem("theme").indexOf("boot") !== -1) {
        needAddress = "";
    }
    //  setGameLinks(localStorage.getItem("theme"));

    if (tempTheme.indexOf("bootstrap.css") !== -1) {
        tempTheme = tempTheme.replace("/bootstrap.css", "");
    }

    document.getElementById("themedStyle").setAttribute("href", needAddress + tempTheme + "/bootstrap.css");
} else {
    // setGameLinks("spacelab");
    localStorage.setItem("theme", config[activeRestaurant].theme);
}
document.querySelector("#themes option:first-child").innerHTML = "Selected theme: " + tempTheme;
//END THEMES



/*START NAVIGATING ANIMATION*/
function tadaRollover(element) {

    document
        .querySelector("[data-tada='" + element + "']")
        .classList.add("tada");
}
function tadaRollout(element) {
    document
        .querySelector("[data-tada='" + element + "']")
        .classList.remove("tada");
}


//START SOCIAL MEDIA
/*const config[activeRestaurant].socialMedia = [
    { link: "https://www.linkedin.com/in/aaronrs2002", theClass: "fab fa-linkedin", title: "My Linkedin Profile" },
    { link: "https://github.com/aaronrs2002", theClass: "fab fa-github", title: "My Open Source Library" },
    { link: "https://www.youtube.com/@web-presence-developer", theClass: "fab fa-youtube", title: "Learn how to write web applications!" },
    { link: "https://www.instagram.com/aaronrs2002/", theClass: "fab fa-instagram", title: "Payoff from a multimedia degree." },
    { link: "https://aaronrs2002.github.io/task-master/?", theClass: "fas fa-network-wired", title: "Networked serverless web apps for Workflow Management and Accounting" },
    { link: "    https://aaronrs2002.github.io/rss-aggregator/?", theClass: "fas fa-rss-square", title: "Free News Aggregator. Grab any public RSS feed and display it here without advertising and without your boss tracking you." },

    //{ link: "mailto:aaron@web-presence.biz", theClass: "far fa-paper-plane" }
    //    { title: "ticket management and accounting software by: Aaron Smith ", target: "_blank", url: "https://aaronrs2002.github.io/task-master/", iconClass: "fas fa-network-wired" },
];*/

let socialHTML = "";
for (let i = 0; i < config[activeRestaurant].socialMedia.length; i++) {
    socialHTML = socialHTML + `<a class="p-2 text-primary"  href="${config[activeRestaurant].socialMedia[i].link + (config[activeRestaurant].socialMedia[i].link.indexOf("?") !== -1 ? gaParam : "")
        }" target="_blank" title="${config[activeRestaurant].socialMedia[i].title}" ><i class="${config[activeRestaurant].socialMedia[i].theClass
        } animated"  onmouseover="javascript:tadaRollover('${config[activeRestaurant].socialMedia[i].theClass
        }')" onmouseout="javascript:tadaRollout('${config[activeRestaurant].socialMedia[i].theClass
        }')" data-tada="${config[activeRestaurant].socialMedia[i].theClass
        }"></i></a>`;
}
document.querySelector("#socialList").innerHTML = socialHTML;

//START GLOBAL ALERT
function globalAlert(alertLevel, message) {

    document.getElementById("globalAlert").classList.remove("hide");
    document.getElementById("globalAlert").classList.add(alertLevel);
    document.getElementById("globalAlert").classList.add("animated");
    document.getElementById("globalAlert").innerHTML = message;

    setTimeout(function () {
        document.getElementById("globalAlert").classList.add("hide");
        document.getElementById("globalAlert").classList.remove(alertLevel);
    }, 5000);

}

/*START GLOBAL TOGGLE FUNCTION*/

function toggle(element) {
    [].forEach.call(document.querySelectorAll("[data-toggle]"), function (e) {
        e.classList.add("hide");
    });

    [].forEach.call(document.querySelectorAll("[data-toggle='" + element + "']"), function (e) {
        e.classList.remove("hide");
    });
}