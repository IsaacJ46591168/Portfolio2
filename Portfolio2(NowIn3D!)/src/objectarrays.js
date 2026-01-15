import { ToDefault, ToTarget } from './cameranimations';
import { startingPos, startingRot, monitorView, laptopView, laptopRotation, phoneView, phoneRotation, } from './main';
export var navButtonOBJs = [
    {
        "id": "monNav",
        "MoveTo": function (cam, group, duration, monHTML, lapHTML, phnHTML, navButtons) {
            ToTarget(monitorView, startingRot, cam, group, duration, monHTML, navButtons);
            var lapWindows = document.getElementsByClassName("abWindow");
            lapHTML.style.visibility = "hidden";
            for (var i = 0; i < lapWindows.length; i++) {
                lapWindows[i].style.visibility = "hidden";
            }

            phnHTML.style.visibility = "hidden";
        },
        "ActiveTPos": 0 + 'em',
        "ActiveLPos": 0 + 'em',
        "ActiveLPosAlt": "auto",
        "ActiveWidth": 150 + 'px',
        "ActiveHeight": 400 + 'px',
        "ActiveText": "<",
        "ActiveTextAlt": ">",

        "DefaultTPos": 28.6 + 'em',
        "DefaultLPos": 38.8 + 'em',
        "DefaultWidth": 625 + 'px',
        "DefaultHeight": 320 + 'px',
        "DefaultText": "Projects"
    },
    {
        "id": "lapNav",
        "MoveTo": function (cam, group, duration, monHTML, lapHTML, phnHTML, navButtons) {
            ToTarget(laptopView, laptopRotation, cam, group, duration, lapHTML, navButtons);
            var monWindows = document.getElementsByClassName("monWindows")
            monHTML.style.visibility = "hidden";
            for (var i = 0; i < monWindows.length; i++) {
                monWindows[i].style.visibility = "hidden";
            }

            phnHTML.style.visibility = "hidden";
        },
        "ActiveTPos": 43 + 'em',
        "ActiveLPos": 0 + 'em',
        "ActiveWidth": 170 + 'px',
        "ActiveHeight": 345 + 'px',
        "ActiveText": "<",


        "DefaultTPos": 43 + 'em',
        "DefaultLPos": 22 + 'em',
        "DefaultWidth": 260 + 'px',
        "DefaultHeight": 180 + 'px',
        "DefaultText": "About Me",
    },
    {
        "id": "phnNav",
        "MoveTo": function (cam, group, duration, monHTML, lapHTML, phnHTML, navButtons) {
            ToTarget(phoneView, phoneRotation, cam, group, duration, phnHTML, navButtons);
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
        "ActiveTPos": 54 + 'em',
        "ActiveLPos": "auto",
        "ActiveWidth": 100 + 'px',
        "ActiveHeight": 160 + 'px',
        "ActiveText": ">",

        "DefaultTPos": 52 + 'em',
        "DefaultLPos": 91.5 + 'em',
        "DefaultWidth": 115 + 'px',
        "DefaultHeight": 80 + 'px',
        "DefaultText": "Contact",
    },
    {
        "id": "defaultNav",
        "MoveTo": function (cam, group, duration, monHTML, lapHTML, phnHTML, navButtons) {
            ToDefault(startingPos, startingRot, cam, group, duration, navButtons);
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
        "ActiveTPos": 'auto',
        "ActiveLPos": 50 + '%',
        "ActiveWidth": 350 + 'px',
        "ActiveHeight": 150 + 'px',
        "ActiveText": "V"
    }
]

export var projectOBJs = [
    {
        "id": "P1",
        "Name": "Phoenix One",
        "Developers": "https://lstandsforwinner.studio/",
        "StudioLogo": "LSW-Logo.png",
        "Release": "Demo available November 2023",
        "Link": "https://lstandsforwinner.itch.io/phoenix-one-demo",
        "About": "A 2D Run-and-Gun Game combining puzzle, quick thinking and action. Run, Jump, Glide, Dash and Shoot your way through numerous puzzling and high-octane alien encounters, as you rush to salvage the fate of the Phoenix One mission and preserve hope for humanity.",
        "RoleAct": "For this project, I was both a developer and designer, focusing on the character's movement system and the design of the levels. The movement and the levels had to be designed in a way that complemented each other and that allowed the game to achieve the fast-paced and fluid to play. Because of this, I spent a lot of time refining each compontent of the player's moveset so that it felt quick and responsive, such as the left-right movement having very little acceleration and decelleration times to allow for quick direction changes, and little-to-no end-lag being implemented on the character's moveset so multiple movement options could be chained together. Similar was done to the design of the levels as well; I designed them encounter-by-encounter, resulting in a variety of different challenges for the player in one level, whilst also keeping to the same theme and difficulty. This helped to create a cohesive and engaging level, of whose elements gelled well together.",
        "ImagesLocation": "Projects/P1/",
        "Gallery": [
            "p1-1.JPG", "p1-2.JPG", "p1-3.JPG", "p1-4.JPG", "p1-5.JPG", "p1-6.JPG"
        ]
    },
    {
        "id": "BSC",
        "Name": "Beachside Campfire",
        "Developers": "https://unitguides.mq.edu.au/unit_offerings/156343/unit_guide",
        "StudioLogo": "macqlogo.webp",
        "Release": "Released: November 2023",
        "Link": "https://www.meta.com/en-gb/experiences/liminal-relax-unwind-engage-explore/3158342884265828/",
        "About": "A unique VR experience designed to assist a user in getting ready for sleep. Relax and doze off as you 'watch' the comforting lightshow of a beach-side campfire in front of you, listening to a carefully constructed sleep-inducing soundscape.",
        "RoleAct": "My roles for this project were developer and audio engineer. This was definitely the most unique project I've ever been part of; a VR project about preparing the user for sleep, which they would use with their eyes closed. My most significant contributions were via the development of the audio playing system, which was quite basic in implementation, as it was only regulating when and how many tracks were playing at once, as well as recording, mixing and implementing various audio tracks that combined together to create a non-intrusive, subtle audioscape that aimed to make the user feel relaxed enough to feel sleepy. This included sounds such as ocean noises without the crashing of waves, fire sounds without the peaking and crackling of the fire, subtle narration and chatting that allowed the user to feel comforted without feeling distracted by the sounds.",
        "ImagesLocation": "Projects/BSC/",
        "Gallery": [
            "bsc-1.JPG", "bsc-2.JPG", "bsc-3.JPG", "bsc-4.JPG", "bsc-5.JPG", "bsc-6.JPG"
        ]
    },
    {
        "id": "SPC",
        "Name": "Personal Space",
        "Developers": "https://lstandsforwinner.studio/",
        "StudioLogo": "LSW-Logo.png",
        "Release": "Released: 2023",
        "Link": "https://lstandsforwinner.itch.io/personal-space",
        "About": "A 3D Top-Down Game combining situational awareness and tight movement. Fly around in the depths of space while avoiding the spaceships trying to 're-enter' your atmosphere and avoid 're-entering' all the other planets while you're at it.",
        "RoleAct": "My role for this project was 3D artist. Since the models for this Game Jam were objects required to be avoided, and the project in general was very low-poly, not much detailling was given to them as the player wouldn't really be paying much more attention to them other than registering that they needed to be avoided, so the modelling and design was pretty basic. I did, however, take much inspiration from the Space Shuttle for the spaceship's design.",
        "ImagesLocation": "Projects/SPC/",
        "Gallery": [
            "spc-1.JPG", "spc-2.JPG", "spc-3.JPG", "spc-4.JPG", "spc-5.JPG", "spc-6.JPG"
        ]
    },
    {
        "id": "ANT",
        "Name": "The Very Hungry Antepillar",
        "Developers": "https://lstandsforwinner.studio/",
        "StudioLogo": "LSW-Logo.png",
        "Release": "Released: 2024",
        "Link": "https://lstandsforwinner.itch.io/the-very-hungry-anterpillar",
        "About": "A 2.5D Game at a small scale! Crawl and Weave your way through numerous obstacles and collect as much bread as you can to avoid running out of energy, and avoid getting squashed by the boot!",
        "RoleAct": "My role for this project was 3D artist. The theme of this Game Jam was something along the lines of 'drawn to scale', and so we decided to make a game from the perspective of an ant, hence making the scale of the in-game environment very small. Naturally this meant designing and modelling the 3D objects to match how they might appear to something or someone of that size, with tall and imposing profiles, exaggerated detail, etc.",
        "ImagesLocation": "Projects/ANT/",
        "Gallery": [
            "ant-1.JPG", "ant-2.JPG", "ant-3.JPG", "ant-4.JPG", "ant-5.JPG", "ant-6.JPG"
        ]
    },
    {
        "id": "BSM",
        "Name": "Basement Game",
        "Developers": "https://lstandsforwinner.studio/",
        "StudioLogo": "LSW-Logo.png",
        "Release": "Released: 2023",
        "Link": "https://lstandsforwinner.itch.io/basement-game",
        "About": "A 2.5D Automation Game set in the shadows of a basement. Combine, Produce, Sell and Submit different elements from the periodic table via purchasing and contructing a complex network of small alchemy machines.",
        "RoleAct": "My role for this project was 3D artist. As this was a 2.5D automation game, all the models had to be quite small in order to make sure that, in the inevitable situation where there were many models on the screen at once, they weren't too obstructive. To match the theme of this game, which was all about pretending to be an alchemist by using rickety, old, discount, do-it-yourself machines, I tried to replicate this using basic objects and designs to make them look 'primitive'.",
        "ImagesLocation": "Projects/BSM/",
        "Gallery": [
            "bsm-1.JPG", "bsm-2.JPG", "bsm-3.JPG", "bsm-4.JPG", "bsm-5.JPG", "bsm-6.JPG"
        ]
    },
    {
        "id": "PLN",
        "Name": "Thread the Ring",
        "Developers": "Developed-by-Myself-(Solo-Project!)",
        "StudioLogo": "LSW-Logo.png",
        "Release": "Finished: 2020",
        "Link": "Not-available-right-now.",
        "About": "A 3D Game putting your flight skills to the test!. Twist, Turn and soar your way around around the stage, flying through all of the rings in order to make it to the finish line!",
        "RoleAct": "My first, and so far only, solo project which I made for my final assignment for my industrial tech class in Year 12. Developing it solo was a huge learning curve, given that I was responsible for almost everything that went into it, and especially as I had never programmed anything before at the time. In general though, I tried to keep the flying mechanics to a more arcade-y level, as my inspiration was Pilotwings on the NES, and trying to make realistic plane physics with no prior progamming experience would not have ended well.",
        "ImagesLocation": "Projects/PLN/",
        "Gallery": [
            "ttrtitle.webp", "ttrgame.webp", "fl1.webp", "fl2.webp", "fl4.webp", "fl5.webp"
        ]
    }
]

export var projectLinkOBJs = [
    {
        "id": "studio",
        "Open": function (link) {
            window.open(link, "_blank").focus();
        }
    },
    {
        "id": "playLink",
        "Open": function (link) {
            window.open(link, "_blank").focus();
        }
    }
]

export var smallProjectOBJs = [
    {
        "id": "MTV",
        "Name": "Project Name: Mountain Valley",
        "Type": "Type of project: 3D Model",
        "Finish": "Finished: July 2018",
        "Desc": "One of my very first modelling projects were these snow-covered mountains. Unfortunately, with it being done a long time ago, I don't remember much of the actual modelling process, but I do know that it was pretty much the absolute limit of what my laptop could handle.",
        "ImagesLocation": "SmallProjects/Mount/",
        "Gallery": [
            "mountains.webp", "mountains2.webp", "mountains3.webp", "mountains4.webp", "mountains5.webp", "mountains6.webp", "mountains7.webp"
        ]
    },
    {
        "id": "VPW",
        "Name": "Project Name: VaporWave",
        "Type": "Type of project: 3D Animation",
        "Finish": "Finished: April 2019",
        "Desc": "My first try with randomly-generating terrain combined with an interest in the vaporwave aesthetic resulted in this scene. I turned this into an animation using by turning the generated mesh into an array and then just moving the camera though everything, and then resetting the camera back to its original point when it got to the end of the array so it looked infinite.",
        "ImagesLocation": "SmallProjects/VPW/",
        "Gallery": [
            "vaporwave.webm", "vaporwave2.webp", "vaporwave3.webp", "vaporwave4.webp", "vaporwave5.webp", "vaporwave6.webp", "vaporwave7.webp"
        ]
    },
    {
        "id": "WII",
        "Name": "Project Name: Wii U",
        "Type": "Type of project: 3D Model",
        "Finish": "Finished: August 2024",
        "Desc": "My role for L Stands for Winner was focused more on 3D art at the time of making this, and so I thought I'd model stuff in my room as practice for all the game jams we were doing. This was one such example!",
        "ImagesLocation": "SmallProjects/WiiU/",
        "Gallery": [
            "wiiu.webp", "wiiu2.webp", "wiiu3.webp", "wiiu4.webp", "wiiu5.webp", "wiiu6.webp", "wiiu7.webp"
        ]
    },
    {
        "id": "TRN",
        "Name": "Project Name: Train Station",
        "Type": "Type of project: 3D Model",
        "Finish": "Finished: August 2024",
        "Desc": "While mostly following a tutorial, I made this as practice for ongoing game jam projects with L Stands for Winner. This small project involved a lot of experimentation with modifiers, such as array, mirror, skin, etc.",
        "ImagesLocation": "SmallProjects/Train/",
        "Gallery": [
            "trainstation.webp", "trainstation2.webp", "trainstation3.webp", "trainstation4.webp", "trainstation5.webp", "trainstation6.webp", "trainstation7.webp"
        ]
    },
    {
        "id": "MVC",
        "Name": "Project Name: Moving Cube",
        "Type": "Type of project: 3D Animation",
        "Finish": "Finished: available November 2023",
        "Desc": "My first attempt at combining 3D animation with simulation in another instance of practice for game jams. I'm not sure what exactly made my mind settle on creating this exact animation, and it was my first time really trying to get to grips with Blender's animation tab, which included everything from the dope sheet to the action tab to the graph editor.",
        "ImagesLocation": "SmallProjects/Cube/",
        "Gallery": [
            "cube.webm", "cubepic1.webp", "cubepic2.webp", "cubepic3.webp", "cubepic4.webp", "cubepic5.webp", "cubepic6.webp"
        ]
    },
    {
        "id": "DPB",
        "Name": "Project Name: Departure Board",
        "Type": "Type of project: 3D Animation",
        "Finish": "Finished: April 2025",
        "Desc": "Using geometry nodes is very complicated, but very interesting. Funnily enough, this project was only supposed to be the board itself, but after finishing it, I thought it would be nice to give it its own scene to make the whole render look better. While I couldn't completely replicate it, the scene is based on a real station that exists somewhere!",
        "ImagesLocation": "SmallProjects/Board/",
        "Gallery": [
            "board.webm", "board1.webp", "board2.webp", "board3.webp", "board4.webp", "board5.webp", "board6.webp"
        ]
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

export var funFacts = [
    {
        "id": "fact1",
        "line1": "The longest I've ever stayed awake is 25 hours.",
        "line2": "It was for a coding assignment at Uni..."
    },
    {
        "id": "fact2",
        "line1": "My highest hour-count on any game is 1130.",
        "line2": "It's on Splatoon 2, shamefully."
    },
    {
        "id": "fact3",
        "line1": "My favourite Football team is Liverpool.",
        "line2": "20 Times! #YNWA"
    },
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