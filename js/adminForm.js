let tempRestaurant = {
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
    homeImg: "",
    banners: [],

    about: "",
    logoImg: "",
    media: [],
    events: [],
    blogAddress: "",
    address: "",
    phone: "",
    email: "",
    socialMedia: []

};

if (localStorage.getItem(".activeRestaurantData") && document.querySelector(".active[data-crudbt='add']")) {
    tempRestaurant = JSON.parse(localStorage.getItem("activeRestaurantData"));
} else {
    console.log("document.querySelector(active.[data-crudbt='add']): " + document.querySelector(".active[data-crudbt='add']"));

    localStorage.removeItem("cmsMenu");
    localStorage.removeItem("activeRestaurantData");

}


let editRestaurantStr = "";
for (let i = 0; i < config.length; i++) {
    editRestaurantStr = editRestaurantStr + "<option value='" + config[i].restaurantName + "'>" + config[i].restaurantName + "</option>"
}

document.querySelector("[name='editRestaurant']").innerHTML = editRestaurantStr;


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
                } else {
                    console.log("deleting socila media title " + tempRestaurant.socialMedia[i].title)
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

    console.log("JSON.stringify(tempRestaurant): " + JSON.stringify(tempRestaurant))
    localStorage.setItem("activeRestaurantData", JSON.stringify(tempRestaurant));


}


//////////////////////////////////////////////////////////////////////////////END DELETE FUNCTION */



function submitToLocal(whichArr) {

    if (localStorage.getItem("activeRestaurantData")) {
        tempRestaurant = JSON.parse(localStorage.getItem("activeRestaurantData"));
    }


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
                for (let i = 0; i < tempRestaurant.socialMedia.length; i++) {
                    tempSocialMediaHTML = tempSocialMediaHTML + `<li class="list-group-item"><a class="p-2 text-primary"  href="${tempRestaurant.socialMedia[i].link + (tempRestaurant.socialMedia[i].link.indexOf("?") !== -1 ? gaParam : "")
                        }" target="_blank" title="${tempRestaurant.socialMedia[i].title}" ><i class="${tempRestaurant.socialMedia[i].theClass
                        } animated"  onmouseover="javascript:tadaRollover('${tempRestaurant.socialMedia[i].theClass
                        }')" onmouseout="javascript:tadaRollout('${tempRestaurant.socialMedia[i].theClass
                        }')" data-tada="${tempRestaurant.socialMedia[i].theClass
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
    console.log(" JSON.stringify(tempRestaurant)); " + JSON.stringify(tempRestaurant));
    localStorage.setItem("activeRestaurantData", JSON.stringify(tempRestaurant));

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
        tempRestaurant.logoImg = document.querySelector("[name='logoImg']").value;
        tempRestaurant.blogAddress = document.querySelector("[name='blogAddress']").value;
        tempRestaurant.address = document.querySelector("[name='address']").value;
        tempRestaurant.phone = document.querySelector("[name='phone']").value;
        tempRestaurant.email = document.querySelector("[name='email']").value;
    }



    globalAlert("alert-success", role + " complete.");
    document.getElementById("JSON_Target").innerHTML = JSON.stringify(tempRestaurant);
    document.querySelector("[data-toggle='clearCode']").classList.remove("hide");
    console.log("JSON.stringify(tempRestaurant): " + JSON.stringify(tempRestaurant));
    localStorage.setItem("activeRestaurantData", JSON.stringify(tempRestaurant));
}






/*START FOOD FORM. 
let recipeObj = {title:"", ingredients:[], category:"", price:00.00}*/

let tempIngredients = [];

let tempMenuItems = [];







const updateMenuItem = (addBuld) => {



    if (localStorage.getItem("cmsMenu")) {

        tempMenuItems = JSON.parse(localStorage.getItem("cmsMenu"));
    }


    if (addBuld === "add") {
        Validate(["foodTitle", "category", "price"]);

        if (document.querySelector(".error")) {

            globalAlert("alert-danger", "You're missing some input fields.");
            return false;
        } else {
            let replaced = false;
            for (let i = 0; i < tempMenuItems.length; i++) {
                if (tempMenuItems[i].title === document.querySelector("[name='foodTitle']").value) {
                    tempMenuItems[i].title = document.querySelector("[name='foodTitle']").value,
                        tempMenuItems[i].ingredients = tempIngredients,
                        tempMenuItems[i].category = document.querySelector("[name='category']").value,
                        tempMenuItems[i].price = document.querySelector("[name='price']").value;
                    replaced = true;
                    globalAlert("alert-success", document.querySelector("[name='foodTitle']").value + " updated.");
                }
            }
            if (!replaced) {
                if (document.querySelector("[name='foodTitle']").value !== "") {
                    tempMenuItems.push({
                        title: document.querySelector("[name='foodTitle']").value,
                        ingredients: tempIngredients,
                        category: document.querySelector("[name='category']").value,
                        price: document.querySelector("[name='price']").value
                    });
                    globalAlert("alert-success", document.querySelector("[name='foodTitle']").value + " added.");
                }

            }




        }
    }



    buildMenuTarget(tempMenuItems)


    localStorage.setItem("cmsMenu", JSON.stringify(tempMenuItems));
    loadMenuItems(tempMenuItems);

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

    if (localStorage.getItem("activeRestaurantData")) {
        tempRestaurant = JSON.parse(localStorage.getItem("activeRestaurantData"));
    }


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
    globalAlert("alert-success", "Hours saved.")

}

/*onl load we need to set all the time select manes "08:00AM - 10:00PM"*/
const buildTimeMenus = () => {

    if (tempRestaurant.sundayHours) {
        console.log("tempRestaurant.sundayHours from buildTimeMenus(): " + tempRestaurant.sundayHours);
        let tempOpenHr = tempRestaurant.sundayHours.substring(0, 2);
        let tempOpenMin = tempRestaurant.sundayHours.substring(3, 5);
        let tempOpenAmPm = tempRestaurant.sundayHours.substring(5, 7);

        let tempCloseHr = tempRestaurant.sundayHours.substring(10, 12);
        let tempCloseMin = tempRestaurant.sundayHours.substring(13, 15);
        let tempCloseAmPm = tempRestaurant.sundayHours.substring(15, 17);




        if ((tempOpenHr + tempOpenMin + tempOpenAmPm + tempCloseHr + tempCloseMin + tempCloseAmPm).indexOf("C") !== -1) {/*'c'indicates that one of the select menus was set to closed*/
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


        if ((tempOpenHr + tempOpenMin + tempOpenAmPm + tempCloseHr + tempCloseMin + tempCloseAmPm).indexOf("C") !== -1) {/*'c'indicates that one of the select menus was set to closed*/
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


        if ((tempOpenHr + tempOpenMin + tempOpenAmPm + tempCloseHr + tempCloseMin + tempCloseAmPm).indexOf("C") !== -1) {/*'c'indicates that one of the select menus was set to closed*/
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


        if ((tempOpenHr + tempOpenMin + tempOpenAmPm + tempCloseHr + tempCloseMin + tempCloseAmPm).indexOf("C") !== -1) {/*'c'indicates that one of the select menus was set to closed*/
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


        if ((tempOpenHr + tempOpenMin + tempOpenAmPm + tempCloseHr + tempCloseMin + tempCloseAmPm).indexOf("C") !== -1) {/*'c'indicates that one of the select menus was set to closed*/
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


        if ((tempOpenHr + tempOpenMin + tempOpenAmPm + tempCloseHr + tempCloseMin + tempCloseAmPm).indexOf("C") !== -1) {/*'c'indicates that one of the select menus was set to closed*/
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

        //console.log("(tempOpenHr + tempOpenMin + tempOpenAmPm + tempCloseHr + tempCloseMin + tempCloseAmPm): " + (tempOpenHr + tempOpenMin + tempOpenAmPm + tempCloseHr + tempCloseMin + tempCloseAmPm))
        if ((tempOpenHr + tempOpenMin + tempOpenAmPm + tempCloseHr + tempCloseMin + tempCloseAmPm).indexOf("C") !== -1) {/*'c'indicates that one of the select menus was set to closed*/
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
}
buildTimeMenus();

const populateFields = () => {




    activeRestaurantName = document.querySelector("[name='editRestaurant']").value;
    for (let i = 0; i < config.length; i++) {

        if (activeRestaurantName === config[i].restaurantName) {
            tempRestaurant = config[i];
            activeRestaurant = i;
            runOnLoad(activeRestaurant);


        }
    }

    if (activeRestaurantName === "default") {
        globalAlert("alert-warning", "Select a restaurant please.");
        return false;
    } else {
        [].forEach.call(document.querySelectorAll(".restaurantNameTarget"), (e) => {
            e.innerHTML = tempRestaurant.restaurantName;
        });

        console.log("POPULATE FEILDS FOR: " + tempRestaurant.restaurantName);
        document.querySelector("[name='restaurantName']").value = tempRestaurant.restaurantName;
        document.querySelector("[name='googleID']").value = tempRestaurant.googleID;
        document.querySelector("[name='apiAddress']").value = tempRestaurant.apiAddress;
        document.querySelector("select[name='theme']").value = tempRestaurant.theme;
        document.querySelector("[name='homeImg']").value = tempRestaurant.homeImg;
        document.querySelector("textarea[name='about']").value = tempRestaurant.about;
        document.querySelector("[name='logoImg']").value = tempRestaurant.logoImg;
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
        document.querySelector("[name='socialLink']").value
        buildTimeMenus();
        setTimeout(() => {
            updateMenuItem("build");
        }, 1000);






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
        if (localStorage.getItem("cmsMenu")) {
            tempMenuItems = JSON.parse(localStorage.getItem("cmsMenu"));

        }



        populateFields();

        document.querySelector("[name='foodTitle']").value = "";
        document.querySelector("[name='ingredient']").value = "";
        document.querySelector("[name='category']").value = "";
        document.querySelector("[name='price']").value = "";
        document.getElementById("ingredientsTarget").innerHTML = "";
    }


    if (role === "add") {
        tempMenuItems = [];
        document.getElementById("menuTarget").innerHTML = "";
        tempRestaurant = {
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
            logoImg: "",
            media: [],
            events: [],
            blogAddress: "",
            address: "",
            phone: "",
            email: "",
            socialMedia: []

        };


        localStorage.removeItem("cmsMenu");
        localStorage.removeItem("activeRestaurantData");



        [].forEach.call(document.querySelectorAll("textarea"), (e) => {
            e.value = "";
        });

        [].forEach.call(document.querySelectorAll("input[type='text']"), (e) => {
            e.value = "";
        });

        [].forEach.call(document.querySelectorAll("select"), (e) => {
            e.selectedIndex = 0;
        });

        document.getElementById("navLinksTarget").innerHTML = "";
        document.getElementById("bannersTarget").innerHTML = "";
        document.getElementById("mediaImagesTarget").innerHTML = "";
        document.getElementById("mediaytIdsTarget").innerHTML = "";
        document.getElementById("mediaHtmlTarget").innerHTML = "";
        document.getElementById("mediaMapsTarget").innerHTML = "";
        document.getElementById("eventsTarget").innerHTML = "";
        document.getElementById("socialMediaTarget").innerHTML = "";
        document.getElementById("ingredientsTarget").innerHTML = "";
        buildTimeMenus();

        //mediaMapsTarget

    }

    //  document.querySelector("[data-crud='" + role + "']").classList.remove("hide");

}

[].forEach.call(document.querySelectorAll("[data-crudbt]"), (e) => {

    let tempRole = e.dataset.crudbt;
    try {

        if (document.querySelector(".active[data-crudbt='" + role + "']")) {
            updateCRUD(tempRole);
        }

    } catch (error) {
        console.log("Error: " + error);

    }

});

function clearFields() {
    document.querySelector("[name='foodTitle']").value = "";
    document.querySelector("[name='category']").value = "";
    document.querySelector("[name='price']").value = "";


    tempIngredients = [];

    document.querySelector("[name='ingredient']").value = "";

    document.getElementById("ingredientsTarget").innerHTML = "";
    return false;

}

const populateMenuItem = () => {


    if (localStorage.getItem("cmsMenu")) {
        tempMenuItems = JSON.parse(localStorage.getItem("cmsMenu"));

    }

    let whichItem = document.querySelector("select[name='menuItems']").value;
    if (whichItem === "default") {

        clearFields();
    } else {
        console.log("JSON.stringify(tempMenuItems[whichItem]): " + JSON.stringify(tempMenuItems[whichItem]));

        document.querySelector("[name='foodTitle']").value = tempMenuItems[whichItem].title;
        document.querySelector("[name='category']").value = tempMenuItems[whichItem].category;
        document.querySelector("[name='price']").value = tempMenuItems[whichItem].price;


        tempIngredients = tempMenuItems[whichItem].ingredients;
        let ingredientStr = "";
        for (let i = 0; i < tempIngredients.length; i++) {
            ingredientStr = ingredientStr + `<span class='badge bg-secondary'><i class='fas fa-trash pointer' onClick="deleteIngredient(${i})"></i> - ${tempIngredients[i]}</span>`;

        }
        document.querySelector("[name='ingredient']").value = "";

        document.getElementById("ingredientsTarget").innerHTML = ingredientStr;
    }

}





/*START UPLOAD DOWNLOAD FUNCTIONALITY*/


function downloadData(whichContent) {
    let tempData = [];
    if (whichContent === "menu") {
        if (localStorage.getItem("cmsMenu")) {
            tempData = JSON.parse(localStorage.getItem("cmsMenu"));
        } else {
            globalAlert("alert-warning", "No menu available.");
            return false;
        }
    } else {
        if (localStorage.getItem("activeRestaurantData")) {
            tempData = JSON.parse(localStorage.getItem("activeRestaurantData"));
        } else {
            globalAlert("alert-warning", "No Website data available. Enter and Submit Restaurant Data. Then Download it.");
            return false;
        }
    }

    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(tempData, null, 2)], {
        type: 'application/json'
    }));
    a.setAttribute("download", "localData_" + whichContent + ".json");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}


//START FILE READER
const fileReader = new FileReader();
let file;
function handleOnChange(event) {
    if (event.target.files[0]) {
        file = event.target.files[0];
        console.log("event.target.files[0]: " + JSON.stringify(event.target.files[0]));

        [].forEach.call(document.querySelectorAll("[data-toggle='fileUpload']"), (e) => {
            e.classList.remove("hide");
        })
        // document.querySelector("#fileUpload").classList.remove("hide");
        // document.querySelector("#fileMerge").classList.remove("hide");
        globalAlert("alert-warning", `File selected.`);
    } else {
        [].forEach.call(document.querySelectorAll("[data-toggle='fileUpload']"), (e) => {
            e.classList.add("hide");
        })
        // document.querySelector("#fileUpload").classList.add("hide");
        // document.querySelector("#fileMerge").classList.add("hide");
    }
};





function handleOnSubmit(event, type, data) {
    event.preventDefault();

    if (file) {
        fileReader.onload = function (event) {
            const tempObj = event.target.result;

            if (type === "json") {



                if (data === "menu") {

                    console.log("tempObj: " + tempObj);
                    // localStorage.setItem("customDictionary", tempObj);    
                    localStorage.setItem("cmsMenu", tempObj);
                    console.log("(typeof tempObj): " + (typeof tempObj));
                    tempMenuItems = JSON.parse(tempObj);

                    loadMenuItems(tempMenuItems);
                    buildMenuTarget(tempMenuItems);


                } /*else {
                    console.log("tempObj: " + tempObj);

                    if (tempObj.restaurantName) {
                        console.log("We have a name: " + tempObj.restaurantName);
                    } else {
                        globalAlert("alert-warning", "This data is not reconizable");
                        return false;
                    }
                    config.push(tempObj);



                    let editRestaurantStr = "";
                    for (let i = 0; i < config.length; i++) {
                        editRestaurantStr = editRestaurantStr + "<option value='" + config[i].restaurantName + "'>" + config[i].restaurantName + "</option>"
                    }

                    document.querySelector("[name='editRestaurant']").innerHTML = editRestaurantStr;

                    globalAlert("alert-success", "Select your upload restaurnt from the select menu.")


                    console.log("JSON.stringify(content): " + JSON.stringify(tempObj));
                    localStorage.setItem("activeRestaurantData", JSON.stringify(tempObj));
                    runOnLoad(tempObj);


                }*/
            }
            else {
                console.log("That wasn't json.")
            }
        };
        fileReader.readAsText(file);
    }
    document.querySelector("input[type='file']").value = "";
    [].forEach.call(document.querySelectorAll("[data-toggle='fileUpload']"), (e) => {
        e.classList.add("hide");
    })
    // document.querySelector("#fileUpload").classList.add("hide");
    //document.querySelector("#fileMerge").classList.add("hide");
    //  toggleEdit();

    globalAlert("alert-success", "Your file was uploaded. The next word should be one you uploaded.");
};

if (localStorage.getItem("cmsMenu")) {
    tempMenuItems = JSON.parse(localStorage.getItem("cmsMenu"));
    loadMenuItems(tempMenuItems);
}



const clearCode = () => {
    document.getElementById("JSON_Target").innerHTML = "";
    document.querySelector("[data-toggle='clearCode']").classList.add("hide");
}