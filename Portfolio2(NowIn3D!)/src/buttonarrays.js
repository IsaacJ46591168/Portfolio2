export var projects = [
    {
        "Name": "pHome",
        "Open": function () {
            console.log("Opening Project Home");
        }
    },
    {
        "Name": "P1",
        "Open": function () {
            console.log("Opening P1 Project Info");
        }
    },
    {
        "Name": "BSC",
        "Open": function () {
            console.log("Opening BSC Project Info");
        }
    },
    {
        "Name": "SPC",
        "Open": function () {
            console.log("Opening SPC Project Info");
        }
    },
    {
        "Name": "ANT",
        "Open": function () {
            console.log("Opening ANT Project Info");
        }
    },
    {
        "Name": "BSM",
        "Open": function () {
            console.log("Opening BSM Project Info");
        }
    },
    {
        "Name": "OTH",
        "Open": function () {
            console.log("Opening OTH Project Info");
        }
    }
]

export var aboutWindows = [
    // {
    //     "Name": "abHome",
    //     "Open": "home"
    // },
    {
        "Name": "introBar",
        "Open": "introduction"
    },
    {
        "Name": "sk-exBar",
        "Open": "skills-experience"
    },
    {
        "Name": "fFBar",
        "Open": "funFacts"
    }
]

export var contactLinks = [
    {
        "Name": "LI",
        "Open": function () {
            console.log("Opening LinkedIn");
            window.open("https://www.linkedin.com/in/isaac-james-932553297/", '_blank').focus();
        }
    },
    {
        "Name": "GT",
        "Open": function () {
            console.log("Opening Github");
            window.open("https://github.com/IsaacJ46591168", '_blank').focus();
        }
    },
    {
        "Name": "EM",
        "Open": function () {
            console.log("Opening Email");
            window.open("mailto:isaacjames4580@gmail.com?Subject=Hello%20User").focus();
        }
    },
    {
        "Name": "BS",
        "Open": function () {
            console.log("Opening Bluesky");
            window.open("https://bsky.app/profile/squidcicle12.bsky.social", '_blank').focus();
        }
    }
]