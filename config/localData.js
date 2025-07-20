let config = [

    {
        restaurantName: "Best Food In Town",
        logoHTML: `<h3><a href='#' onClick='linkSelected(0)' class="text-dark text-decoration-none"><i class="fas fa-fish"></i></a></h3>`,
        googleID: "AIzaSyBxvGBPN_lRhoYskabk_lZ5FAo4GIowU6I",
        apiAddress: "https://aaronrs2002.github.io/any-restaurant-website-template/config/restaurantData.json",
        navLinks: ["home", "about", "menu", "contact"],
        theme: "cyborg",
        banners: [/* {
            img: "https://lh3.googleusercontent.com/pw/AP1GczPe94dFwMQfmde5grW-Q4ococo5GGLOSTnw6dSZ-rkj6S3yniZZZLb-tXJO_-Mz2hPzatxbZuMAMZo8wSycW2fBXwiCG8GXca8l7jHz5Sj1ZwJACpVInobVPE1dw0Z7I4ExNXrmxS7yo9RcypFN_BA2jQ=w1289-h967-s-no-gm?authuser=0",
            bannerHTML: "<h3>Welcome, We have food!</h3>"
        },

        {
            img: "https://lh3.googleusercontent.com/pw/AP1GczNF_20NPayR8Ge4mD6GrHgnQqSQ9ecfOlo07wrEmxWPvRO_-GM9x-1qWWxpz9HhoAR4xskHJzSp9usquCCz8bKlL7otCU0Bia4MXuwPJSpY5uf8K4Q_cbwdq-2oD8ZGEDwkJUjGlYT9fVuQYHgb3QNI7A=w1703-h967-s-no-gm?authuser=0",
            bannerHTML: "<h3>We Eat food!</h3>"
        },

        { img: "https://lh3.googleusercontent.com/pw/AP1GczMb0049t_cbpMtkVENokZYwW48GYULguC1WkT0l9InMhqZtMjyIHShNpNaRiR0cHw2ZkIxZD9vgdeuQ1Cn3NrOtLy9SRvgeiXlF0ZpAGr7BuEv7zXmxve7KLkPNlcRfBOadEQt8y8O4DM3SatF297FCfQ=w1724-h967-s-no-gm?authuser=0", bannerHTML: "<h3>Clean Your Plate here!!</h3>" },
         */

            //https://lh3.googleusercontent.com/pw/AP1GczM691Hs3g0LF4M8gElkgHUsSuBI50TVvn-qugARj_BSRuYJt1zgiTag9xyMXivDV8KzPnq-1OW5cznEmeuyZO9mphD0qfAkLUv7YiXalw8hJofAs2Ib0d8cH_j4YgjiXWgWiAXgFK0YZJvR0-RZf4BuVQ=w1437-h967-s-no-gm?authuser=0


            {
                img: "https://lh3.googleusercontent.com/pw/AP1GczO_2Hh4_yQLYVcDGv9vP69cL_iujb7SH0C0sfgymSW7GgDjwZGdHrOfS00AvNTz-Rn2d1Ef_alGOVSbBnVe0Y-xxHKO4YZfbYknsn6cL5v1lYpbQCNhlzne3IAOks2ekLXDrq0-PTdwHA5WjZUGPH6P5g=w1385-h932-s-no-gm?authuser=0",
                bannerHTML: "<h3>We Eat food!</h3>"
            },],



        about: "<h3>We make the best food. Here is our story of three generations.</h3><p>That's why we put the sign up. Our Great Grandfather won these recipes in a poker hand. So enjoy...</p>",
        media:

            [{
                type: "img", address: "https://lh3.googleusercontent.com/pw/AP1GczMb0049t_cbpMtkVENokZYwW48GYULguC1WkT0l9InMhqZtMjyIHShNpNaRiR0cHw2ZkIxZD9vgdeuQ1Cn3NrOtLy9SRvgeiXlF0ZpAGr7BuEv7zXmxve7KLkPNlcRfBOadEQt8y8O4DM3SatF297FCfQ=w1724-h967-s-no-gm?authuser=0"
            },
            {
                type: "img", address: "https://lh3.googleusercontent.com/pw/AP1GczM691Hs3g0LF4M8gElkgHUsSuBI50TVvn-qugARj_BSRuYJt1zgiTag9xyMXivDV8KzPnq-1OW5cznEmeuyZO9mphD0qfAkLUv7YiXalw8hJofAs2Ib0d8cH_j4YgjiXWgWiAXgFK0YZJvR0-RZf4BuVQ=w1437-h967-s-no-gm?authuser=0"
            },
            {
                type: "img", address: "https://lh3.googleusercontent.com/pw/AP1GczN68rRrz0QzpdsLqa9x1P-9ztHm2pgzsRqnwaGeqwTrMDKaMRbp1ORK3xBE-Ju7GrdycZCj76CKZABz8T-BtHGn-oHae-gmsyvg5pkLFM4DdKtjMeLyXW2pd3aFvayTRvBUX8dVKLn2QaAjW7khOh3q9w=w1428-h967-s-no-gm?authuser=0"
            },


            { type: "ytVideo", address: "MrsOwvHgW48" },
            { type: "ytVideo", address: "1Lw8QvlMfBY" },
            { type: "ytVideo", address: "P6W8kwmwcno" },




            {
                type: "html", address: "<div><label>First Name: <input type='text' class='form-control' name='fname' placehodler='First Name' /></label><label>Last Name: <input type='text' class='form-control' name='lname' placehodler='Last Name' /></label><button type='button' class='btn btn-success form-control' >Submit</button></div>"
            },


            { type: "html", address: "<div class='col-md-12'><h3>Rich Text Available</h3><p>As long as you do not break your javascript \"string\", you can type whatever HTML you would like. Forms incluided, like I demonstrated above.</div>" },

            { type: "map", address: "1060 W. Addison Chicago, IL" },

            { type: "map", address: "4025 E Chandler Blvd unit 46 Phoenix AZ 85048" }],






        events: [
            {
                "address": "4025 E Chandler Blvd unit 46 Phoenix AZ 85048",
                "contact": "<a href='https://azbassetrescue.org/contact/' target='_blank'>azbassetrescue.org</a>",
                "dateTime": "December 19 @ 11:00 am - 2:00 pm",
                "details": "<p>Tired of wrapping present after present? Come join the Azbhr Volunteers from 11am-2pm on Saturday the 19th and then again from 1pm-4pm on Sunday the 20th. You make the tax deductible donation to help the Hounds, we’ll wrap your presents! Please note, this is a 2 day event!</p>",
                "title": "Gift Wrap – East Valley, Day 1!"
            },
            {
                "address": "4025 E. Chandler Blvd Unit 46 Chandler, AZ 85048 United States",
                "contact": "<a href='https://azbassetrescue.org/contact/' target='_blank'>azbassetrescue.org</a>",
                "dateTime": "December 20 @ 1:00 pm - 4:00 pm",
                "details": "<p>Tired of wrapping present after present? Come join the Azbhr Volunteers from 11am-2pm on Saturday the 19th and then again from 1pm-4pm on Sunday the 20th. You make the tax deductible donation to help the Hounds, we’ll wrap your presents!</p><p>Please note, this is a 2 day event!</p>",
                "title": "Gift Wrap- East Valley, Day 2!"
            },
            {
                "address": "8545 South Emerald Drive Tempe, AZ 85284",
                "contact": "<a href='https://azbassetrescue.org/contact/' target='_blank'>azbassetrescue.org</a>",
                "dateTime": "January 17, 2021 @ 2:30 pm - 5:30 pm",
                "details": "<p>Please join us January 17th, 2021at Main Event Tempe! Main Event will graciously be donating 20% of sales of: Arcade games, food, gift cards, activities and non-alcoholic beverages!</p><p>This fundraiser will benefit the October Angel of the Month!</p>",
                "title": "Main Event – Playtime for our January Angel!"
            }
        ],
        blogAddress: "",
        address: "1060 W. Addison Ave. Chicago Il",
        phone: "555-222-3434",
        email: "info@eat.com",
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

    }];

let activeRestaurant = 0;
document.querySelector("#themedStyle").setAttribute("href", "https://bootswatch.com/5/" + config[activeRestaurant].theme + "/bootstrap.css");
[].forEach.call(document.querySelectorAll(".logoHTML"), (e) => {
    let logoCurrentHTML = e.innerHTML;
    e.innerHTML = config[activeRestaurant].logoHTML + logoCurrentHTML;

});


[].forEach.call(document.querySelectorAll("[data-navlink]"), (e) => {
    e.innerHTML = config[activeRestaurant].navLinks[e.dataset.navlink]

});

//   <link href="https://bootswatch.com/5/spacelab/bootstrap.css" rel="stylesheet" id="themedStyle">

/*[].forEach.call(document.querySelectorAll(".map"), (e) => {
    e.src = config[0].googleMapsKey
});*/



let blogData = "Default blog data";