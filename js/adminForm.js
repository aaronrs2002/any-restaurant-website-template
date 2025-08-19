let tempRestaurant =

{
    restaurantName: "",
    sundayHours: "08:00AM - 10:00PM",
    mondayHours: "08:00AM - 10:00PM",
    tuesdayHours: "08:00AM - 10:00PM",
    wednesdayHours: "08:00AM - 10:00PM",
    thursdayHours: "08:00AM - 10:00PM",
    fridayHours: "08:00AM - 10:00PM",
    saturdayHours: "08:00AM - 11:30PM",
    googleID: "AIzaSyBxvGBPN_lRhoYskabk_lZ5FAo4GIowU6I",
    apiAddress: "",
    navLinks: [],
    theme: "",
    banners: [],

    about: "",
    logoHTML: "",
    media: [],
    events: [],
    blogAddress: "",
    address: "",
    phone: "",
    email: "",
    socialMedia: []

};


let editRestaurantStr = "";
for (let i = 0; i < config.length; i++) {
    editRestaurantStr = editRestaurantStr + "<option value='" + config[i].restaurantName + "'>" + config[i].restaurantName + "</option>"
}

document.querySelector("[name='editRestaurant']").innerHTML = editRestaurantStr;

function deleteItem(whichNum, whichObj) {

    whichNum = Number(whichNum);

    console.log("whichNum: " + whichNum);
    console.log("whichObj: " + whichObj);
    let tempObj = [];
    switch (whichObj) {

        case "navLinks":



            for (let i = 0; i < tempRestaurant.navLinks.length; i++) {

                if (i !== whichNum) {
                    tempObj.push(tempRestaurant.navLinks[i]);
                }

            }
            document.querySelector("#navLinksTarget").innerHTML = "";

            let navLinkArrHTML = "";

            tempRestaurant.navLinks = tempObj;
            for (let i = 0; i < tempRestaurant.navLinks.length; i++) {
                navLinkArrHTML = navLinkArrHTML + `<span class='badge  bg-secondary'><i class='fas fa-trash pointer' onClick="deleteItem(${i},'navLinks')"></i> - ${tempRestaurant.navLinks[i]}</span>`;
            }
            document.querySelector("#navLinksTarget").innerHTML = navLinkArrHTML;



            break;



        case "banners":

            for (let i = 0; i < tempRestaurant.banners.length; i++) {

                if (i !== whichNum) {
                    tempObj.push(tempRestaurant.banners[i]);
                }

            }

            document.getElementById("bannersTarget").innerHTML = "";

            let bannersArrHTML = "";
            tempRestaurant.banners = tempObj;
            for (let i = 0; i < tempRestaurant.banners.length; i++) {
                bannersArrHTML = bannersArrHTML + "<div class='col-md-1'><img src='" + tempRestaurant.banners[i].img + "' class='img-thumbnail' alt='" + tempRestaurant.banners[i].bannerHTML
                    + "' ><button class='btn btn-danger' onClick=\"deleteItem('" + i + "','banners')\">Delete <i class='fas fa-trash'></i></button></div > ";
            }

            document.getElementById("bannersTarget").innerHTML = bannersArrHTML;


            break;



        case "media":


            for (let i = 0; i < tempRestaurant.media.length; i++) {

                if (i !== whichNum) {
                    tempObj.push(tempRestaurant.media[i]);
                }

            }

            let mediaImagesArrHTML = "";
            let mediaYtVideoArrHTML = "";
            let mediaHTMLArrHTML = "";
            let mediaMapsArrHTML = "";
            for (let i = 0; i < tempObj.length; i++) {

                if (tempObj[i].type === "img") {
                    mediaImagesArrHTML = mediaImagesArrHTML + "<div class='col-md-1'><img src='" + tempObj[i].address + "'  class='img-thumbnail' /><button class='btn btn-danger' onClick=\"deleteItem('" + i + "','media')\">Delete <i class='fas fa-trash'></i></button></div>"
                }

                if (tempObj[i].type === "ytVideo") {
                    mediaYtVideoArrHTML = mediaYtVideoArrHTML + "<div class='col-md-1'><img src='https://i.ytimg.com/vi/" + tempObj[i].address + "/hqdefault.jpg' class='img-thumbnail' /><button class='btn btn-danger' onClick=\"deleteItem('" + i + "','media')\">Delete <i class='fas fa-trash'></i></button></div>"
                }
                if (tempObj[i].type === "html") {
                    mediaHTMLArrHTML = mediaHTMLArrHTML + "<li class='list-group-item'><button class='btn btn-danger' onClick=\"deleteItem('" + i + "','media')\" ><i class='fas fa-trash' ></i></button> " + tempObj[i].address + "</li>";
                }

                if (tempObj[i].type === "map") {

                    mediaMapsArrHTML = mediaMapsArrHTML + "<li class='list-group-item'><button class='btn btn-danger' onClick=\"deleteItem('" + i + "','media')\" ><i class='fas fa-trash' ></i></button> " + tempObj[i].address + "</li>";
                }




            }
            tempRestaurant.media = tempObj;


            document.getElementById("mediaImagesTarget").innerHTML = mediaImagesArrHTML;

            document.getElementById("mediaytIdsTarget").innerHTML = mediaYtVideoArrHTML;

            document.getElementById("mediaHtmlTarget").innerHTML = mediaHTMLArrHTML;


            document.getElementById("mediaMapsTarget").innerHTML = mediaMapsArrHTML;

            break;






        case "events":

            for (let i = 0; i < tempRestaurant.events.length; i++) {
                if (i !== whichNum) {
                    tempObj.push(tempRestaurant.events[i])
                }
            }

            let eventsArrHTML = "";
            document.getElementById("eventsTarget").innerHTML = "";

            for (let i = 0; i < tempObj.length; i++) {

                eventsArrHTML = eventsArrHTML + "<li class='list-group-item'><ul><li>" + tempObj[i].title + "</li><li>" + tempObj[i].contact + "</li><li>" + tempObj[i].dateTime + "</li>" +
                    "<li>" + tempObj[i].details + "</li><li>" + tempObj[i].address + "</li><li><button class='btn btn-danger' onClick=\"deleteItem('" + i + "','events')\" ><i class='fas fa-trash' ></i></button></li></ul></li>";

            }
            tempRestaurant.events = tempObj;

            document.getElementById("eventsTarget").innerHTML = eventsArrHTML;
            break;



        case "socialMedia":

            for (let i = 0; i < tempRestaurant.socialMedia.length; i++) {
                if (i !== Number(whichNum)) {
                    tempObj.push(tempRestaurant.socialMedia[i])
                }
            }


            console.log("tempObj: " + JSON.stringify(tempObj));
            document.querySelector("#socialMediaTarget").innerHTML = "";
            tempRestaurant.socialMedia = tempObj;
            let tempSocialMediaHTML = "";
            for (let i = 0; i < tempObj.length; i++) {
                tempSocialMediaHTML = tempSocialMediaHTML + `<li class="list-group-item"><a class="p-2 text-primary"  href="${tempObj[i].link}" target="_blank" title="${tempObj[i].title}" ><i class="${tempObj[i].theClass
                    } animated"  onmouseover="javascript:tadaRollover('${tempObj[i].theClass
                    }')" onmouseout="javascript:tadaRollout('${tempObj[i].theClass
                    }')" data-tada="${tempObj[i].theClass
                    }"></i></a><button class='btn btn-danger' onClick=\"deleteItem(${i},'socialMedia')\" ><i class='fas fa-trash' ></i></button></li>`;
            }
            console.log("tempSocialMediaHTML: " + tempSocialMediaHTML);
            document.querySelector("#socialMediaTarget").innerHTML = tempSocialMediaHTML;


            break;

    }



}


//////////////////////////////////////////////////////////////////////////////END DELETE FUNCTION */









function submitToLocal(whichArr) {



    //const multiArr = ['navLinks', "banners", "media", "events","socialMedia"];

    switch (whichArr) {

        case "navLinks":


            Validate(["navLinks"]);
            if (document.querySelector(".error") === null) {
                console.log("field value: " + document.querySelector("[name='navLinks']").value);
                document.querySelector("#navLinksTarget").innerHTML = "";
                tempRestaurant.navLinks.push(document.querySelector("[name='navLinks']").value);
                console.log("tempRestaurant.navLinks: " + tempRestaurant.navLinks);
                let navLinkArrHTML = "";
                for (let i = 0; i < tempRestaurant.navLinks.length; i++) {
                    navLinkArrHTML = navLinkArrHTML + `<span class='badge  bg-secondary'><i class='fas fa-trash pointer' onClick="deleteItem(${i},'navLinks')"></i> - ${tempRestaurant.navLinks[i]}</span>`;
                }
                document.querySelector("#navLinksTarget").innerHTML = navLinkArrHTML;
                document.querySelector("[name='navLinks']").value = "";
                return false;
            } else {
                globalAlert("alert-danger", "What name would you like for your top navigation link?");
                return false;
            }


            break;


        case "banners":


            Validate(["bannersImg"]);
            if (document.querySelector(".error") === null) {
                console.log("field value img: " + document.querySelector("[name='bannersImg']").value);
                console.log("field value: " + document.querySelector("[name='bannersHTML']").value);
                document.querySelector("#bannersTarget").innerHTML = "";
                tempRestaurant.banners.push(

                    {
                        img: document.querySelector("[name='bannersImg']").value,
                        bannerHTML: document.querySelector("[name='bannersHTML']").value
                    }


                );
                console.log("JSON.stringify(empRestaurant[0].banners): " + JSON.stringify(tempRestaurant.banners));
                let bannersArrHTML = "";
                for (let i = 0; i < tempRestaurant.banners.length; i++) {
                    bannersArrHTML = bannersArrHTML + "<div class='col-md-1'><img src='" + tempRestaurant.banners[i].img + "' class='img-thumbnail' alt='" + tempRestaurant.banners[i].bannerHTML
                        + "' ><button class='btn btn-danger' onClick=\"deleteItem('" + i + "','banners')\">Delete <i class='fas fa-trash'></i></button></div > ";
                }
                document.querySelector("[name='bannersImg']").value = "";
                document.querySelector("[name='bannersHTML']").value = "";
                document.getElementById("bannersTarget").innerHTML = bannersArrHTML;
                return false;
            } else {
                globalAlert("alert-danger", "What name would you like for your banner img?");
                return false;
            }


            break;




        case "media":


            Validate(["mediaAddress"]);
            if (document.querySelector(".error") === null) {
                console.log("media Address: " + document.querySelector("[name='mediaAddress']").value);
                console.log("field type: " + document.querySelector("[name='mediaType']").value);

                tempRestaurant.media.push(

                    {
                        type: document.querySelector("[name='mediaType']").value,
                        address: document.querySelector("[name='mediaAddress']").value
                    }


                );
                console.log("JSON.stringify(tempRestaurant.media): " + JSON.stringify(tempRestaurant.media));

                /*
                
                                                      id="mediaImagesTarget"
                                      
                                                     id="mediaytIdsTarget"
                                        
                                                     id="mediaHtmlTarget"
                                             
                                                      id="mediaMapsTarget">
                
                */
                document.querySelector("#mediaImagesTarget").innerHTML = "";
                document.querySelector("#mediaytIdsTarget").innerHTML = "";
                document.querySelector("#mediaHtmlTarget").innerHTML = "";
                document.querySelector("#mediaMapsTarget").innerHTML = "";



                let mediaImagesArrHTML = "";
                let mediaYtVideoArrHTML = "";
                let mediaHTMLArrHTML = "";
                let mediaMapsArrHTML = "";
                for (let i = 0; i < tempRestaurant.media.length; i++) {

                    if (tempRestaurant.media[i].type === "img") {
                        mediaImagesArrHTML = mediaImagesArrHTML + "<div class='col-md-1'><img src='" + tempRestaurant.media[i].address + "'  class='img-thumbnail' /><button class='btn btn-danger' onClick=\"deleteItem('" + i + "','media')\">Delete <i class='fas fa-trash'></i></button></div>"
                    }

                    if (tempRestaurant.media[i].type === "ytVideo") {
                        mediaYtVideoArrHTML = mediaYtVideoArrHTML + "<div class='col-md-1'><img src='https://i.ytimg.com/vi/" + tempRestaurant.media[i].address + "/hqdefault.jpg' class='img-thumbnail' /><button class='btn btn-danger' onClick=\"deleteItem('" + i + "','media')\">Delete <i class='fas fa-trash'></i></button></div>"
                    }
                    if (tempRestaurant.media[i].type === "html") {
                        mediaHTMLArrHTML = mediaHTMLArrHTML + "<li class='list-group-item'><button class='btn btn-danger' onClick=\"deleteItem('" + i + "','media')\" ><i class='fas fa-trash' ></i></button> " + tempRestaurant.media[i].address + "</li>";
                    }

                    if (tempRestaurant.media[i].type === "map") {

                        mediaMapsArrHTML = mediaMapsArrHTML + "<li class='list-group-item'><button class='btn btn-danger' onClick=\"deleteItem('" + i + "','media')\" ><i class='fas fa-trash' ></i></button> " + tempRestaurant.media[i].address + "</li>";
                    }




                }


                document.getElementById("mediaImagesTarget").innerHTML = mediaImagesArrHTML;

                document.getElementById("mediaytIdsTarget").innerHTML = mediaYtVideoArrHTML;

                document.getElementById("mediaHtmlTarget").innerHTML = mediaHTMLArrHTML;


                document.getElementById("mediaMapsTarget").innerHTML = mediaMapsArrHTML;



                document.querySelector("[name='mediaAddress']").value = "";

                return false;
            } else {
                globalAlert("alert-danger", "What name would you like for your banner img?");
                return false;
            }


            break;


        case "events":


            Validate(["eventsAddress", "eventsContact", "eventsDateTime", "eventsTitle", "eventsDetails"]);
            if (document.querySelector(".error")) {

                globalAlert("alert-warning", "Theres an \"events\" field missing.");
                return false;

            } else {
                tempRestaurant.events.push({
                    address: document.querySelector("[name='eventsAddress']").value,
                    contact: document.querySelector("[name='eventsContact']").value,
                    dateTime: document.querySelector("[name='eventsDateTime']").value,
                    details: document.querySelector("textarea[name='eventsDetails']").value,
                    title: document.querySelector("[name='eventsTitle']").value,

                })
            }


            let eventsArrHTML = "";
            for (let i = 0; i < tempRestaurant.events.length; i++) {

                eventsArrHTML = eventsArrHTML + "<li class='list-group-item'><ul><li>" + tempRestaurant.events[i].title + "</li><li>" + tempRestaurant.events[i].contact + "</li><li>" + tempRestaurant.events[i].dateTime + "</li>" +
                    "<li>" + tempRestaurant.events[i].details + "</li><li>" + tempRestaurant.events[i].address + "</li><li><button class='btn btn-danger' onClick=\"deleteItem('" + i + "','events')\" ><i class='fas fa-trash' ></i></button></li></ul></li>";

            }

            document.getElementById("eventsTarget").innerHTML = eventsArrHTML;

            document.querySelector("[name='eventsAddress']").value = "";
            document.querySelector("[name='eventsContact']").value = "";
            document.querySelector("[name='eventsDateTime']").value = "";
            document.querySelector("textarea[name='eventsDetails']").value = "";
            document.querySelector("[name='eventsTitle']").value = "";




            break;

        /*           <label>Restaurant Social Media Accounts</label>
                                            <div><i><a href="https://fontawesome.com/v5/search"
                                                        target="_blank">https://fontawesome.com/v5/search</a></i></div>
                                            <input type="text" class="form-control" name="socialLink"
                                                placeholder="Social media account address" />
        
                                            <input type="text" class="form-control" name="socialTheClass"
                                                placeholder="Fount Awesome class" />
                                            <input type="text" class="form-control" name="socialTitle"
                                                placeholder="Socialmedia Account Title" />
                                            <button class="form-conrol btn btn-success"
                                                onClick="submitToLocal('socialMedia')">Submit
                                                Social Media Acount</button>
        
                                            <div class="py-3"> <label>Social media accounts submitted:</label>
                                                <ul id="socialMediaTarget">
        
        
                                                        socialMedia: [
                    { link: "https://www.linkedin.com/in/aaronrs2002", theClass: "fab fa-linkedin", title: "My Linkedin Profile" },
                    { link: "https://github.com/aaronrs2002", theClass: "fab fa-github", title: "My Open Source Library" },
                    { link: "https://www.youtube.com/@web-presence-developer", theClass: "fab fa-youtube", title: "Learn how to write web applications!" },
                    { link: "https://www.instagram.com/aaronrs2002/", theClass: "fab fa-instagram", title: "Payoff from a multimedia degree." },
                    { link: "https://aaronrs2002.github.io/task-master/?", theClass: "fas fa-network-wired", title: "Networked serverless web apps for Workflow Management and Accounting" },
                    { link: "    https://aaronrs2002.github.io/rss-aggregator/?", theClass: "fas fa-rss-square", title: "Free News Aggregator. Grab any public RSS feed and display it here without advertising and without your boss tracking you." },
        
                    //{ link: "mailto:aaron@web-presence.biz", theClass: "far fa-paper-plane" }
                    //    { title: "ticket management and accounting software by: Aaron Smith ", target: "_blank", url: "https://aaronrs2002.github.io/task-master/", iconClass: "fas fa-network-wired" },
                ]
        
                                                */

        case "socialMedia":

            Validate(["socialLink", "socialTheClass", "socialTitle"]);
            if (document.querySelector(".error")) {

                globalAlert("alert-warning", "Theres an \"Sociual Media\" field missing.");
                return false;

            } else {
                document.querySelector("#socialMediaTarget").innerHTML = "";
                tempRestaurant.socialMedia.push({
                    link: document.querySelector("[name='socialLink']").value,
                    theClass: document.querySelector("[name='socialTheClass']").value,
                    title: document.querySelector("[name='socialTitle']").value,

                });

                let tempSocialMediaHTML = "";
                for (let i = 0; i < tempRestaurant[activeRestaurant].socialMedia.length; i++) {
                    tempSocialMediaHTML = tempSocialMediaHTML + `<li class="list-group-item"><a class="p-2 text-primary"  href="${tempRestaurant[activeRestaurant].socialMedia[i].link + (tempRestaurant[activeRestaurant].socialMedia[i].link.indexOf("?") !== -1 ? gaParam : "")
                        }" target="_blank" title="${tempRestaurant[activeRestaurant].socialMedia[i].title}" ><i class="${tempRestaurant[activeRestaurant].socialMedia[i].theClass
                        } animated"  onmouseover="javascript:tadaRollover('${tempRestaurant[activeRestaurant].socialMedia[i].theClass
                        }')" onmouseout="javascript:tadaRollout('${tempRestaurant[activeRestaurant].socialMedia[i].theClass
                        }')" data-tada="${tempRestaurant[activeRestaurant].socialMedia[i].theClass
                        }"></i></a><button class='btn btn-danger' onClick=\"deleteItem('${i}','socialMedia')\" ><i class='fas fa-trash' ></i></button></li>`;
                }
                console.log("tempSocialMediaHTML: " + tempSocialMediaHTML);
                document.querySelector("#socialMediaTarget").innerHTML = tempSocialMediaHTML;
                document.querySelector("[name='socialLink']").value = "";
                document.querySelector("[name='socialTheClass']").value = "";
                document.querySelector("[name='socialTitle']").value = "";
            }

            break;


    }

}

//////END ADD ////////////////




function submitRestaurant(role) {


    /*
    let tempRestaurant = [
    
        {
            restaurantName: "",
                    sundayHours:"",
        mondayHours:"",
        tuesdayHours:"",
        wednesdayHours:"",
        thursdayHours:"",
        fridayHours:"",
            googleID: "AIzaSyBxvGBPN_lRhoYskabk_lZ5FAo4GIowU6I",
            apiAddress: "",
            navLinks: [],
            theme: "",
            banners: [],
    
            about: "",
            media: [],
            events: [],
            blogAddress: "",
            address: "",
            phone: "",
            email: "",
            socialMedia: []
    
        }];
    
    */
    Validate(["restaurantName", "googleID", "apiAddress", "theme", "about", "blogAddress", "address", "phone", "email"]);

    //about is a textarea

    if (document.querySelector(".error")) {

        globalAlert("alert-danger", "There are field with no information.");
        return false;
    } else {
        tempRestaurant.restaurantName = document.querySelector("[name='restaurantName']").value;


        tempRestaurant.googleID = document.querySelector("[name='googleID']").value;
        tempRestaurant.apiAddress = document.querySelector("[name='apiAddress']").value;
        tempRestaurant.theme = document.querySelector("select[name='theme']").value;
        tempRestaurant.homeImg = document.querySelector("[name='homeImg']").value;

        tempRestaurant.about = document.querySelector("textarea[name='about']").value;
        tempRestaurant.logoHTML = document.querySelector("textarea[name='logoHTML']").value;
        tempRestaurant.blogAddress = document.querySelector("[name='blogAddress']").value;
        tempRestaurant.address = document.querySelector("[name='address']").value;
        tempRestaurant.phone = document.querySelector("[name='phone']").value;
        tempRestaurant.email = document.querySelector("[name='email']").value;
    }



    globalAlert("alert-success", role + " complete.");
    document.getElementById("JSON_Target").innerHTML = JSON.stringify(tempRestaurant);
    console.log("JSON.stringify(tempRestaurant): " + JSON.stringify(tempRestaurant));
}



const chooseRole = (role) => {
    [].forEach.call(document.querySelectorAll("section"), (e) => {
        e.classList.add("hide");
    });
    document.querySelector("section[data-section='" + role + "']").classList.remove("hide");


    [].forEach.call(document.querySelectorAll("[data-func]"), (e) => {
        e.classList.remove("active")
    });
    document.querySelector("[data-func='" + role + "']").classList.add("active");

}



/*START FOOD FORM. 
let recipeObj = {title:"", ingredients:[], category:"", price:00.00}*/

let tempIngredients = [];

let tempMenuItems = [];






const updateMenuItem = (addBuld) => {

    console.log("tempIngredients.length: " + tempIngredients.length)




    if (addBuld === "add") {
        Validate(["foodTitle", "category", "price"]);

        if (document.querySelector(".error")) {

            globalAlert("alert-danger", "You're missing some input fields.");
            return false;
        } else {

            tempMenuItems.push({
                title: document.querySelector("[name='foodTitle']").value,
                ingredients: tempIngredients,
                category: document.querySelector("[name='category']").value,
                price: document.querySelector("[name='price']").value
            })

        }
    }










    let menuStr = "";
    for (let i = 0; i < tempMenuItems.length; i++) {

        let tempIngredientsStr = "";
        for (let j = 0; j < tempMenuItems[i].ingredients.length; j++) {
            tempIngredientsStr = tempIngredientsStr + "<span class='badge bg-secondary'>" + tempMenuItems[i].ingredients[j] + "</span>";
        }

        console.log("tempIngredientsStr: " + tempIngredientsStr);


        menuStr = menuStr + "<li class='list-group-item'><ul><li>" + tempMenuItems[i].title + "</li><li>" + tempMenuItems[i].category + "</li><li>" + tempMenuItems[i].price + "</li><li>" + tempIngredientsStr + "</li><li><button class='btn btn-danger py-2' onClick='deleteFoodItem(" + i + ")'> <i class='fas fa-trash'></i> Delete Menu Item:  " + (1 + i) + "</button></li></ul></li>";



    }



    document.getElementById("menuTarget").innerHTML = menuStr;

    console.log("JSON.stringify(tempMenuItems): " + JSON.stringify(tempMenuItems));

    tempIngredients = [];
    document.querySelector("[name='foodTitle']").value = "";
    document.getElementById("ingredientsTarget").innerHTML = "";
    document.querySelector("[name='category']").value = "";
    document.querySelector("[name='price']").value = "";

}





const submitIngredient = () => {

    Validate(["ingredient"]);
    if (document.querySelector(".error")) {

        globalAlert("alert-danger", "You're missing some input fields.");
        return false;
    } else {

        tempIngredients.push(document.querySelector("[name='ingredient']").value);
        let ingredientStr = "";
        for (let i = 0; i < tempIngredients.length; i++) {
            ingredientStr = ingredientStr + `<span class='badge bg-secondary'><i class='fas fa-trash pointer' onClick="deleteIngredient(${i})"></i> - ${tempIngredients[i]}</span>`;


            //
            // `<span class='badge  bg-secondary'><i class='fas fa-trash pointer' onClick="deleteItem(${i},'navLinks')"></i> - ${tempRestaurant.navLinks[i]}</span>`;

        }
        document.querySelector("[name='ingredient']").value = "";

        document.getElementById("ingredientsTarget").innerHTML = ingredientStr;


    }


}

const deleteIngredient = (num) => {
    let = tempObj = [];
    let ingredientStr = "";
    for (let i = 0; i < tempIngredients.length; i++) {
        if (num !== i) {
            tempObj.push(tempIngredients[i]);
            ingredientStr = ingredientStr + `<span class='badge bg-secondary'><i class='fas fa-trash pointer' onClick="deleteIngredient(${i})"></i> - ${tempIngredients[i]}</span>`;
        }
    }
    tempIngredients = tempObj;
    document.getElementById("ingredientsTarget").innerHTML = ingredientStr;
}


const deleteFoodItem = (whichItem) => {

    let tempObj = [];
    for (let i = 0; i < tempMenuItems.length; i++) {
        if (i !== Number(whichItem)) {
            tempObj.push(tempMenuItems[i])
        }
    }

    tempMenuItems = tempObj;
    updateMenuItem("build");
}

const submitHours = () => {


    tempRestaurant.sundayHours = document.querySelector("select[name='sundayOpenHr']").value + ":" + document.querySelector("select[name='sundayOpenMin']").value + document.querySelector("select[name='sundayOpenAmPm']").value + " - " +
        document.querySelector("select[name='sundayCloseHr']").value + ":" + document.querySelector("select[name='sundayCloseMin']").value + document.querySelector("select[name='sundayCloseAmPm']").value;

    tempRestaurant.mondayHours = document.querySelector("select[name='mondayOpenHr']").value + ":" + document.querySelector("select[name='mondayOpenMin']").value + document.querySelector("select[name='mondayOpenAmPm']").value + " - " +
        document.querySelector("select[name='mondayCloseHr']").value + ":" + document.querySelector("select[name='mondayCloseMin']").value + document.querySelector("select[name='mondayCloseAmPm']").value;

    tempRestaurant.tuesdayHours = document.querySelector("select[name='tuesdayOpenHr']").value + ":" + document.querySelector("select[name='tuesdayOpenMin']").value + document.querySelector("select[name='tuesdayOpenAmPm']").value + " - " +
        document.querySelector("select[name='tuesdayCloseHr']").value + ":" + document.querySelector("select[name='tuesdayCloseMin']").value + document.querySelector("select[name='tuesdayCloseAmPm']").value;

    tempRestaurant.wednesdayHours = document.querySelector("select[name='wednesdayOpenHr']").value + ":" + document.querySelector("select[name='wednesdayOpenMin']").value + document.querySelector("select[name='wednesdayOpenAmPm']").value + " - " +
        document.querySelector("select[name='wednesdayCloseHr']").value + ":" + document.querySelector("select[name='wednesdayCloseMin']").value + document.querySelector("select[name='wednesdayCloseAmPm']").value;

    tempRestaurant.thursdayHours = document.querySelector("select[name='thursdayOpenHr']").value + ":" + document.querySelector("select[name='thursdayOpenMin']").value + document.querySelector("select[name='thursdayOpenAmPm']").value + " - " +
        document.querySelector("select[name='thursdayCloseHr']").value + ":" + document.querySelector("select[name='thursdayCloseMin']").value + document.querySelector("select[name='thursdayCloseAmPm']").value;

    tempRestaurant.fridayHours = document.querySelector("select[name='fridayOpenHr']").value + ":" + document.querySelector("select[name='fridayOpenMin']").value + document.querySelector("select[name='fridayOpenAmPm']").value + " - " +
        document.querySelector("select[name='fridayCloseHr']").value + ":" + document.querySelector("select[name='fridayCloseMin']").value + document.querySelector("select[name='fridayCloseAmPm']").value;



    tempRestaurant.saturdayHours = document.querySelector("select[name='saturdayOpenHr']").value + ":" + document.querySelector("select[name='saturdayOpenMin']").value + document.querySelector("select[name='saturdayOpenAmPm']").value + " - " +
        document.querySelector("select[name='saturdayCloseHr']").value + ":" + document.querySelector("select[name='saturdayCloseMin']").value + document.querySelector("select[name='saturdayCloseAmPm']").value;

    console.log(" tempRestaurant.sundayHours: " + tempRestaurant.sundayHours);
    console.log(" tempRestaurant.mondayHours: " + tempRestaurant.mondayHours);
    console.log(" tempRestaurant.tuesdayHours: " + tempRestaurant.tuesdayHours);
    console.log(" tempRestaurant.wednesdayHours: " + tempRestaurant.wednesdayHours);
    console.log(" tempRestaurant.thursdayHours: " + tempRestaurant.thursdayHours);
    console.log(" tempRestaurant.fridayHours: " + tempRestaurant.fridayHours);
    console.log(" tempRestaurant.saturdayHours: " + tempRestaurant.saturdayHours);

}

/*onl load we need to set all the time select manes "08:00AM - 10:00PM"*/
if (tempRestaurant.sundayHours) {

    let tempOpenHr = tempRestaurant.sundayHours.substring(0, 2);
    let tempOpenMin = tempRestaurant.sundayHours.substring(3, 5);
    let tempOpenAmPm = tempRestaurant.sundayHours.substring(5, 7);

    let tempCloseHr = tempRestaurant.sundayHours.substring(10, 12);
    let tempCloseMin = tempRestaurant.sundayHours.substring(13, 15);
    let tempCloseAmPm = tempRestaurant.sundayHours.substring(15, 17);


    if ((tempOpenHr + tempOpenMin + tempOpenAmPm + tempCloseHr + tempCloseMin + tempCloseAmPm).indexOf("c") !== -1) {/*'c'indicates that one of the select menus was set to closed*/
        document.querySelector("select[name='sundayOpenHr']").selectedIndex = 0;
        document.querySelector("select[name='sundayOpenMin']").selectedIndex = 0;
        document.querySelector("select[name='sundayOpenAmPm']").selectedIndex = 0;
        document.querySelector("select[name='sundayCloseHr']").selectedIndex = 0;
        document.querySelector("select[name='sundayCloseMin']").selectedIndex = 0;
        document.querySelector("select[name='sundayCloseAmPm']").selectedIndex = 0;
    } else {
        document.querySelector("select[name='sundayOpenHr']").value = tempOpenHr;
        document.querySelector("select[name='sundayOpenMin']").value = tempOpenMin;
        document.querySelector("select[name='sundayOpenAmPm']").value = tempOpenAmPm;
        document.querySelector("select[name='sundayCloseHr']").value = tempCloseHr;
        document.querySelector("select[name='sundayCloseMin']").value = tempCloseMin;
        document.querySelector("select[name='sundayCloseAmPm']").value = tempCloseAmPm;
    }


}

if (tempRestaurant.mondayHours) {

    let tempOpenHr = tempRestaurant.mondayHours.substring(0, 2);
    let tempOpenMin = tempRestaurant.mondayHours.substring(3, 5);
    let tempOpenAmPm = tempRestaurant.mondayHours.substring(5, 7);

    let tempCloseHr = tempRestaurant.mondayHours.substring(10, 12);
    let tempCloseMin = tempRestaurant.mondayHours.substring(13, 15);
    let tempCloseAmPm = tempRestaurant.mondayHours.substring(15, 17);


    if ((tempOpenHr + tempOpenMin + tempOpenAmPm + tempCloseHr + tempCloseMin + tempCloseAmPm).indexOf("c") !== -1) {/*'c'indicates that one of the select menus was set to closed*/
        document.querySelector("select[name='mondayOpenHr']").selectedIndex = 0;
        document.querySelector("select[name='mondayOpenMin']").selectedIndex = 0;
        document.querySelector("select[name='mondayOpenAmPm']").selectedIndex = 0;
        document.querySelector("select[name='mondayCloseHr']").selectedIndex = 0;
        document.querySelector("select[name='mondayCloseMin']").selectedIndex = 0;
        document.querySelector("select[name='mondayCloseAmPm']").selectedIndex = 0;
    } else {
        document.querySelector("select[name='mondayOpenHr']").value = tempOpenHr;
        document.querySelector("select[name='mondayOpenMin']").value = tempOpenMin;
        document.querySelector("select[name='mondayOpenAmPm']").value = tempOpenAmPm;
        document.querySelector("select[name='mondayCloseHr']").value = tempCloseHr;
        document.querySelector("select[name='mondayCloseMin']").value = tempCloseMin;
        document.querySelector("select[name='mondayCloseAmPm']").value = tempCloseAmPm;
    }


}


if (tempRestaurant.tuesdayHours) {

    let tempOpenHr = tempRestaurant.tuesdayHours.substring(0, 2);
    let tempOpenMin = tempRestaurant.tuesdayHours.substring(3, 5);
    let tempOpenAmPm = tempRestaurant.tuesdayHours.substring(5, 7);

    let tempCloseHr = tempRestaurant.tuesdayHours.substring(10, 12);
    let tempCloseMin = tempRestaurant.tuesdayHours.substring(13, 15);
    let tempCloseAmPm = tempRestaurant.tuesdayHours.substring(15, 17);


    if ((tempOpenHr + tempOpenMin + tempOpenAmPm + tempCloseHr + tempCloseMin + tempCloseAmPm).indexOf("c") !== -1) {/*'c'indicates that one of the select menus was set to closed*/
        document.querySelector("select[name='tuesdayOpenHr']").selectedIndex = 0;
        document.querySelector("select[name='tuesdayOpenMin']").selectedIndex = 0;
        document.querySelector("select[name='tuesdayOpenAmPm']").selectedIndex = 0;
        document.querySelector("select[name='tuesdayCloseHr']").selectedIndex = 0;
        document.querySelector("select[name='tuesdayCloseMin']").selectedIndex = 0;
        document.querySelector("select[name='tuesdayCloseAmPm']").selectedIndex = 0;
    } else {
        document.querySelector("select[name='tuesdayOpenHr']").value = tempOpenHr;
        document.querySelector("select[name='tuesdayOpenMin']").value = tempOpenMin;
        document.querySelector("select[name='tuesdayOpenAmPm']").value = tempOpenAmPm;
        document.querySelector("select[name='tuesdayCloseHr']").value = tempCloseHr;
        document.querySelector("select[name='tuesdayCloseMin']").value = tempCloseMin;
        document.querySelector("select[name='tuesdayCloseAmPm']").value = tempCloseAmPm;
    }



}


if (tempRestaurant.wednesdayHours) {

    let tempOpenHr = tempRestaurant.wednesdayHours.substring(0, 2);
    let tempOpenMin = tempRestaurant.wednesdayHours.substring(3, 5);
    let tempOpenAmPm = tempRestaurant.wednesdayHours.substring(5, 7);

    let tempCloseHr = tempRestaurant.wednesdayHours.substring(10, 12);
    let tempCloseMin = tempRestaurant.wednesdayHours.substring(13, 15);
    let tempCloseAmPm = tempRestaurant.wednesdayHours.substring(15, 17);


    if ((tempOpenHr + tempOpenMin + tempOpenAmPm + tempCloseHr + tempCloseMin + tempCloseAmPm).indexOf("c") !== -1) {/*'c'indicates that one of the select menus was set to closed*/
        document.querySelector("select[name='wednesdayOpenHr']").selectedIndex = 0;
        document.querySelector("select[name='wednesdayOpenMin']").selectedIndex = 0;
        document.querySelector("select[name='wednesdayOpenAmPm']").selectedIndex = 0;
        document.querySelector("select[name='wednesdayCloseHr']").selectedIndex = 0;
        document.querySelector("select[name='wednesdayCloseMin']").selectedIndex = 0;
        document.querySelector("select[name='wednesdayCloseAmPm']").selectedIndex = 0;
    } else {

        document.querySelector("select[name='wednesdayOpenHr']").value = tempOpenHr;
        document.querySelector("select[name='wednesdayOpenMin']").value = tempOpenMin;
        document.querySelector("select[name='wednesdayOpenAmPm']").value = tempOpenAmPm;
        document.querySelector("select[name='wednesdayCloseHr']").value = tempCloseHr;
        document.querySelector("select[name='wednesdayCloseMin']").value = tempCloseMin;
        document.querySelector("select[name='wednesdayCloseAmPm']").value = tempCloseAmPm;
    }


}


if (tempRestaurant.thursdayHours) {

    let tempOpenHr = tempRestaurant.thursdayHours.substring(0, 2);
    let tempOpenMin = tempRestaurant.thursdayHours.substring(3, 5);
    let tempOpenAmPm = tempRestaurant.thursdayHours.substring(5, 7);

    let tempCloseHr = tempRestaurant.thursdayHours.substring(10, 12);
    let tempCloseMin = tempRestaurant.thursdayHours.substring(13, 15);
    let tempCloseAmPm = tempRestaurant.thursdayHours.substring(15, 17);


    if ((tempOpenHr + tempOpenMin + tempOpenAmPm + tempCloseHr + tempCloseMin + tempCloseAmPm).indexOf("c") !== -1) {/*'c'indicates that one of the select menus was set to closed*/
        document.querySelector("select[name='thursdayOpenHr']").selectedIndex = 0;
        document.querySelector("select[name='thursdayOpenMin']").selectedIndex = 0;
        document.querySelector("select[name='thursdayOpenAmPm']").selectedIndex = 0;
        document.querySelector("select[name='thursdayCloseHr']").selectedIndex = 0;
        document.querySelector("select[name='thursdayCloseMin']").selectedIndex = 0;
        document.querySelector("select[name='thursdayCloseAmPm']").selectedIndex = 0;
    } else {
        document.querySelector("select[name='thursdayOpenHr']").value = tempOpenHr;
        document.querySelector("select[name='thursdayOpenMin']").value = tempOpenMin;
        document.querySelector("select[name='thursdayOpenAmPm']").value = tempOpenAmPm;
        document.querySelector("select[name='thursdayCloseHr']").value = tempCloseHr;
        document.querySelector("select[name='thursdayCloseMin']").value = tempCloseMin;
        document.querySelector("select[name='thursdayCloseAmPm']").value = tempCloseAmPm;
    }



}


if (tempRestaurant.fridayHours) {

    let tempOpenHr = tempRestaurant.fridayHours.substring(0, 2);
    let tempOpenMin = tempRestaurant.fridayHours.substring(3, 5);
    let tempOpenAmPm = tempRestaurant.fridayHours.substring(5, 7);

    let tempCloseHr = tempRestaurant.fridayHours.substring(10, 12);
    let tempCloseMin = tempRestaurant.fridayHours.substring(13, 15);
    let tempCloseAmPm = tempRestaurant.fridayHours.substring(15, 17);


    if ((tempOpenHr + tempOpenMin + tempOpenAmPm + tempCloseHr + tempCloseMin + tempCloseAmPm).indexOf("c") !== -1) {/*'c'indicates that one of the select menus was set to closed*/
        document.querySelector("select[name='fridayOpenHr']").selectedIndex = 0;
        document.querySelector("select[name='fridayOpenMin']").selectedIndex = 0;
        document.querySelector("select[name='fridayOpenAmPm']").selectedIndex = 0;
        document.querySelector("select[name='fridayCloseHr']").selectedIndex = 0;
        document.querySelector("select[name='fridayCloseMin']").selectedIndex = 0;
        document.querySelector("select[name='fridayCloseAmPm']").selectedIndex = 0;
    } else {
        document.querySelector("select[name='fridayOpenHr']").value = tempOpenHr;
        document.querySelector("select[name='fridayOpenMin']").value = tempOpenMin;
        document.querySelector("select[name='fridayOpenAmPm']").value = tempOpenAmPm;
        document.querySelector("select[name='fridayCloseHr']").value = tempCloseHr;
        document.querySelector("select[name='fridayCloseMin']").value = tempCloseMin;
        document.querySelector("select[name='fridayCloseAmPm']").value = tempCloseAmPm;
    }



}

if (tempRestaurant.saturdayHours) {

    let tempOpenHr = tempRestaurant.saturdayHours.substring(0, 2);
    let tempOpenMin = tempRestaurant.saturdayHours.substring(3, 5);
    let tempOpenAmPm = tempRestaurant.saturdayHours.substring(5, 7);

    let tempCloseHr = tempRestaurant.saturdayHours.substring(10, 12);
    let tempCloseMin = tempRestaurant.saturdayHours.substring(13, 15);
    let tempCloseAmPm = tempRestaurant.saturdayHours.substring(15, 17);

    console.log("(tempOpenHr + tempOpenMin + tempOpenAmPm + tempCloseHr + tempCloseMin + tempCloseAmPm): " + (tempOpenHr + tempOpenMin + tempOpenAmPm + tempCloseHr + tempCloseMin + tempCloseAmPm))
    if ((tempOpenHr + tempOpenMin + tempOpenAmPm + tempCloseHr + tempCloseMin + tempCloseAmPm).indexOf("c") !== -1) {/*'c'indicates that one of the select menus was set to closed*/
        document.querySelector("select[name='saturdayOpenHr']").selectedIndex = 0;
        document.querySelector("select[name='saturdayOpenMin']").selectedIndex = 0;
        document.querySelector("select[name='saturdayOpenAmPm']").selectedIndex = 0;
        document.querySelector("select[name='saturdayCloseHr']").selectedIndex = 0;
        document.querySelector("select[name='saturdayCloseMin']").selectedIndex = 0;
        document.querySelector("select[name='saturdayCloseAmPm']").selectedIndex = 0;
    } else {
        document.querySelector("select[name='saturdayOpenHr']").value = tempOpenHr;
        document.querySelector("select[name='saturdayOpenMin']").value = tempOpenMin;
        document.querySelector("select[name='saturdayOpenAmPm']").value = tempOpenAmPm;
        document.querySelector("select[name='saturdayCloseHr']").value = tempCloseHr;
        document.querySelector("select[name='saturdayCloseMin']").value = tempCloseMin;
        document.querySelector("select[name='saturdayCloseAmPm']").value = tempCloseAmPm;

    }



}


const populateFields = () => {

    activeRestaurant = document.querySelector("[name='editRestaurant']").value;
    for (let i = 0; i < config.length; i++) {
        if (activeRestaurant === config[i].restaurantName) {
            tempRestaurant = config[i];
        }
    }

    if (activeRestaurant === "default") {
        globalAlert("alert-warning", "Select a restaurant please.");
        return false;
    } else {
        [].forEach.call(document.querySelectorAll(".restaurantNameTarget"), (e) => {
            e.innerHTML = tempRestaurant.restaurantName;
        });


        document.querySelector("[name='restaurantName']").value = tempRestaurant.restaurantName;
        document.querySelector("[name='googleID']").value = tempRestaurant.googleID;
        document.querySelector("[name='apiAddress']").value = tempRestaurant.apiAddress;
        document.querySelector("select[name='theme']").value = tempRestaurant.theme;
        document.querySelector("[name='homeImg']").value = tempRestaurant.homeImg;
        document.querySelector("textarea[name='about']").value = tempRestaurant.about;
        document.querySelector("textarea[name='logoHTML']").value = tempRestaurant.logoHTML;
        document.querySelector("[name='blogAddress']").value = tempRestaurant.blogAddress;
        document.querySelector("[name='address']").value = tempRestaurant.address;
        document.querySelector("[name='phone']").value = tempRestaurant.phone;
        document.querySelector("[name='email']").value = tempRestaurant.email;


        /*start navlinks*/

        document.querySelector("#navLinksTarget").innerHTML = "";

        let navLinkArrHTML = "";


        for (let i = 0; i < tempRestaurant.navLinks.length; i++) {
            navLinkArrHTML = navLinkArrHTML + `<span class='badge  bg-secondary'><i class='fas fa-trash pointer' onClick="deleteItem(${i},'navLinks')"></i> - ${tempRestaurant.navLinks[i]}</span>`;
        }
        document.querySelector("#navLinksTarget").innerHTML = navLinkArrHTML;

        /*start banners*/

        // console.log("tempRestaurant.banners: " + JSON.stringify(tempRestaurant.banners));
        document.getElementById("bannersTarget").innerHTML = "";

        let bannersArrHTML = "";

        for (let i = 0; i < tempRestaurant.banners.length; i++) {
            bannersArrHTML = bannersArrHTML + "<div class='col-md-1'><img src='" + tempRestaurant.banners[i].img + "' class='img-thumbnail' alt='" + tempRestaurant.banners[i].bannerHTML
                + "' ><button class='btn btn-danger' onClick=\"deleteItem('" + i + "','banners')\">Delete <i class='fas fa-trash'></i></button></div > ";
        }

        document.getElementById("bannersTarget").innerHTML = bannersArrHTML;


        /*start media*/
        let mediaImagesArrHTML = "";
        let mediaYtVideoArrHTML = "";
        let mediaHTMLArrHTML = "";
        let mediaMapsArrHTML = "";
        for (let i = 0; i < tempRestaurant.media.length; i++) {

            if (tempRestaurant.media[i].type === "img") {
                mediaImagesArrHTML = mediaImagesArrHTML + "<div class='col-md-1'><img src='" + tempRestaurant.media[i].address + "'  class='img-thumbnail' /><button class='btn btn-danger' onClick=\"deleteItem('" + i + "','media')\">Delete <i class='fas fa-trash'></i></button></div>"
            }

            if (tempRestaurant.media[i].type === "ytVideo") {
                mediaYtVideoArrHTML = mediaYtVideoArrHTML + "<div class='col-md-1'><img src='https://i.ytimg.com/vi/" + tempRestaurant.media[i].address + "/hqdefault.jpg' class='img-thumbnail' /><button class='btn btn-danger' onClick=\"deleteItem('" + i + "','media')\">Delete <i class='fas fa-trash'></i></button></div>"
            }
            if (tempRestaurant.media[i].type === "html") {
                mediaHTMLArrHTML = mediaHTMLArrHTML + "<li class='list-group-item'><button class='btn btn-danger' onClick=\"deleteItem('" + i + "','media')\" ><i class='fas fa-trash' ></i></button> " + tempRestaurant.media[i].address + "</li>";
            }

            if (tempRestaurant.media[i].type === "map") {

                mediaMapsArrHTML = mediaMapsArrHTML + "<li class='list-group-item'><button class='btn btn-danger' onClick=\"deleteItem('" + i + "','media')\" ><i class='fas fa-trash' ></i></button> " + tempRestaurant.media[i].address + "</li>";
            }




        }



        document.getElementById("mediaImagesTarget").innerHTML = mediaImagesArrHTML;

        document.getElementById("mediaytIdsTarget").innerHTML = mediaYtVideoArrHTML;

        document.getElementById("mediaHtmlTarget").innerHTML = mediaHTMLArrHTML;


        document.getElementById("mediaMapsTarget").innerHTML = mediaMapsArrHTML;

        /*start events*/

        let eventsArrHTML = "";
        document.getElementById("eventsTarget").innerHTML = "";

        for (let i = 0; i < tempRestaurant.events.length; i++) {

            eventsArrHTML = eventsArrHTML + "<li class='list-group-item'><ul><li>" + tempRestaurant.events[i].title + "</li><li>" + tempRestaurant.events[i].contact + "</li><li>" + tempRestaurant.events[i].dateTime + "</li>" +
                "<li>" + tempRestaurant.events[i].details + "</li><li>" + tempRestaurant.events[i].address + "</li><li><button class='btn btn-danger' onClick=\"deleteItem('" + i + "','events')\" ><i class='fas fa-trash' ></i></button></li></ul></li>";

        }
        //  tempRestaurant.events = tempObj;

        document.getElementById("eventsTarget").innerHTML = eventsArrHTML;

        /*start socialmedia */

        document.querySelector("#socialMediaTarget").innerHTML = "";
        // tempRestaurant.socialMedia = tempObj;
        let tempSocialMediaHTML = "";
        for (let i = 0; i < tempRestaurant.socialMedia.length; i++) {
            tempSocialMediaHTML = tempSocialMediaHTML + `<li class="list-group-item"><a class="p-2 text-primary"  href="${tempRestaurant.socialMedia[i].link}" target="_blank" title="${tempRestaurant.socialMedia[i].title}" ><i class="${tempRestaurant.socialMedia[i].theClass
                } animated"  onmouseover="javascript:tadaRollover('${tempRestaurant.socialMedia[i].theClass
                }')" onmouseout="javascript:tadaRollout('${tempRestaurant.socialMedia[i].theClass
                }')" data-tada="${tempRestaurant.socialMedia[i].theClass
                }"></i></a><button class='btn btn-danger' onClick=\"deleteItem(${i},'socialMedia')\" ><i class='fas fa-trash' ></i></button></li>`;
        }
        // console.log("tempSocialMediaHTML: " + tempSocialMediaHTML);
        document.querySelector("#socialMediaTarget").innerHTML = tempSocialMediaHTML;

    }


}


const updateCRUD = (role) => {


    [].forEach.call(document.querySelectorAll("[data-crudbt]"), (e) => {
        if (e.dataset.crudbt !== role) {
            e.classList.remove("active");
        } else {
            e.classList.add("active");
        }
    });


    [].forEach.call(document.querySelectorAll("[data-crud]"), (e) => {

        if (e.dataset.crud !== role) {
            e.classList.add("hide");
        } else {
            e.classList.remove("hide");
        }

    });


    if (role === "edit") {

        populateFields();





    }

    //  document.querySelector("[data-crud='" + role + "']").classList.remove("hide");

}

