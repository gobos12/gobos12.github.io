const greeting = {
    name: "Orion Dobos",
    logo: require("./assets/images/roboSit.gif"),
    headshot: require("./assets/images/dreamscape-headshot.jpg"),
    subtitle: "Game Developer and Computer Engineer",
    aboutMe: "Hi, I’m Orion! I’m a computer systems engineer and avid game developer. " +
        "\nI love all things programming, whether it's computer networking, virtual reality, or game development. " +
        "Check out some of my projects below!",

    resources: [
        {
            name: "Resume",
            link: "https://drive.google.com/file/d/1ZrscOi6zJby4IPiztm7bZ1GfZCskF2P2/view?usp=sharing",
            logo: "fa-regular fa-file-lines"
        },
        {
            name: "Github",
            link: "https://github.com/gobos12",
            logo: "fa-brands fa-github"
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/orion-dobos/",
            logo: "fa-brands fa-linkedin-in"
        },
        {
            name: "Email",
            link: "mailto:dobosorion@gmail.com",
            logo: "fa-regular fa-envelope"
        }
    ],

    display: true
};

const projects = {
    header: "Previous Projects",
    projects: [
        {
            title: "Haptic Media Controller",
            sponsor: "Systems Capstone Project",
            date: "August 2023 - May 2024",
            logo: require("./assets/images/games/devicedesign.png"),
            role: "Role: Project Lead, Embedded Programming",
            description: "A haptic device that controls media playback and user interface within virtual reality experiences. " +
                "This device was created as a part of a capstone project concluding my bachelor's degree in computer engineering at Arizona State University. " +
                "Responsibilities included project management, embedded programming, and HID design.",
            bullets: [

            ],
            links: [
                {
                    name: "Youtube",
                    link: "https://youtu.be/f9jvCWmlDso",
                    logo: "fa-brands fa-youtube"
                }
            ]
        },
        {
            title: "Fish",
            sponsor: "Game Engine Programming Final Project",
            date: "November 2023",
            role: "Role: Game Engine Programmer & Solo Developer",
            description: "This game was created as the final project for a game engine development course at Arizona State University. " +
                "For this course, I programmed a Unity-like game engine using C# and the Monogame framework. Fish was created using this custom game engine.",
            links: [
                {
                    name: "Itch.io",
                    link: "https://odobos.itch.io/fish",
                    logo: "fa-brands fa-itch-io"
                }
            ]
        },
        {
            title: "Casa Del Bicho",
            sponsor: "Game II Final Project",
            date: "April 2022 - May 2022",
            role: "Role: UI/UX Developer",
            description: "Casa Del Bicho is a casual exploration town builder game where the player must collect and craft items to restore their broken hometown. " +
                "As the UI/UX Developer, I programmed the dialog, crafting mechanics, and in-game menus. " +
                "This game is a collaboration between myself and other ASU students for CPI211: Game Development II.",
            bullets: [

            ],
            links: [
                {
                    name: "Itch.io",
                    link: "https://odobos.itch.io/casa-del-bicho",
                    logo: "fa-brands fa-itch-io"
                }
            ]
        },
        {
            title: "Liminal Space",
            sponsor: "Game I Final Project",
            date: "October 2021 - December 2021",
            role: "Role: Game Programmer",
            description: "Liminal Space is a 2D puzzle platformer game from the perspective of a blinded adventurer traversing an unknown world. " +
                "As the only programmer, I developed all the player mechanics, user interface, and collision physics.",
            bullets: [],
            links: [
                {
                    name: "Itch.io",
                    link: "https://ingoopa.itch.io/liminal-space",
                    logo: "fa-brands fa-itch-io"
                }
            ]
        }
    ],
    display: true
};

const currentDev = {
    header: "On-Going Projects",
    projects: [
        {
            title: "Planetary Parfait",
            sponsor: "Meteor Studio",
            logo: require("./assets/images/games/jmars.png"),
            role: "Role: Lead Developer",
            description: "A software tool intended for scientist and researchers to view geospatial data within a three-dimensional context.",
            links: [
                {
                    name: "Steam",
                    link: "https://store.steampowered.com/app/2721860/Planetary_Parfait/",
                    usingFA: true,
                    logo: "fa-brands fa-steam"
                },
                {
                    name: "Meta Quest",
                    link: "https://www.meta.com/experiences/5666705306792218/",
                    usingFA: true,
                    logo: "fa-brands fa-meta"
                },
                {
                    name: "Meteor Studio",
                    link: "https://meteor.ame.asu.edu/projects/jmars-xr/",
                    usingFA: false,
                    logo: "fa-solid fa-vr-cardboard"
                }
                ]
        },
        {
            title: "Portfolio",
            sponsor: "",
            logo: require("./assets/images/roboSit.gif"),
            role: "Role: Full Stack Developer",
            description: "Developing this website as a tool to learn React, Javascript, HTML, and SCSS.",
            links: [
                {
                    name: "Github",
                    link: "https://github.com/gobos12/gobos12.github.io",
                    usingFA: true,
                    logo: "fa-brands fa-github"
                }
                ]
        }
    ],
    display: true
}

const gameJams = {
    header: "Game Jams",
    games: [
        {
            title: "Watsinnafridge?",
            date: "",
            jam: "Ludum Dare 54",
            role: "Role: Gameplay Programmer & Level Designer",
            logo: "",
            description: "A fast paced organization game created in 48 hours for Ludum Dare 54. The theme from this jam was \"Limited Space\". " +
                "The goal of this game is to pack your fridge with as many items as possible before the timer runs out.",
            links: [
                {
                    name: "Ludum Dare",
                    link: "https://ldjam.com/events/ludum-dare/54/watsinnafridge",
                    logo: "fa-solid fa-gamepad"
                },
                {
                    name: "Source Code",
                    link: "https://github.com/gobos12/LudumDare54",
                    logo: "fa-brands fa-github"
                }
            ]
        },
        {
            title: "Plant Donor",
            date: "",
            jam: "Ludum Dare 52",
            role: "Role: UI/UX Design & Development",
            logo: "",
            description: "Plant Donor is a 2D harvest game created by myself and a group of friends for Ludum Dare 52. " +
                "The theme for this game jam was “Harvest”, so we created a game where players can harvest organs as if they were plants and sell them on the black market. " +
                "This game was created in Unity, and all game assets were made in Microsoft Paint and Aesprite.",
            links: [
                {
                    name: "Itch.io",
                    link: "https://odobos.itch.io/plant-donor",
                    logo: "fa-brands fa-itch-io"
                },
                {
                    name: "Ludum Dare",
                    link: "https://ldjam.com/events/ludum-dare/52/plant-donor",
                    logo: "fa-solid fa-gamepad"
                },
                {
                    name: "Source Code",
                    link: "https://github.com/gobos12/LudumDare52",
                    logo: "fa-brands fa-github"
                }
            ]
        },
        {
            title: "Waddle in Time",
            date: "",
            jam: "Ludum Dare 51",
            role: "Role: Gameplay Programmer",
            logo: "",
            description: "Waddle in Time is a collaborative project between myself and a group of friends for Ludum Dare 51. The theme was \"Every 10 Seconds\", and we created this game from start to finish in 72 hours to satisfy the group competition deadline. " +
                "This game was made in Gamemaker Studio, and all the game assets were made in Microsoft Paint and Aesprite.",
            links: [
                {
                    name: "Itch.io",
                    link: "https://odobos.itch.io/waddle-in-time",
                    logo: "fa-brands fa-itch-io"
                },
                {
                    name: "Ludum Dare",
                    link: "https://ldjam.com/events/ludum-dare/51/waddle-in-time",
                    logo: "fa-solid fa-gamepad"
                },
                {
                    name: "Source Code",
                    link: "https://github.com/gobos12/LudumDare51",
                    logo: "fa-brands fa-github"
                }
            ]
        },
        {
            title: "Yo Dawg, I Heard You Like Cars",
            date: "",
            jam: "Meme Jam, hosted by ASU's CPI211",
            role: "Role: UI/UX Design & Development",
            logo: "",
            description: "Have you ever wanted to put a car in a car, so you can drive while you drive? " +
                "Yo Dawg, I Heard You Like Cars is a fun racing game where you get to drive around a track on the inside of a moving car! " +
                "This game was made during a 10-day meme-themed game jam for ASU's Game 2 course.",
            links: [
                {
                    name: "Itch.io",
                    link: "https://odobos.itch.io/yo-dawg-i-heard-you-like-cars",
                    logo: "fa-brands fa-itch-io"
                }
            ]
        }
    ],
    display: true
}

const certs = {
    header: "Certifications",
    certs: [
        {
            title: "Computer Gaming",
            sponsor: "Arizona State University", // where it came from
            logo: "",
            date: "May 6, 2024", //date awarded
            description: ""  // link to distributor (if there is one
        },
        {
            title: "Symbolic, Cognitive and Linguistic Systems",
            sponsor: "Arizona State University", // where it came from
            logo: "",
            date: "May 6, 2024", //date awarded
            description: ""  // link to distributor (if there is one
        }
    ],

    display: false
};

export {
    greeting,
    projects,
    gameJams,
    currentDev,
    certs
};
