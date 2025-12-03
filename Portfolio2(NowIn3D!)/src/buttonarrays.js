import { ToDefault, ToTarget } from './cameranimations';
import { startingPos, startingRot, monitorView, laptopView, laptopRotation, phoneView, phoneRotation, } from './main';
export var navButtonOBJs = [
    {
        "id": "monNav",
        "MoveTo": function (cam, group, duration, monHTML, lapHTML, phnHTML) {
            ToTarget(monitorView, startingRot, cam, group, duration, monHTML);
            var lapWindows = document.getElementsByClassName("abWindow");
            lapHTML.style.visibility = "hidden";
            for (var i = 0; i < lapWindows.length; i++) {
                lapWindows[i].style.visibility = "hidden";
            }

            phnHTML.style.visibility = "hidden";
        },
        "SmallFormTPos": 0 + 'em',
        "SmallFormLPos": 0 + 'em',
        "SmallFormLPosAlt": "auto",
        "SmallFormWidth": 150 + 'px',
        "SmallFormHeight": 400 + 'px',

        "DefaultTPos": 28.5 + 'em',
        "DefaultLPos": 38.7 + 'em',
        "DefaultWidth": 625 + 'px',
        "DefaultHeight": 320 + 'px'
    },
    {
        "id": "lapNav",
        "MoveTo": function (cam, group, duration, monHTML, lapHTML, phnHTML) {
            ToTarget(laptopView, laptopRotation, cam, group, duration, lapHTML);
            var monWindows = document.getElementsByClassName("monWindows")
            monHTML.style.visibility = "hidden";
            for (var i = 0; i < monWindows.length; i++) {
                monWindows[i].style.visibility = "hidden";
            }

            phnHTML.style.visibility = "hidden";
        },
        "SmallFormTPos": 43 + 'em',
        "SmallFormLPos": 0 + 'em',
        "SmallFormWidth": 170 + 'px',
        "SmallFormHeight": 345 + 'px',

        "DefaultTPos": 43 + 'em',
        "DefaultLPos": 22 + 'em',
        "DefaultWidth": 260 + 'px',
        "DefaultHeight": 180 + 'px'
    },
    {
        "id": "phnNav",
        "MoveTo": function (cam, group, duration, monHTML, lapHTML, phnHTML) {
            ToTarget(phoneView, phoneRotation, cam, group, duration, phnHTML);
            var monWindows = document.getElementsByClassName("monWindows")
            monHTML.style.visibility = "hidden";
            for (var i = 0; i < monWindows.length; i++) {
                monWindows[i].style.visibility = "hidden";
            }

            var lapWindows = document.getElementsByClassName("abWindow");
            lapHTML.style.visibility = "hidden";
            for (var i = 0; i < lapWindows.length; i++) {
                lapWindows[i].style.visibility = "hidden";
            }
        },
        "SmallFormTPos": 54 + 'em',
        "SmallFormLPos": "auto",
        "SmallFormWidth": 100 + 'px',
        "SmallFormHeight": 160 + 'px',

        "DefaultTPos": 52 + 'em',
        "DefaultLPos": 91.5 + 'em',
        "DefaultWidth": 115 + 'px',
        "DefaultHeight": 80 + 'px'
    },
    {
        "id": "defaultNav",
        "MoveTo": function (cam, group, duration, monHTML, lapHTML, phnHTML) {
            ToDefault(startingPos, startingRot, cam, group, duration);
            var monWindows = document.getElementsByClassName("monWindows")
            monHTML.style.visibility = "hidden";
            for (var i = 0; i < monWindows.length; i++) {
                monWindows[i].style.visibility = "hidden";
            }

            var lapWindows = document.getElementsByClassName("abWindow");
            lapHTML.style.visibility = "hidden";
            for (var i = 0; i < lapWindows.length; i++) {
                lapWindows[i].style.visibility = "hidden";
            }

            phnHTML.style.visibility = "hidden";
        },
        "SmallFormTPos": 'auto',
        "SmallFormLPos": 50 + '%',
        "SmallFormWidth": 1200 + 'px',
        "SmallFormHeight": 150 + 'px',
    }
]

export var projectOBJs = [
    {
        "id": "P1",
        "Name": "Phoenix One",
        "Developers": "L Stands for Winner Studios",
        "Release": "Demo available November 2023",
        "Link": "https://lstandsforwinner.itch.io/phoenix-one-demo",
        "About": "A 2D Run-and-Gun Game combining puzzle, quick thinking and action. Run, Jump, Glide, Dash and Shoot your way through numerous puzzling and high-octane alien encounters, as you rush to salvage the fate of the Phoenix One mission and preserve hope for humanity.",
        "RoleAct": "For this project, I was both a developer and designer, focusing on the character's movement system and the design of the levels."
    },
    {
        "id": "BSC",
        "Name": "Beachside Campfire",
        "Developers": "Developed with: G27",
        "Release": "Released: November 2023",
        "Link": "https://www.meta.com/en-gb/experiences/liminal-relax-unwind-engage-explore/3158342884265828/",
        "About": "A unique VR experience designed to assist a user in getting ready for sleep. Relax and doze off as you 'watch' the comforting lightshow of a beach-side campfire in front of you, listening to a carefully constructed sleep-inducing soundscape.",
        "RoleAct": "My roles for this project were developer and audio engineer. "
    },
    {
        "id": "SPC",
        "Name": "Personal Space",
        "Developers": "Developed with: L Stands for Winner Studios",
        "Release": "Released: 2023",
        "Link": "https://lstandsforwinner.itch.io/personal-space",
        "About": "A 3D Top-Down Game combining situational awareness and tight movement. Fly around in the depths of space while avoiding the spaceships trying to 're-enter' your atmosphere and avoid 're-entering' all the other planets while you're at it.",
        "RoleAct": "My role for this project was 3D artist. Since the models for this Game Jam were objects required to be avoided, and the project in general was very low-poly, not much detailling was given to them as the player wouldn't really be paying much more attention to them other than registering that they needed to be avoided, so the modelling and design was pretty basic. I did, however, take much inspiration from the Space Shuttle for the spaceship's design."
    },
    {
        "id": "ANT",
        "Name": "The Very Hungry Antepillar",
        "Developers": "Developed with: L Stands for Winner Studios",
        "Release": "Released: 2024",
        "Link": "https://lstandsforwinner.itch.io/the-very-hungry-anterpillar",
        "About": "A 2.5D Game at a small scale! Crawl and Weave your way through numerous obstacles and collect as much bread as you can to avoid running out of energy, and avoid getting squashed by the boot!",
        "RoleAct": "My role for this project was 3D artist. The theme of this Game Jam was something along the lines of 'drawn to scale', and so we decided to make a game from the perspective of an ant, hence making the scale of the in-game environment very small. Naturally this meant designing and modelling the 3D objects to match how they might appear to something or someone of that size, with tall and imposing profiles, exaggerated detail, etc."
    },
    {
        "id": "BSM",
        "Name": "Basement Game",
        "Developers": "Developed with: L Stands for Winner Studios",
        "Release": "Released: 2023",
        "Link": "https://lstandsforwinner.itch.io/basement-game",
        "About": "A 2.5D Automation Game set in the shadows of a basement. Combine, Produce, Sell and Submit different elements from the periodic table via purchasing and contructing a complex network of small alchemy machines.",
        "RoleAct": "As this was a 2.5D automation game, all the models had to be quite small in order to make sure that, in the inevitable situation where there were many models on the screen at once, they weren't too obstructive. To match the theme of this game, which was all about pretending to be an alchemist by using rickety, old, discount, do-it-yourself machines, I tried to replicate this using basic objects and designs to make them look 'primitive'."
    }
]

export var smallProjectOBJs = [
    {
        "id": "MTV",
        "Name": "Mountain Valley",
        "Type": "3D Model",
        "Description": "Demo available November 2023"
    },
    {
        "id": "VPW",
        "Name": "VaporWave",
        "Type": "3D Animation",
        "Description": "Demo available November 2023"
    },
    {
        "id": "WII",
        "Name": "Wii u",
        "Type": "3D Model",
        "Description": "Demo available November 2023"
    },
    {
        "id": "TRN",
        "Name": "Train Station",
        "Type": "3D Model",
        "Description": "Demo available November 2023"
    },
    {
        "id": "MVC",
        "Name": "Moving Cube",
        "Type": "3D Animation",
        "Description": "Demo available November 2023"
    },
    {
        "id": "DPB",
        "Name": "Departure Board",
        "Type": "3D Animation",
        "Description": "Demo available November 2023"
    },
]

export var aboutWindowsOBJs = [
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

export var contactLinkOBJs = [
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