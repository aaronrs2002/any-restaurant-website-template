
//let bgImg = config[activeRestaurant].banners[Math.floor(Math.random() * config[activeRestaurant].banners.length)].img;
let menu;
let contactMapAddress;
let minutesStr = "<option value='closed'>Closed</option>";
let hoursStr = "<option value='closed'>Closed</option>";
let imageAddresses = [];
let ytVideos = [];
let HTMLcontent = [];
let mapAddressses = [];
let blogData = "Default blog data";
let activePost = 0;
let blog = [];
let navHTML = "";
let categories = [];
let categoryList = [];

function buildMenuTarget(data) {

    let menuStr = "";
    for (let i = 0; i < data.length; i++) {

        let tempIngredientsStr = "";
        for (let j = 0; j < data[i].ingredients.length; j++) {
            tempIngredientsStr = tempIngredientsStr + "<span class='badge bg-secondary'>" + data[i].ingredients[j] + "</span>";
        }
        menuStr = menuStr + "<li class='list-group-item'><ul><li>" + data[i].title + "</li><li>" + data[i].category + "</li><li>" + data[i].price + "</li><li>" + tempIngredientsStr + "</li><li><button class='btn btn-danger py-2' onClick='deleteFoodItem(" + i + ")'> <i class='fas fa-trash'></i> Delete Menu Item:  " + (1 + i) + "</button></li></ul></li>";



    }
    if (document.getElementById("menuTarget")) {
        document.getElementById("menuTarget").innerHTML = menuStr;
    }


}


const loadMenuItems = (data) => {
    localStorage.setItem("cmsMenu", JSON.stringify(data));
    try {
        if (document.querySelector("select[name='menuItems']")) {
            let menuStr = "<option value='default'>Select menu item to edit</option>";
            for (let i = 0; i < data.length; i++) {
                menuStr = menuStr + "<option value='" + i + "'>" + data[i].title + "</option>"
            }

            document.querySelector("select[name='menuItems']").innerHTML = menuStr;
        }
    } catch (error) {
        console.log("We are not in admin mode: " + error);
    }



}


const runOnLoad = () => {

    localStorage.setItem("activeRestaurantData", JSON.stringify(config[activeRestaurant]));
    document.querySelector("body[data-restaurant]").dataset.restaurant = activeRestaurant;
    document.querySelector("#themedStyle").setAttribute("href", "https://bootswatch.com/5/" + config[activeRestaurant].theme + "/bootstrap.css");
    [].forEach.call(document.querySelectorAll(".logoHTML"), (e) => {
        let logoCurrentHTML = e.innerHTML;
        e.innerHTML = config[activeRestaurant].logoHTML + logoCurrentHTML;

    });


    [].forEach.call(document.querySelectorAll("[data-navlink]"), (e) => {
        e.innerHTML = config[activeRestaurant].navLinks[e.dataset.navlink]

    });


    /*
    
            "sundayHours": "Sun: Closed",
            "mondayHours": "Mon: 8:00 AM - 10:00 PM",
            "tuesdayHours": "Tues: 8:00AM - 10:00PM",
            "wednesdayHours": "Wed: 8:00AM - 10:00PM",
            "thursdayHours": "Thur: 8:00AM - 10:00PM",
            "fridayHours": "Fri: 8:00AM - 10:00PM",
            "saturdayHours": "Fri: 8:00AM - 10:00PM",
    
    
    */



    [].forEach.call(document.querySelectorAll("[data-sunday]"), (e) => {
        e.innerHTML = config[activeRestaurant].sundayHours;
    });
    [].forEach.call(document.querySelectorAll("[data-monday]"), (e) => {
        e.innerHTML = config[activeRestaurant].mondayHours;
    });
    [].forEach.call(document.querySelectorAll("[data-tuesday]"), (e) => {
        e.innerHTML = config[activeRestaurant].tuesdayHours;
    });
    [].forEach.call(document.querySelectorAll("[data-wednesday]"), (e) => {
        e.innerHTML = config[activeRestaurant].wednesdayHours;
    });

    [].forEach.call(document.querySelectorAll("[data-thursday]"), (e) => {
        e.innerHTML = config[activeRestaurant].thursdayHours;
    });

    [].forEach.call(document.querySelectorAll("[data-friday]"), (e) => {
        e.innerHTML = config[activeRestaurant].fridayHours;
    });

    [].forEach.call(document.querySelectorAll("[data-saturday]"), (e) => {
        e.innerHTML = config[activeRestaurant].saturdayHours;
    });

    //   <link href="https://bootswatch.com/5/spacelab/bootstrap.css" rel="stylesheet" id="themedStyle">

    /*[].forEach.call(document.querySelectorAll(".map"), (e) => {
        e.src = config[0].googleMapsKey
    });*/


    for (let i = 1; i < 13; i++) {
        if (i < 10) {
            i = "0" + i;
        }
        hoursStr = hoursStr + "<option value='" + i + "'>" + i + "</option>";
    }

    [].forEach.call(document.querySelectorAll("select.hours"), (e) => {
        e.innerHTML = hoursStr;
    });



    for (let i = 0; i < 60; i++) {
        if (i < 10) {
            i = "0" + i;
        }
        minutesStr = minutesStr + "<option value='" + i + "'>" + i + "</option>";
    }

    [].forEach.call(document.querySelectorAll("select.minutes"), (e) => {
        e.innerHTML = minutesStr;
    });
    console.log("config[activeRestaurant].banners: " + config[activeRestaurant].banners)
    document.querySelector("body[data-restaurant]").style.backgroundImage = "url(" + config[activeRestaurant].banners[Math.floor(Math.random() * config[activeRestaurant].banners.length)].img + ")";

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



    async function start() {
        const urlStart = config[activeRestaurant].apiAddress;
        let phpRelayAddress = "https://mechanized-aesthetics.net/php-relays/any-restaurant-blog-address.php?q=";

        if (config[activeRestaurant].blogAddress.length === 0) {
            document.getElementById("blogSection").classList.add("hide");

        } else {
            try {

                blog = await getBlog(phpRelayAddress + config[activeRestaurant].blogAddress);

                console.log("We changed restaurants(typeof blog): " + (typeof blog));

                viewPosts(0);


            } catch (error) {
                console.log("Error: " + error)
            }
        }



        try {
            menu = await getMenu(urlStart);


            let categoriesHTML = "";
            for (let i = 0; i < menu.length; i++) {
                categories.push({ category: menu[i].category, items: [] });
                if (categoryList.indexOf(menu[i].category) === -1) {
                    categoriesHTML = categoriesHTML + `<li class='list-group-item pointer' onClick='selectCategory("${menu[i].category}")'>${menu[i].category}<ul data-cattarget='${menu[i].category}'></ul></li>`;
                    // categoriesHTML = categoriesHTML + ` <a class="nav-link"  onClick='selectCategory("${menu[i].category}")' data-category='${menu[i].category}' href="#itemsTarget">${menu[i].category}</a>`
                    categoryList.push(menu[i].category);
                }

            }


            if (document.querySelector(".active[data-crudbt='edit']")) {
                loadMenuItems(menu);
                buildMenuTarget(menu);
            }

            /*  for (let i = 0; i < menu.length; i++) {
      
                  for (let j = 0; j < categories.length; j++) {
                      if (categories[j].category === menu[i].category) {
                          categories[j].items = [...categories[j].items, menu[i]]
                      }
                  }
                  // categories[categoryList.indexOf(menu[i].category)].items = [...categories[categoryList.indexOf(menu[i].category)].items, menu[i]]
      
      
      
              }*/


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
    start();

}
runOnLoad(activeRestaurant);



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

    toggleMobileNav();



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




function selectCategory(selected) {

    /* 
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
    
                    }
    
                }
    
    
            }
    
        }
    
        document.getElementById("itemsTarget").innerHTML = itemsHTML;*/


    let selectedCatStr = "";

    for (let i = 0; i < menu.length; i++) {
        if (menu[i].category === selected) {
            selectedCatStr = selectedCatStr + "<li><ol class='list-group list-group-numbered py-2'><li>" + menu[i].title + " - " + menu[i].price + "</li><li>" + menu[i].ingredients + "</li></ol></li>";
        }
    }
    [].forEach.call(document.querySelectorAll("[data-cattarget]"), (e) => {

        if (e.dataset.cattarget !== selected) {
            e.innerHTML = ""
        } else {
            e.innerHTML = selectedCatStr;
        }

    });




}






function setActiveEvent(activeEvent) {
    if (config[activeRestaurant].events.length === 0) {
        document.querySelector(".eventModule").classList.add("hide");
        globalAlert("alert-warning", "You have this many events: " + config[activeRestaurant].events.length);
        return false;
    }

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






