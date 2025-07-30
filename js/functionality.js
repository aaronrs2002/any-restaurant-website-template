
let bgImg = config[activeRestaurant].banners[Math.floor(Math.random() * config[activeRestaurant].banners.length)].img;
console.group("bgImage: " + bgImg)

document.querySelector("body[data-restaurant]").style.backgroundImage = "url(" + config[activeRestaurant].banners[Math.floor(Math.random() * config[activeRestaurant].banners.length)].img + ")";
let contactMapAddress;
if (document.querySelector(".contactMap")) {
    contactMapAddress = document.querySelector(".contactMap").getAttribute("src");
    document.querySelector(".contactMap").src = "https://www.google.com/maps/embed/v1/place?key=" + config[activeRestaurant].googleID + "&q=" + config[activeRestaurant].address;
}

[].forEach.call(document.querySelectorAll(".aboutTarget"), (e) => {
    e.innerHTML = config[activeRestaurant].about;
});


[].forEach.call(document.querySelectorAll(".restaurantNameTarget"), (e) => {
    e.innerHTML = config[activeRestaurant].restaurantName;
});




[].forEach.call(document.querySelectorAll("[data-address]"), (e) => {
    e.innerHTML = "<a class='px-4' target='_blank' href='https://www.google.com/maps/place/" + encodeURIComponent(config[activeRestaurant].address) + "/'><i class='fas fa-home'></i> " + config[activeRestaurant].address + "</a>";
});
[].forEach.call(document.querySelectorAll("[data-phone]"), (e) => {
    e.innerHTML = " <a class='px-4'href='tel:" + config[activeRestaurant].phone + "'><i class='fas fa-phone'></i>  " + config[activeRestaurant].phone + "</a>";
});

[].forEach.call(document.querySelectorAll("[data-email]"), (e) => {
    e.innerHTML = "<a class='px-4' href='mailto:" + config[activeRestaurant].email + "' ><i class='fas fa-envelope' ></i> " + config[activeRestaurant].email + "</a>";
});

/* <i data-address>address</i> | <i data-phone>phone</i> | <i data-email>email</i>*/
let imageAddresses = [];
let ytVideos = [];
let HTMLcontent = [];
let mapAddressses = [];


for (let i = 0; i < config[activeRestaurant].media.length; i++) {
    if (config[activeRestaurant].media[i].type === "img") {
        imageAddresses = [...imageAddresses, config[activeRestaurant].media[i].address];
    }
    if (config[activeRestaurant].media[i].type === "ytVideo") {
        ytVideos = [...ytVideos, config[activeRestaurant].media[i].address];
    }
    if (config[activeRestaurant].media[i].type === "html") {
        HTMLcontent = [...HTMLcontent, config[activeRestaurant].media[i].address];
    }

    if (config[activeRestaurant].media[i].type === "map") {
        mapAddressses = [...mapAddressses, config[activeRestaurant].media[i].address];
    }
}

console.log("imageAddresses: " + imageAddresses);
console.log("ytVideos: " + ytVideos);
console.log("HTMLcontent: " + HTMLcontent);
console.log("mapAddressses: " + mapAddressses);

let activePost = 0;
let blog = [];
/*[ {
     "title": "Basset Hounds play “King of the Mountain”",
     "link": "https://our-basset-hounds.blogspot.com/2023/11/basset-hounds-play-king-of-mountain.html",
     "description": "<iframe style=\"width: 100%; height: auto; min-height: 270px;\" src=\"https://www.youtube.com/embed/_3iR1IWDtxA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n",
     "pubDate": "Sun, 12 Nov 2023 11:26:00 ",
     "guid": "tag:blogger.com,1999:blog-4074357836862008169.post-7672672372116690557"
 },
 {
     "title": "Basset Hound, \"Georgia\" tossing food",
     "link": "https://our-basset-hounds.blogspot.com/2023/04/basset-hound-georgia-tossing-food.html",
     "description": "<iframe style=\"width: 100%; height: auto; min-height: 270px;\" src=\"https://www.youtube.com/embed/27jkVccrG5g\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n",
     "pubDate": "Sun, 16 Apr 2023 00:15:00 ",
     "guid": "tag:blogger.com,1999:blog-4074357836862008169.post-4858798668640902172"
 },
 {
     "title": "Basset Hound Tug of War",
     "link": "https://our-basset-hounds.blogspot.com/2023/04/basset-hound-tug-of-war.html",
     "description": "<iframe style=\"width: 100%; height: auto; min-height: 270px;\" src=\"https://www.youtube.com/embed/jqHqy8Nmx7w\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n\n",
     "pubDate": "Sun, 16 Apr 2023 00:14:00 ",
     "guid": "tag:blogger.com,1999:blog-4074357836862008169.post-7688780878438096746"
 },
 {
     "title": "Basset Hound \"Hank\" hates workouts",
     "link": "https://our-basset-hounds.blogspot.com/2023/04/basset-hound-hank-hates-workouts.html",
     "description": "<iframe style=\"width: 100%; height: auto; min-height: 270px;\" src=\"https://www.youtube.com/embed/lDi5NavStFY\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n\n\n",
     "pubDate": "Sun, 16 Apr 2023 00:12:00 ",
     "guid": "tag:blogger.com,1999:blog-4074357836862008169.post-768074741204875033"
 },
 {
     "title": "Basset Hounds first experience with Furbo",
     "link": "https://our-basset-hounds.blogspot.com/2022/08/basset-hounds-first-experience-with.html",
     "description": "<iframe style=\"width: 100%; height: auto; min-height: 270px;\" src=\"https://www.youtube.com/embed/wJbwcxsS6rA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n\n",
     "pubDate": "Fri, 05 Aug 2022 21:14:00 ",
     "guid": "tag:blogger.com,1999:blog-4074357836862008169.post-5138692019023658123"
 },
 {
     "title": "AZ Basset Rescue Halloween",
     "link": "https://our-basset-hounds.blogspot.com/2022/07/az-basset-rescue-halloween.html",
     "description": "<iframe style=\"width: 100%; height: auto; min-height: 270px;\" src=\"https://www.youtube.com/embed/iFon4-YC2RU\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n",
     "pubDate": "Fri, 22 Jul 2022 16:35:00 ",
     "guid": "tag:blogger.com,1999:blog-4074357836862008169.post-2995057506584223041"
 },
 {
     "title": "Hank Scratch Beat",
     "link": "https://our-basset-hounds.blogspot.com/2022/07/hank-scratch-beat.html",
     "description": "<iframe style=\"width: 100%; height: auto; min-height: 270px;\" src=\"https://www.youtube.com/embed/bvPvYHm2Nn8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n",
     "pubDate": "Fri, 22 Jul 2022 16:31:00 ",
     "guid": "tag:blogger.com,1999:blog-4074357836862008169.post-7164553994058621316"
 },
 {
     "title": "Depressed Basset Hound - Hank has had it",
     "link": "https://our-basset-hounds.blogspot.com/2022/07/depressed-basset-hound-hank-has-had-it.html",
     "description": "<iframe style=\"width: 100%; height: auto; min-height: 270px;\" src=\"https://www.youtube.com/embed/GUAkTiYxfyE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n",
     "pubDate": "Fri, 22 Jul 2022 16:27:00 ",
     "guid": "tag:blogger.com,1999:blog-4074357836862008169.post-6073485111669075627"
 },
 {
     "title": "Basset Hound Hank home from surgery",
     "link": "https://our-basset-hounds.blogspot.com/2022/07/basset-hound-hank-home-from-surgery.html",
     "description": "<iframe style=\"width: 100%; height: auto; min-height: 270px;\" src=\"https://www.youtube.com/embed/2XX_rXgBM2A\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n",
     "pubDate": "Fri, 22 Jul 2022 16:25:00 ",
     "guid": "tag:blogger.com,1999:blog-4074357836862008169.post-2930203338818846379"
 },
 {
     "title": "Hanks at the breaking point",
     "link": "https://our-basset-hounds.blogspot.com/2022/07/hanks-at-breaking-point.html",
     "description": "<iframe style=\"width: 100%; height: auto; min-height: 270px;\" src=\"https://www.youtube.com/embed/JJomGSuo5pQ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n",
     "pubDate": "Fri, 22 Jul 2022 16:23:00 ",
     "guid": "tag:blogger.com,1999:blog-4074357836862008169.post-7251857656279599118"
 },
 {
     "title": "Dialog with Hank",
     "link": "https://our-basset-hounds.blogspot.com/2022/07/dialog-with-hank.html",
     "description": "<iframe style=\"width: 100%; height: auto; min-height: 270px;\" src=\"https://www.youtube.com/embed/Moyjno7-XV0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n\n",
     "pubDate": "Fri, 22 Jul 2022 16:23:00 ",
     "guid": "tag:blogger.com,1999:blog-4074357836862008169.post-8271603122165270645"
 },
 {
     "title": "The Endless Game",
     "link": "https://our-basset-hounds.blogspot.com/2022/07/the-endless-game.html",
     "description": "<iframe style=\"width: 100%; height: auto; min-height: 270px;\" src=\"https://www.youtube.com/embed/gZj8NU1z_b0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n",
     "pubDate": "Fri, 22 Jul 2022 16:22:00 ",
     "guid": "tag:blogger.com,1999:blog-4074357836862008169.post-6145516228490208022"
 },
 {
     "title": "Hank is not in the mood",
     "link": "https://our-basset-hounds.blogspot.com/2021/12/hank-is-not-in-mood.html",
     "description": "<iframe style=\"width: 100%; height: auto; min-height: 270px;\" src=\"https://www.youtube.com/embed/yMqyIMeuwB8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n",
     "pubDate": "Thu, 02 Dec 2021 18:20:00 ",
     "guid": "tag:blogger.com,1999:blog-4074357836862008169.post-3715446215196537440"
 },
 {
     "title": "Puppy Hank",
     "link": "https://our-basset-hounds.blogspot.com/2021/02/puppy-hank.html",
     "description": "\n\n<div>\n  \n<div style=\"width:49%; display:inline-block; padding:2px; vertical-align: top;\">\n\n<iframe style=\"width:100%; height:auto; min-height:250px;\" src=\"https://www.youtube.com/embed/aIe7Cv4aUso\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>\n\n<div style=\"width:49%; display:inline-block; padding:2px; vertical-align: top;\">\n\n<p>I must say, it is sad to watch dogs grow up from a young age. \"The Hank\" I know now gets so bored wondering around the dog park. He used to run after the \"pack\".  He used to refuse to leave. </p><p>Then, I look at my wallet and remember, this is the same dog that ate all the cards in my wallet. I definitely do no miss everything about his puppy years.</p>\n</div>\n\n\n</div>\n",
     "pubDate": "Fri, 19 Feb 2021 22:08:00 ",
     "guid": "tag:blogger.com,1999:blog-4074357836862008169.post-320088164738989430"
 },
 {
     "title": "Typical Hank Entrance",
     "link": "https://our-basset-hounds.blogspot.com/2020/12/typical-hank-entrance.html",
     "description": "<div >\n\n<div style=\"width:49%; display:inline-block; padding:2px; vertical-align: top;\">\n\n<p>This is a typical entrance. No matter what occured on the other side of that door, Hank must escape it's \"clutches.\" One of the great things about having animals is watching the random things they do.</p>\n</div>\n\n<div style=\"width:49%; display:inline-block; padding:2px; vertical-align: top;\">\n\n\n  <iframe style=\"width:100%; height:auto; min-height:250px;\" src=\"https://www.youtube.com/embed/bkgrLyES3YE\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>\n\n</div>\n\n",
     "pubDate": "Fri, 04 Dec 2020 17:23:00 ",
     "guid": "tag:blogger.com,1999:blog-4074357836862008169.post-8312295858328898807"
 },
 {
     "title": "Playing hard",
     "link": "https://our-basset-hounds.blogspot.com/2020/07/playing-hard.html",
     "description": "<div >\n\n<div style=\"width:49%; display:inline-block; padding:2px; vertical-align: top;\">\n\n<p>The Basset Hound is a short-legged breed of dog in the hound family. The Basset is a scent hound that was originally bred for the purpose of hunting hare. Their sense of smell and ability to ground-scent is second only to the Bloodhound. Basset Hounds are one of six recognised \"basset\"-type breeds in France.</p>\n</div>\n\n<div style=\"width:49%; display:inline-block; padding:2px; vertical-align: top;\">\n\n\n  <iframe style=\"width:100%; height:auto; min-height:250px;\" src=\"https://www.youtube.com/embed/Gqz3UShmkTk\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  \n  \n</div>\n\n</div>",
     "pubDate": "Fri, 10 Jul 2020 23:39:00 ",
     "guid": "tag:blogger.com,1999:blog-4074357836862008169.post-7426140817304764976"
 },
 {
     "title": "Meet our \"Team\"",
     "link": "https://our-basset-hounds.blogspot.com/2020/07/blog-post.html",
     "description": "\n\n  \n  \n    <iframe style=\"width:100%; height:auto; min-height:250px;\" src=\"https://www.youtube.com/embed/m2UGHJl-FqU\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n<div >\n\n<div style=\"width:45%; display:inline-block; padding:2px; vertical-align: top;\">\n<h4>Hank</h4>\n<ul>\n<li>Sleeps 80% of the day</li>\n<li>Weighs 45lbs</li>\n<li>Random acts of Crazy!</li>\n</ul>\n</div>\n  <div style=\"width:45%; display:inline-block; padding:2px; vertical-align: top;\">\n<h4>Georgia</h4>\n<ul>\n<li>Demands Pets</li>\n<li>Outsmarts everyone</li>\n<li>Begs audibly for food</li>\n</ul>\n</div>\n\n\n",
     "pubDate": "Fri, 10 Jul 2020 23:27:00 ",
     "guid": "tag:blogger.com,1999:blog-4074357836862008169.post-7574324212831814230"
 }
];*/


let navHTML = "";
for (let i = 0; i < config[activeRestaurant].navLinks.length; i++) {
    let active = "";
    if (i === 0) {
        active = "active";
    }
    navHTML = navHTML + "<li class='nav-item'><a href='#' data-id='" + i + "' class='nav-link " + active + "' onClick='linkSelected(" + i + ")'>" + config[activeRestaurant].navLinks[i] + "</a></li>";
}

if (document.querySelector("#navLinkTarget")) {
    document.querySelector("#navLinkTarget").innerHTML = navHTML;
}


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
    document.querySelector("title").innerHTML = config[activeRestaurant].navLinks[whichLink];



}




function viewPosts(direction) {
    console.log("viePosts: drection: " + direction);

    if (config[activeRestaurant].blogAddress.length === 0) {
        document.getElementById("blogSection").classList.add("hide");
        return false;
    }
    /*   [].forEach.call(document.querySelectorAll(".post[data-num]"), function (e) {
         e.classList.add("hide");
       });
       if (document.querySelector(".fadeIn")) {
         [].forEach.call(document.querySelectorAll(".fadein"), function (e) {
           e.classList.remove("fadeIn");
         });
       }
   */
    const blogLength = blog.length;

    //let visibleCards = activePost / blogLength;
    if ((typeof direction) === "number") {
        activePost = direction;
    } else {

        if (direction === "Next") {
            activePost = activePost + 1;
            if (activePost >= blogLength) {
                activePost = 0;
            }

        } else {
            activePost = activePost - 1;
            if (activePost < 0) {
                activePost = blogLength - 1;
            }
        }
    }

    document.querySelector("[data-activepost]").innerHTML = (Number(activePost) + 1);
    document.querySelector("[data-blogmax").innerHTML = blogLength;

    document.getElementById("activeBlogTitle").innerHTML = blog[activePost].title;
    document.getElementById("activeBlogPubDate").innerHTML = blog[activePost].pubDate;
    document.getElementById("activeBlogDescription").innerHTML = blog[activePost].description;
    if (document.querySelector(".post[data-num='" + activePost + "']")) {
        document
            .querySelector(".post[data-num='" + activePost + "']")
            .classList.remove("hide");
        document
            .querySelector(".post[data-num='" + activePost + "']")
            .classList.add("fadeIn");
    }
}



/*
                                    <h1 id="activeBlogTitle">Active Blog Title</h1>
                                    <hr /><i id="activeBlogPubDate">pubDate</i>
                                    <div id="activeBlogDescription"></div>*/


async function getBlog(url) {
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
    const urlStart = config[activeRestaurant].apiAddress;
    let phpRelayAddress = "https://mechanized-aesthetics.net/php-relays/any-restaurant-blog-address.php?q=";

    if (config[activeRestaurant].blogAddress.length === 0) {
        document.getElementById("blogSection").classList.add("hide");

    } else {
        try {

            blog = await getBlog(phpRelayAddress + config[activeRestaurant].blogAddress);

            console.log("(typeof blog): " + (typeof blog));

            viewPosts(0);


        } catch (error) {
            console.log("Error: " + error)
        }
    }



    try {
        const menu = await getMenu(urlStart);


        let categoriesHTML = "";
        for (let i = 0; i < menu.length; i++) {
            categories.push({ category: menu[i].category, items: [] });
            if (categoryList.indexOf(menu[i].category) === -1) {
                // categoriesHTML = categoriesHTML + `<button class='list-group-item list-group-item-action' onClick='selectCategory("${menu[i].category}")'>${menu[i].category}</button>`;
                categoriesHTML = categoriesHTML + ` <a class="nav-link"  onClick='selectCategory("${menu[i].category}")' data-category='${menu[i].category}' href="#itemsTarget">${menu[i].category}</a>`
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

        try {
            if (categoryList[0]) {
                selectCategory(categoryList[0]);
            } else {
                console.log("fail categoryList[0]: " + categoryList[0])
            }
        } catch (error) {
            console.log("error: " + error)
        }


        //    console.log("categories: " + JSON.stringify(categories));
    } catch (error) {
        console.log("Error: " + error);
    }
}
start()


function selectCategory(selected) {

    console.log("selected: " + selected);

    [].forEach.call(document.querySelectorAll("[data-category]"), (e) => {
        e.classList.remove("active");
    });
    document.querySelector("[data-category='" + selected + "']").classList.add("active");


    let itemsHTML = "<h1>" + selected + "</h1>";

    let tempList = [];
    for (let i = 0; i < categories.length; i++) {

        if (categories[i].category === selected) {




            for (j = 0; j < categories[i].items.length; j++) {

                if (tempList.indexOf(categories[i].items[j].title) === -1) {
                    //document.querySelector("[data-category]").innerHTML=


                    let tempIngredients = "";
                    for (let h = 0; h < categories[i].items[j].ingredients.length; h++) {
                        tempIngredients = tempIngredients + "<li class='list-group-item'>" + categories[i].items[j].ingredients[h] + "</li>";
                    }


                    itemsHTML = itemsHTML + "<div><h3>" + categories[i].items[j].title + "</h3><div class='p-2'><p>" +
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






function setActiveEvent(activeEvent) {
    if (config[activeRestaurant].events.length === 0) {
        document.querySelector(".eventModule").classList.add("hide");
        globalAlert("alert-warning", "You have this many events: " + config[activeRestaurant].events.length);
        return false;
    }
    console.log("config[activeRestaurant].events[activeEvent].title: " + config[activeRestaurant].events[activeEvent].title)
    document.querySelector("h3[data-eventtitle]").innerHTML = config[activeRestaurant].events[activeEvent].title;
    document.querySelector("li[data-eventdate]").innerHTML = config[activeRestaurant].events[activeEvent].dateTime;
    document.querySelector("li[data-eventaddress]").innerHTML = config[activeRestaurant].events[activeEvent].address;
    document.querySelector("li[data-eventdescription]").innerHTML = config[activeRestaurant].events[activeEvent].details;
    document.querySelector("li[data-eventcontact]").innerHTML = config[activeRestaurant].events[activeEvent].contact;



    document.querySelector(".map").src = "https://www.google.com/maps/embed/v1/place?key=" + config[activeRestaurant].googleID + "&q=" + config[activeRestaurant].events[activeEvent].address;




    let titlesStr = "";
    for (let i = 0; i < config[activeRestaurant].events.length; i++) {
        let active = "";
        if (i === activeEvent) {
            active = " active";
        }

        titlesStr = titlesStr + `<button type="button" class="list-group-item list-group-item-action ${active}" onClick="setActiveEvent(${i})"> ${config[activeRestaurant].events[i].title}</button>`;




    }
    document.getElementById("eventTitlesTarget").innerHTML = titlesStr;



}



//START VIDEO CAROUSEL
let activeVideo = 0;
let videoIndexStr = ""
if (document.getElementById("videoCounter")) {
    document.getElementById("videoCounter").innerHTML = activeVideo + 1 + "/" + parseInt(ytVideos.length);
}

for (let i = 0; i < ytVideos.length; i++) {
    let standardClass = 'sliderIndex';
    if (i === 0) {
        standardClass = 'sliderIndex active';
    }
    videoIndexStr = videoIndexStr + "<li class='" + standardClass + "' data-video='" + i + "' onClick='setVideoActive(" + i + ")' ></li>";
}
if (document.querySelector("[data-carousel='video']")) {
    document.querySelector("[data-carousel='video']").innerHTML = videoIndexStr;
}

function setVideoActive(num) {
    activeVideo = num;
    [].forEach.call(document.querySelectorAll(".sliderIndex[data-video]"), (e) => {
        e.classList.remove("active");
    });
    document.querySelector("[data-video='" + num + "']").classList.add("active");
    document.querySelector("#mediaYt").setAttribute("src", "https://www.youtube.com/embed/" + ytVideos[num])
    document.getElementById("videoCounter").innerHTML = (1 + num) + "/" + parseInt(ytVideos.length);
}
///START IMAGE CAROUSEL
let activeImage = 0;
let imageIndexStr = "";
if (document.getElementById("imageCounter")) {
    document.getElementById("imageCounter").innerHTML = activeImage + 1 + "/" + parseInt(imageAddresses.length) + " - " + imageAddresses[activeImage].substring(imageAddresses[activeImage].lastIndexOf("/"), imageAddresses[0].indexOf("."));
}

for (let i = 0; i < imageAddresses.length; i++) {
    let standardClass = 'sliderIndex';
    if (i === 0) {
        standardClass = 'sliderIndex active';
    }
    imageIndexStr = imageIndexStr + "<li class='" + standardClass + "' data-image='" + i + "' onClick='setImageActive(" + i + ")' ></li>";
}

if (document.querySelector("[data-carousel='image']")) {
    document.querySelector("[data-carousel='image']").innerHTML = imageIndexStr;
}


function setImageActive(num) {
    activeImage = num;
    [].forEach.call(document.querySelectorAll(".sliderIndex[data-image]"), (e) => {
        e.classList.remove("active");
    });
    document.querySelector("[data-image='" + num + "']").classList.add("active");
    document.getElementById("imageCounter").innerHTML = (1 + num) + "/" + parseInt(imageAddresses.length) + " - " + imageAddresses[num].substring(imageAddresses[num].lastIndexOf("/"), imageAddresses[num].indexOf("."));
    document.getElementById("imageCarouselTarget").setAttribute("src", imageAddresses[num]);
}

try {
    document.querySelector("#mediaYt").setAttribute("src", "https://www.youtube.com/embed/" + ytVideos[0])
} catch (error) {
    console.log("No videos: " + error);
}



function carouselMove(direction, media) {
    let videoListLength = parseInt(ytVideos.length);
    let imageListLength = parseInt(imageAddresses.length);
    if (direction === "next") {
        if (media === "video") {
            activeVideo = (parseInt(activeVideo) + 1);
            if (activeVideo >= videoListLength) {
                setVideoActive(0);
            } else {
                setVideoActive(activeVideo);
            }
        }
        if (media === "image") {
            activeImage = (parseInt(activeImage) + 1);
            if (activeImage >= imageListLength) {
                setImageActive(0);
            } else {
                setImageActive(activeImage);
            }
        }
    }

    if (direction === "previous") {
        if (media === "video") {
            let tempActive = activeVideo - 1;
            if (tempActive < 0) {
                setVideoActive(videoListLength - 1);
            } else {
                setVideoActive(activeVideo - 1);
            }
        }
        if (media === "image") {
            let tempActive = activeImage - 1;
            if (tempActive < 0) {
                setImageActive(imageListLength - 1);
            } else {
                setImageActive(activeImage - 1);
            }
        }

    }
}


/*
let imageAddresses = [];
let ytVideos = [];
let HTMLcontent = [];
let mapAddressses = [];
*/

if (document.querySelector("[data-admin='true']")) {

    console.log("We are in admin mode.")

} else {

    setImageActive(0);
    setActiveEvent(0);

    if (HTMLcontent.length === 0) {
        document.getElementById("HTMLcontentTarget").classList.add("hide");
    } else {

        let HTMLcontentStr = "";
        for (let i = 0; i < HTMLcontent.length; i++) {
            HTMLcontentStr = "<hr/>" + HTMLcontentStr + HTMLcontent[i] + "<hr/>";
        }
        document.getElementById("HTMLcontentTarget").innerHTML = HTMLcontentStr;

    }

    //document.getElementById("homeImgTarget").innerHTML = "<img src='" + config[activeRestaurant].homeImg + "' class='img-fluid' />";
    document.getElementById("homeImgTarget").style.backgroundImage = " linear-gradient(rgba(1, 71, 71, 0.5), rgba(71, 71, 71, 0.5)), url(" + config[activeRestaurant].homeImg + ")";



    if (mapAddressses.length === 0) {
        document.getElementById("mapAddresssesTarget").classList.add("hide");

    } else {

        let mapAddresssesStr = "";
        for (let i = 0; i < mapAddressses.length; i++) {
            mapAddresssesStr = mapAddresssesStr + "<div class='col-md-12'><h3>" + mapAddressses[i] + "</h3><iframe class='map' src='https://www.google.com/maps/embed/v1/place?key=" + config[activeRestaurant].googleID + "&q=" + encodeURIComponent(mapAddressses[i]) + " allowfullscreen='true'></iframe></div>";
        }
        document.getElementById("mapAddresssesTarget").innerHTML = mapAddresssesStr;

    }

}


function showCategoryMenu() {
    try {

        if (document.querySelector("#menuNavbar.show")) {
            document.querySelector("#menuNavbar").classList.remove("show");
        } else {
            document.querySelector("#menuNavbar").classList.add("show");
        }

    } catch (error) {

        console.log("error: " + error);

    }
}


function submitRestaurant() {
    Validate(["restaurantName", "apiAddress", "bannersImg"])
};



const toggleMobileNav = () => {

    if (document.querySelector("#topNav.show")) {
        console.log("remove show")
        document.querySelector("#topNav").classList.add("collapse");
        document.querySelector("#topNav").classList.remove("show");
    } else {
        console.log("Add show")
        document.querySelector("#topNav").classList.add("show");
        document.querySelector("#topNav").classList.remove("collapse");
    }




}




