let tempRestaurant = [

    {
        restaurantName: "",
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

    }];



function deleteItem(whichNum, whichObj) {

    whichNum = Number(whichNum);

    console.log("whichNum: " + whichNum);
    console.log("whichObj: " + whichObj);
    let tempObj = [];
    switch (whichObj) {

        case "navLinks":



            for (let i = 0; i < tempRestaurant[0].navLinks.length; i++) {

                if (i !== whichNum) {
                    tempObj.push(tempRestaurant[0].navLinks[i]);
                }

            }
            document.querySelector("#navLinksTarget").innerHTML = "";

            let navLinkArrHTML = "";

            tempRestaurant[0].navLinks = tempObj;
            for (let i = 0; i < tempRestaurant[0].navLinks.length; i++) {
                navLinkArrHTML = navLinkArrHTML + `<span class='badge  bg-secondary'><i class='fas fa-trash pointer' onClick="deleteItem(${i},'navLinks')"></i> - ${tempRestaurant[0].navLinks[i]}</span>`;
            }
            document.querySelector("#navLinksTarget").innerHTML = navLinkArrHTML;



            break;



        case "banners":

            for (let i = 0; i < tempRestaurant[0].banners.length; i++) {

                if (i !== whichNum) {
                    tempObj.push(tempRestaurant[0].banners[i]);
                }

            }

            document.getElementById("bannersTarget").innerHTML = "";

            let bannersArrHTML = "";
            tempRestaurant[0].banners = tempObj;
            for (let i = 0; i < tempRestaurant[0].banners.length; i++) {
                bannersArrHTML = bannersArrHTML + "<div class='col-md-1'><img src='" + tempRestaurant[0].banners[i].img + "' class='img-thumbnail' alt='" + tempRestaurant[0].banners[i].bannerHTML
                    + "' ><button class='btn btn-danger' onClick=\"deleteItem('" + i + "','banners')\">Delete <i class='fas fa-trash'></i></button></div > ";
            }

            document.getElementById("bannersTarget").innerHTML = bannersArrHTML;


            break;



        case "media":


            for (let i = 0; i < tempRestaurant[0].media.length; i++) {

                if (i !== whichNum) {
                    tempObj.push(tempRestaurant[0].media[i]);
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
            tempRestaurant[0].media = tempObj;


            document.getElementById("mediaImagesTarget").innerHTML = mediaImagesArrHTML;

            document.getElementById("mediaytIdsTarget").innerHTML = mediaYtVideoArrHTML;

            document.getElementById("mediaHtmlTarget").innerHTML = mediaHTMLArrHTML;


            document.getElementById("mediaMapsTarget").innerHTML = mediaMapsArrHTML;

            break;






        case "events":

            for (let i = 0; i < tempRestaurant[0].events.length; i++) {
                if (i !== whichNum) {
                    tempObj.push(tempRestaurant[0].events[i])
                }
            }

            let eventsArrHTML = "";
            document.getElementById("eventsTarget").innerHTML = "";

            for (let i = 0; i < tempObj.length; i++) {

                eventsArrHTML = eventsArrHTML + "<li class='list-group-item'><ul><li>" + tempObj[i].title + "</li><li>" + tempObj[i].contact + "</li><li>" + tempObj[i].dateTime + "</li>" +
                    "<li>" + tempObj[i].details + "</li><li>" + tempObj[i].address + "</li><li><button class='btn btn-danger' onClick=\"deleteItem('" + i + "','events')\" ><i class='fas fa-trash' ></i></button></li></ul></li>";

            }
            tempRestaurant[0].events = tempObj;

            document.getElementById("eventsTarget").innerHTML = eventsArrHTML;
            break;



        case "socialMedia":

            for (let i = 0; i < tempRestaurant[0].socialMedia.length; i++) {
                if (i !== Number(whichNum)) {
                    tempObj.push(tempRestaurant[0].socialMedia[i])
                }
            }


            console.log("tempObj: " + JSON.stringify(tempObj));
            document.querySelector("#socialMediaTarget").innerHTML = "";
            tempRestaurant[0].socialMedia = tempObj;
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
                tempRestaurant[0].navLinks.push(document.querySelector("[name='navLinks']").value);
                console.log("tempRestaurant[0].navLinks: " + tempRestaurant[0].navLinks);
                let navLinkArrHTML = "";
                for (let i = 0; i < tempRestaurant[0].navLinks.length; i++) {
                    navLinkArrHTML = navLinkArrHTML + `<span class='badge  bg-secondary'><i class='fas fa-trash pointer' onClick="deleteItem(${i},'navLinks')"></i> - ${tempRestaurant[0].navLinks[i]}</span>`;
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
                tempRestaurant[0].banners.push(

                    {
                        img: document.querySelector("[name='bannersImg']").value,
                        bannerHTML: document.querySelector("[name='bannersHTML']").value
                    }


                );
                console.log("JSON.stringify(empRestaurant[0].banners): " + JSON.stringify(tempRestaurant[0].banners));
                let bannersArrHTML = "";
                for (let i = 0; i < tempRestaurant[0].banners.length; i++) {
                    bannersArrHTML = bannersArrHTML + "<div class='col-md-1'><img src='" + tempRestaurant[0].banners[i].img + "' class='img-thumbnail' alt='" + tempRestaurant[0].banners[i].bannerHTML
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

                tempRestaurant[0].media.push(

                    {
                        type: document.querySelector("[name='mediaType']").value,
                        address: document.querySelector("[name='mediaAddress']").value
                    }


                );
                console.log("JSON.stringify(tempRestaurant[0].media): " + JSON.stringify(tempRestaurant[0].media));

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
                for (let i = 0; i < tempRestaurant[0].media.length; i++) {

                    if (tempRestaurant[0].media[i].type === "img") {
                        mediaImagesArrHTML = mediaImagesArrHTML + "<div class='col-md-1'><img src='" + tempRestaurant[0].media[i].address + "'  class='img-thumbnail' /><button class='btn btn-danger' onClick=\"deleteItem('" + i + "','media')\">Delete <i class='fas fa-trash'></i></button></div>"
                    }

                    if (tempRestaurant[0].media[i].type === "ytVideo") {
                        mediaYtVideoArrHTML = mediaYtVideoArrHTML + "<div class='col-md-1'><img src='https://i.ytimg.com/vi/" + tempRestaurant[0].media[i].address + "/hqdefault.jpg' class='img-thumbnail' /><button class='btn btn-danger' onClick=\"deleteItem('" + i + "','media')\">Delete <i class='fas fa-trash'></i></button></div>"
                    }
                    if (tempRestaurant[0].media[i].type === "html") {
                        mediaHTMLArrHTML = mediaHTMLArrHTML + "<li class='list-group-item'><button class='btn btn-danger' onClick=\"deleteItem('" + i + "','media')\" ><i class='fas fa-trash' ></i></button> " + tempRestaurant[0].media[i].address + "</li>";
                    }

                    if (tempRestaurant[0].media[i].type === "map") {

                        mediaMapsArrHTML = mediaMapsArrHTML + "<li class='list-group-item'><button class='btn btn-danger' onClick=\"deleteItem('" + i + "','media')\" ><i class='fas fa-trash' ></i></button> " + tempRestaurant[0].media[i].address + "</li>";
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
                tempRestaurant[0].events.push({
                    address: document.querySelector("[name='eventsAddress']").value,
                    contact: document.querySelector("[name='eventsContact']").value,
                    dateTime: document.querySelector("[name='eventsDateTime']").value,
                    details: document.querySelector("textarea[name='eventsDetails']").value,
                    title: document.querySelector("[name='eventsTitle']").value,

                })
            }


            let eventsArrHTML = "";
            for (let i = 0; i < tempRestaurant[0].events.length; i++) {

                eventsArrHTML = eventsArrHTML + "<li class='list-group-item'><ul><li>" + tempRestaurant[0].events[i].title + "</li><li>" + tempRestaurant[0].events[i].contact + "</li><li>" + tempRestaurant[0].events[i].dateTime + "</li>" +
                    "<li>" + tempRestaurant[0].events[i].details + "</li><li>" + tempRestaurant[0].events[i].address + "</li><li><button class='btn btn-danger' onClick=\"deleteItem('" + i + "','events')\" ><i class='fas fa-trash' ></i></button></li></ul></li>";

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
                tempRestaurant[0].socialMedia.push({
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




function submitRestaurant() {

    /*
    let tempRestaurant = [
    
        {
            restaurantName: "",
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
        tempRestaurant[0].restaurantName = document.querySelector("[name='restaurantName']").value;
        tempRestaurant[0].googleID = document.querySelector("[name='googleID']").value;
        tempRestaurant[0].apiAddress = document.querySelector("[name='apiAddress']").value;
        tempRestaurant[0].theme = document.querySelector("select[name='theme']").value;
        tempRestaurant[0].homeImg = document.querySelector("[name='homeImg']").value;

        tempRestaurant[0].about = document.querySelector("textarea[name='about']").value;
        tempRestaurant[0].logoHTML = document.querySelector("textarea[name='logoHTML']").value;
        tempRestaurant[0].blogAddress = document.querySelector("[name='blogAddress']").value;
        tempRestaurant[0].address = document.querySelector("[name='address']").value;
        tempRestaurant[0].phone = document.querySelector("[name='phone']").value;
        tempRestaurant[0].email = document.querySelector("[name='email']").value;
    }



    globalAlert("alert-success", "We built a JSON object!");
    document.getElementById("JSON_Target").innerHTML = JSON.stringify(tempRestaurant)
}



const chooseRole = (role) => {
    [].forEach.call(document.querySelectorAll("section"), (e) => {
        e.classList.add("hide");
    });
    document.querySelector("section[data-section='" + role + "']").classList.remove("hide");


}



/*START FOOD FORM. 
let recipeObj = {title:"", ingredients:[], category:"", price:00.00}*/

let tempIngredients = [];

let tempMenuItems = [];
const submitMenuItem = () => {

    console.log("tempIngredients.length: " + tempIngredients.length)

    let tempIngredientsStr = "";
    for (let i = 0; i < tempIngredients.length; i++) {
        tempIngredientsStr = tempIngredientsStr + "<span class='badge bg-secondary'>" + tempIngredients[i] + "</span>";
    }

    console.log("tempIngredientsStr: " + tempIngredientsStr)

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

    let menuStr = "";
    for (let i = 0; i < tempMenuItems.length; i++) {


        menuStr = menuStr + "<li class='list-group-item'><ul><li>" + tempMenuItems[i].title + "</li><li>" + tempMenuItems[i].category + "</li><li>" + tempMenuItems[i].price + "</li><li>" + tempIngredientsStr + "</li></ul></li>";
    }

    document.getElementById("menuTarget").innerHTML = menuStr;

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
            ingredientStr = ingredientStr + "<span class='badge bg-secondary'>" + tempIngredients[i] + "</span>";
        }
        document.querySelector("[name='ingredient']").value = "";

        document.getElementById("ingredientsTarget").innerHTML = ingredientStr;


    }


}