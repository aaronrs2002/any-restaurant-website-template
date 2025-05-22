let config = [

    {
        googleMapsKey: "https://www.google.com/maps/embed/v1/place?key=AIzaSyBxvGBPN_lRhoYskabk_lZ5FAo4GIowU6I&q=",
        apiAddress: "https://aaronrs2002.github.io/any-restaurant-website-template/config/restaurantData.json",
        navLinks: ["home", "about", "menu", "contact"],
        banners: [{
            img: "https://lh3.googleusercontent.com/pw/AP1GczPe94dFwMQfmde5grW-Q4ococo5GGLOSTnw6dSZ-rkj6S3yniZZZLb-tXJO_-Mz2hPzatxbZuMAMZo8wSycW2fBXwiCG8GXca8l7jHz5Sj1ZwJACpVInobVPE1dw0Z7I4ExNXrmxS7yo9RcypFN_BA2jQ=w1289-h967-s-no-gm?authuser=0",
            bannerHTML: "<h3>Welcome, We have food!</h3>"
        },

        {
            img: "https://lh3.googleusercontent.com/pw/AP1GczNF_20NPayR8Ge4mD6GrHgnQqSQ9ecfOlo07wrEmxWPvRO_-GM9x-1qWWxpz9HhoAR4xskHJzSp9usquCCz8bKlL7otCU0Bia4MXuwPJSpY5uf8K4Q_cbwdq-2oD8ZGEDwkJUjGlYT9fVuQYHgb3QNI7A=w1703-h967-s-no-gm?authuser=0",
            bannerHTML: "<h3>We Eat food!</h3>"
        },

        { img: "https://lh3.googleusercontent.com/pw/AP1GczMb0049t_cbpMtkVENokZYwW48GYULguC1WkT0l9InMhqZtMjyIHShNpNaRiR0cHw2ZkIxZD9vgdeuQ1Cn3NrOtLy9SRvgeiXlF0ZpAGr7BuEv7zXmxve7KLkPNlcRfBOadEQt8y8O4DM3SatF297FCfQ=w1724-h967-s-no-gm?authuser=0", bannerHTML: "<h3>Clean Your Plate here!!</h3>" },],

        about: "We make the best food. Here is our story of three generations.",
        media: [{ type: "img", address: "https://imageurl.com" }, { type: "ytVideo", address: "MrsOwvHgW48" }, { type: "html", address: "anyHTML here" }, { type: "map", address: "1060 W. Addison Chicago, IL" }],
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
        blogAddress: "https://blogspot.com",
        address: "1060 W. Addison Ave. Chicago Il",
        phone: "555-222-3434",
        email: "info@eat.com"

    }];


/*[].forEach.call(document.querySelectorAll(".map"), (e) => {
    e.src = config[0].googleMapsKey
});*/