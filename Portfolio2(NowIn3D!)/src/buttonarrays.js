import { ToTarget } from './cameranimations';
import { startingPos, startingRot, monitorView, laptopView, laptopRotation, phoneView, phoneRotation, } from './main';
export var navigationButtonsArr = [
    {
        "id": "monNav",
        "MoveTo": function (cam, group, duration, monHTML, lapHTML, phnHTML) {
            ToTarget(monitorView, startingRot, cam, group, duration, monHTML);
            lapHTML.style.visibility = "hidden";
            phnHTML.style.visibility = "hidden";
        },
        "SmallFormTPos": 0 + 'em',
        "SmallFormLPos": 0 + 'em',
        "SmallFormLPosAlt": "auto",
        "SmallFormWidth": 150 + 'px',
        "SmallFormHeight": 400 + 'px'
    },
    {
        "id": "lapNav",
        "MoveTo": function (cam, group, duration, monHTML, lapHTML, phnHTML) {
            ToTarget(laptopView, laptopRotation, cam, group, duration, lapHTML);
            monHTML.style.visibility = "hidden";
            phnHTML.style.visibility = "hidden";
        },
        "SmallFormTPos": 43 + 'em',
        "SmallFormLPos": 0 + 'em',
        "SmallFormWidth": 170 + 'px',
        "SmallFormHeight": 345 + 'px'
    },
    {
        "id": "phnNav",
        "MoveTo": function (cam, group, duration, monHTML, lapHTML, phnHTML) {
            ToTarget(phoneView, phoneRotation, cam, group, duration, phnHTML);
            monHTML.style.visibility = "hidden";
            lapHTML.style.visibility = "hidden";
        },
        "SmallFormTPos": 54 + 'em',
        "SmallFormLPos": "auto",
        "SmallFormWidth": 100 + 'px',
        "SmallFormHeight": 160 + 'px'
    }
]

export var projectsArr = [
    {
        "id": "P1",
        "Name": "Phoenix One",
        "Developers": "L Stands for Winner Studios",
        "Release": "Demo available November 2023",
        "Link": "https://lstandsforwinner.itch.io/phoenix-one-demo"
    },
    {
        "id": "P1",
        "Name": "Phoenix One",
        "Developers": "Developed with: L Stands for Winner Studios",
        "Release": "Released: November 2023",
        "Link": "https://lstandsforwinner.itch.io/phoenix-one-demo"
    },
    {
        "id": "BSC",
        "Name": "Beachside Campfire",
        "Developers": "Developed with: G27",
        "Release": "Released: November 2023",
        "Link": "https://www.meta.com/en-gb/experiences/liminal-relax-unwind-engage-explore/3158342884265828/"
    },
    {
        "id": "SPC",
        "Name": "Personal Space",
        "Developers": "Developed with: L Stands for Winner Studios",
        "Release": "Released: 2023",
        "Link": "https://lstandsforwinner.itch.io/personal-space"
    },
    {
        "id": "ANT",
        "Name": "The Very Hungry Antepillar",
        "Developers": "Developed with: L Stands for Winner Studios",
        "Release": "Released: 2024",
        "Link": "https://lstandsforwinner.itch.io/the-very-hungry-anterpillar"
    },
    {
        "id": "BSM",
        "Name": "Basement Game",
        "Developers": "Developed with: L Stands for Winner Studios",
        "Release": "Released: 2023",
        "Link": "https://lstandsforwinner.itch.io/basement-game"
    },
    {
        "id": "OTH"
    }
]

export var aboutWindowsArr = [
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

export var contactLinksArr = [
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