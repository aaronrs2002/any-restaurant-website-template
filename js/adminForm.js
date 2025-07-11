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
                    navLinkArrHTML = navLinkArrHTML + "<span class='badge  bg-secondary'><i class='fas fa-trash pointer' onClick='deleteItem(" + i + ",'navLinks')'></i> - " + tempRestaurant[0].navLinks[i] + "</span>";
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
                    bannersArrHTML = bannersArrHTML + "<div class='col-md-1'><img src='" + tempRestaurant[0].banners[i].img + "' class='img-thumbnail' alt='" + tempRestaurant[0].banners[i].bannerHTML + "' ><button class='btn btn-danger' onClick='deleteItem(" + i + ",'banners')'>Delete <i class='fas fa-trash'></i></button></div > ";
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
                        mediaImagesArrHTML = mediaImagesArrHTML + "<div class='col-md-1'><img src='" + tempRestaurant[0].media[i].address + "'  class='img-thumbnail' /><button class='btn btn-danger' onClick='deleteItem(" + i + ",'media')'>Delete <i class='fas fa-trash'></i></button></div>"
                    }

                    if (tempRestaurant[0].media[i].type === "ytVideo") {
                        mediaYtVideoArrHTML = mediaYtVideoArrHTML + "<div class='col-md-1'><img src='https://i.ytimg.com/vi/" + tempRestaurant[0].media[i].address + "/hqdefault.jpg' class='img-thumbnail' /><button class='btn btn-danger' onClick='deleteItem(" + i + ",'media')'>Delete <i class='fas fa-trash'></i></button></div>"
                    }
                    if (tempRestaurant[0].media[i].type === "html") {
                        mediaHTMLArrHTML = mediaHTMLArrHTML + "<li class='list-group-item'><button class='btn btn-danger' onClick='deleteItem(" + i + ",'media')' ><i class='fas fa-trash' ></i></button> " + tempRestaurant[0].media[i].address + "</li>";
                    }

                    if (tempRestaurant[0].media[i].type === "map") {

                        mediaMapsArrHTML = mediaMapsArrHTML + "<li class='list-group-item'><button class='btn btn-danger' onClick='deleteItem(" + i + ",'media')' ><i class='fas fa-trash' ></i></button> " + tempRestaurant[0].media[i].address + "</li>";
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


            console.log("JSON.stringify(tempRestaurant[0].events); " + JSON.stringify(tempRestaurant[0].events))
            let eventsArrHTML = "";

            for (let i = 0; i < tempRestaurant[0].events.length; i++) {

                eventsArrHTML = eventsArrHTML + "<li class='list-group-item'><ul><li>" + tempRestaurant[0].events[i].title + "</li><li>" + tempRestaurant[0].events[i].contact + "</li><li>" + tempRestaurant[0].events[i].dateTime + "</li>" +
                    "<li>" + tempRestaurant[0].events[i].details + "</li><li>" + tempRestaurant[0].events[i].address + "</li></ul></li>";

            }

            document.getElementById("eventsTarget").innerHTML = eventsArrHTML;

            document.querySelector("[name='eventsAddress']").value = "";
            document.querySelector("[name='eventsContact']").value = "";
            document.querySelector("[name='eventsDateTime']").value = "";
            document.querySelector("textarea[name='eventsDetails']").value = "";
            document.querySelector("[name='eventsTitle']").value = "";




            break;


        /*

                    {
            "address": "4025 E Chandler Blvd unit 46 Phoenix AZ 85048",
            "contact": "<a href='https://azbassetrescue.org/contact/' target='_blank'>azbassetrescue.org</a>",
            "dateTime": "December 19 @ 11:00 am - 2:00 pm",
            "details": "<p>Tired of wrapping present after present? Come join the Azbhr Volunteers from 11am-2pm on Saturday the 19th and then again from 1pm-4pm on Sunday the 20th. You make the tax deductible donation to help the Hounds, we’ll wrap your presents! Please note, this is a 2 day event!</p>",
            "title": "Gift Wrap – East Valley, Day 1!"
        },



                                <input type="text" class="form-control" name="eventsContact"
                                    placeholder="Contact info for event" />
                                <input type="text" class="form-control" name="eventsDateTime"
                                    placeholder="Date and Time for event" />
                                <input type="text" class="form-control" name="eventsTitle"
                                    placeholder="Title for event" />
                                <textarea class="form-control" name="eventsDetails" placeholder="Event details"
                                    rows="5"></textarea>
                                <button class="form-conrol btn btn-success" onClick="submitToLocal('events')">Submit
        */




    }

}

