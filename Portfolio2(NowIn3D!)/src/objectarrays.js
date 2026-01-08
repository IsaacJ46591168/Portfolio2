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
        "Developers": "https://lstandsforwinner.studio/",
        "Release": "Demo available November 2023",
        "Link": "https://lstandsforwinner.itch.io/phoenix-one-demo",
        "About": "A 2D Run-and-Gun Game combining puzzle, quick thinking and action. Run, Jump, Glide, Dash and Shoot your way through numerous puzzling and high-octane alien encounters, as you rush to salvage the fate of the Phoenix One mission and preserve hope for humanity.",
        "RoleAct": "For this project, I was both a developer and designer, focusing on the character's movement system and the design of the levels. The movement and the levels had to be designed in a way that complemented each other and that allowed the game to achieve the fast-paced and fluid to play. Because of this, I spent a lot of time refining each compontent of the player's moveset so that it felt quick and responsive, such as the left-right movement having very little acceleration and decelleration times to allow for quick direction changes, and little-to-no end-lag being implemented on the character's moveset so multiple movement options could be chained together. Similar was done to the design of the levels as well; I designed them encounter-by-encounter, resulting in a variety of different challenges for the player in one level, whilst also keeping to the same theme and difficulty. This helped to create a cohesive and engaging level, of whose elements gelled well together.",
        "Gallery": [
            "p1logo.webp", "p1logo.webp", "p1logo.webp", "p1logo.webp", "p1logo.webp", "p1logo.webp"
        ]
    },
    {
        "id": "BSC",
        "Name": "Beachside Campfire",
        "Developers": "https://unitguides.mq.edu.au/unit_offerings/156343/unit_guide",
        "Release": "Released: November 2023",
        "Link": "https://www.meta.com/en-gb/experiences/liminal-relax-unwind-engage-explore/3158342884265828/",
        "About": "A unique VR experience designed to assist a user in getting ready for sleep. Relax and doze off as you 'watch' the comforting lightshow of a beach-side campfire in front of you, listening to a carefully constructed sleep-inducing soundscape.",
        "RoleAct": "My roles for this project were developer and audio engineer. This was definitely the most unique project I've ever been part of; a VR project about preparing the user for sleep, which they would use with their eyes closed. My most significant contributions were via the development of the audio playing system, which was quite basic in implementation, as it was only regulating when and how many tracks were playing at once, as well as recording, mixing and implementing various audio tracks that combined together to create a non-intrusive, subtle audioscape that aimed to make the user feel relaxed enough to feel sleepy. This included sounds such as ocean noises without the crashing of waves, fire sounds without the peaking and crackling of the fire, subtle narration and chatting that allowed the user to feel comforted without feeling distracted by the sounds.",
        "Gallery": [
            "p1logo.webp", "p1logo.webp", "p1logo.webp", "p1logo.webp", "p1logo.webp", "p1logo.webp"
        ]
    },
    {
        "id": "SPC",
        "Name": "Personal Space",
        "Developers": "https://lstandsforwinner.studio/",
        "Release": "Released: 2023",
        "Link": "https://lstandsforwinner.itch.io/personal-space",
        "About": "A 3D Top-Down Game combining situational awareness and tight movement. Fly around in the depths of space while avoiding the spaceships trying to 're-enter' your atmosphere and avoid 're-entering' all the other planets while you're at it.",
        "RoleAct": "My role for this project was 3D artist. Since the models for this Game Jam were objects required to be avoided, and the project in general was very low-poly, not much detailling was given to them as the player wouldn't really be paying much more attention to them other than registering that they needed to be avoided, so the modelling and design was pretty basic. I did, however, take much inspiration from the Space Shuttle for the spaceship's design.",
        "Gallery": [
            "p1logo.webp", "p1logo.webp", "p1logo.webp", "p1logo.webp", "p1logo.webp", "p1logo.webp"
        ]
    },
    {
        "id": "ANT",
        "Name": "The Very Hungry Antepillar",
        "Developers": "https://lstandsforwinner.studio/",
        "Release": "Released: 2024",
        "Link": "https://lstandsforwinner.itch.io/the-very-hungry-anterpillar",
        "About": "A 2.5D Game at a small scale! Crawl and Weave your way through numerous obstacles and collect as much bread as you can to avoid running out of energy, and avoid getting squashed by the boot!",
        "RoleAct": "My role for this project was 3D artist. The theme of this Game Jam was something along the lines of 'drawn to scale', and so we decided to make a game from the perspective of an ant, hence making the scale of the in-game environment very small. Naturally this meant designing and modelling the 3D objects to match how they might appear to something or someone of that size, with tall and imposing profiles, exaggerated detail, etc.",
        "Gallery": [
            "p1logo.webp", "p1logo.webp", "p1logo.webp", "p1logo.webp", "p1logo.webp", "p1logo.webp"
        ]
    },
    {
        "id": "BSM",
        "Name": "Basement Game",
        "Developers": "https://lstandsforwinner.studio/",
        "Release": "Released: 2023",
        "Link": "https://lstandsforwinner.itch.io/basement-game",
        "About": "A 2.5D Automation Game set in the shadows of a basement. Combine, Produce, Sell and Submit different elements from the periodic table via purchasing and contructing a complex network of small alchemy machines.",
        "RoleAct": "My role for this project was 3D artist. As this was a 2.5D automation game, all the models had to be quite small in order to make sure that, in the inevitable situation where there were many models on the screen at once, they weren't too obstructive. To match the theme of this game, which was all about pretending to be an alchemist by using rickety, old, discount, do-it-yourself machines, I tried to replicate this using basic objects and designs to make them look 'primitive'.",
        "Gallery": [
            "p1logo.webp", "p1logo.webp", "p1logo.webp", "p1logo.webp", "p1logo.webp", "p1logo.webp"
        ]
    },
    {
        "id": "PLN",
        "Name": "Thread the Ring",
        "Developers": "Developed with: Myself (Solo Project!)",
        "Release": "Finished: 2020",
        "Link": "",
        "About": "A 3D Game putting your flight skills to the test!. Twist, Turn and soar your way around around the stage, flying through all of the rings in order to make it to the finish line!",
        "RoleAct": "My first, and so far only, solo project which I made for my final assignment for my industrial tech class in Year 12. Developing it solo was a huge learning curve, given that I was responsible for almost everything that went into it, and especially as I had never programmed anything before at the time. In general though, I tried to keep the flying mechanics to a more arcade-y level, as my inspiration was Pilotwings on the NES, and trying to make realistic plane physics with no prior progamming experience would not have ended well.",
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
        "Finish": "Finished July 2018",
        "Desc": "One of my very first modelling projects were these snow-covered mountains. I was followig a tutorial pretty much word-for-word and action-for-action, but I was still quite proud of it at the time. Unfortunately, with it being done a long time ago, I don't remember much of the actual modelling process, but I do know that it was pretty much the absolute limit of what my laptop could handle.",
        "Gallery": [
            "mountains.webp", "mountains2.webp", "mountains3.webp", "mountains4.webp", "mountains5.webp", "mountains6.webp", "mountains7.webp"
        ]
    },
    {
        "id": "VPW",
        "Name": "VaporWave",
        "Type": "Type of project: 3D Animation",
        "Finish": "Finished April 2019",
        "Desc": "My first experiment with randomly-generating terrain combined with an interest in the vaporwave aesthetic resulted in this scene, which was also done on my old Macbook Pro. Outside of this picture I also turned this into an animation using by turning the generated mesh into an array and then just moving the camera though everything, and then resetting the camera back to its original point when it got to the end of the array so it looked infinite.",
        "Gallery": [
            "vaporwave.webm", "vaporwave2.webp", "vaporwave3.webp", "vaporwave4.webp", "vaporwave5.webp", "vaporwave6.webp", "vaporwave7.webp"
        ]
    },
    {
        "id": "WII",
        "Name": "Project Name: Wii u",
        "Type": "Type of project: 3D Model",
        "Finish": "Finished August 2024",
        "Desc": "Not too much thought went into this one other than at the time, my role for L Stands for Winner was focused more on 3D art, and so I thought I'd model stuff in my room as practice for all the game jams we were doing. This was one such example!",
        "Gallery": [
            "wiiu.webp", "wiiu2.webp", "wiiu3.webp", "wiiu4.webp", "wiiu5.webp", "wiiu6.webp", "wiiu7.webp"
        ]
    },
    {
        "id": "TRN",
        "Name": "Project Name: Train Station",
        "Type": "Type of project: 3D Model",
        "Finish": "Finished August 2024",
        "Desc": "A lot of this was made while following a tutorial, but it was still good practice for ongoing game jam projects with L Stands for Winner. This small project involved a lot of experimentation with modifiers, such as array, mirror, skin, etc, and was also my first time trying out reflective/see-through textures and a return to global lighting for the first time in a while.",
        "Gallery": [
            "trainstation.webp", "trainstation2.webp", "trainstation3.webp", "trainstation4.webp", "trainstation5.webp", "trainstation6.webp", "trainstation7.webp"
        ]
    },
    {
        "id": "MVC",
        "Name": "Project Name: Moving Cube",
        "Type": "Type of project: 3D Animation",
        "Finish": "Finished available November 2023",
        "Desc": "My first attempt at combining 3D animation with simulation in another instance of practice for game jams. I'm not sure what exactly made my mind settle on creating this exact animation, and it was my first time really trying to get to grips with Blender's animation tab, which included everything from the dope sheet to the action tab to the graph editor. Whilst not really expecting much, I was rather happy with how it turned out.",
        "Gallery": [
            "cube.webm", "cubepic1.webp", "cubepic2.webp", "cubepic3.webp", "cubepic4.webp", "cubepic5.webp", "cubepic6.webp"
        ]
    },
    {
        "id": "DPB",
        "Name": "Project Name: Departure Board",
        "Type": "Type of project: 3D Animation",
        "Finish": "Finished April 2025",
        "Desc": "This is my second go at animating a 3D object, and my first attempt with geometry nodes. Very complicated, but very interesting. Funnily enough, this project was only supposed to be the board itself, but after finishing it, I thought it would be nice to give it its own scene to make the whole render look better, and so that's where the rest of the station and the grey morning sky comes from. While I couldn't completely replicate it, the scene is based on a real station that exists somewhere!",
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

export var galleryButtonOBJs = [
    {
        "id": "fFForward",
        "gallery": "fFGalleryWrapper",
        "scrollDirection": "right"
    },
    {
        "id": "fFBack",
        "gallery": "fFGalleryWrapper",
        "scrollDirection": "left"
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