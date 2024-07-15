const greeting = {
    name: "Orion Dobos",
    logo: require("./assets/images/roboSit.gif"),
    headshot: require("./assets/images/dreamscape-headshot.jpg"),
    subtitle: "Game Developer and Computer Engineer",
    aboutMe: "Hi, I’m Orion! I’m a computer systems engineer and avid game developer. \nI love all things programming, whether it's embedded software development, computer networking, or game dev. ",

    resources: [
        {
            name: "Resume",
            link: "https://drive.google.com/file/d/1Yt7-fISP1QFYDDpBlxm9VXHrk4WSn9aL/view?usp=sharing",
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

const skills = {
    title: "Skills",
    softwareTitle: "Technical Skills",
    softwareSkills: [
        {
            name: "HTML5",
            logo: require("./assets/images/logos/htmlLogo.png"),
            fontAwesome: "fab fa-html5"
        },
        {
            name: "C++",
            logo: require("./assets/images/logos/cppLogo.png"),
            fontAwesome: ""
        },
        {
            name: "C#",
            logo: require("./assets/images/logos/csharpLogo.png"),
            fontAwesome: ""
        },
        {
            name: "Python",
            logo: require("./assets/images/logos/pythonLogo.png"),
            fontAwesome: "fab fa-python"
        },
        {
            name: "Unity",
            logo: require("./assets/images/logos/unityLogo.png"),
            fontAwesome: "fab fa-unity"
        },
        {
            name: "Unreal",
            logo: require("./assets/images/logos/unrealLogo.png"),
            fontAwesome: ""
        }
    ],
    display: false
};

const experience = {
    header: "Experience",
    experience: [
        {
            title: "Extended Reality Creative Developer",
            company: "Meteor Studio",
            logo: require("./assets/images/logos/MeteorStudioLogo2018.png"),
            duration: "June 2022 - Present",
            description: "",
            link: "https://meteor.ame.asu.edu/",
            bullets: [
                "Lead developer for Planetary Parfait, an award-winning virtual reality application that utilizes \n" +
                "the Unity Game Engine to build 3D terrains using remote-sensing data from GIS tools.",
                "Coordinated the Cloud Infrastructure Guild at Meteor Studio, with a focus on upskilling \n" +
                "students on various cloud systems and architectural solutions to be used for prevProjects in and out \n" +
                "of the lab.",
                "Implemented multiplayer mechanics for ROAM, an interactive VR experience spanning across \n" +
                "ASU’s Mountain America Stadium."
            ]
        },
        {
            title: "Teachers Assistant",
            company: "Ira A. Fulton Fulton Schools of Engineering",
            logo: require("./assets/images/logos/sunburstLogo.png"),
            duration: "August 2022 - May 2024",
            description: "",
            bullets: [
                "Aided students in programming and debugging their prevProjects in Gamemaker Studio and the \n" +
                "Unity Game Engine throughout the semester.",
                "Led a lecture series on integrating multiplayer systems within a Unity project.",
                "Created a website that contains class resources for present and future students to utilize in their \n" +
                "studies."
            ]
        },
        {
            title: "SCAI Mentor",
            company: "SCAI Academic Advising Office",
            logo: require("./assets/images/logos/fultonLogo.png"),
            duration: "May 2022 - December 2023",
            description: "",
            link: "https://scai.engineering.asu.edu/scai-mentors/",
            bullets: [
                "Worked with incoming and current freshman SCAI students to help ease them into their first \n" +
                "year at ASU.",
                "Panelist for SCAI’s the Limit events, offering advice and answering questions for freshman \n" +
                "students studying at ASU.",
                "Aided the SCAI advising office with ASU101 advising classes."
            ]
        }
    ],
    display: false
};

const projects = {
    header: "Previous Projects",
    projects: [
        {
            title: "Haptic Media Controller",
            sponsor: "Systems Capstone Project",
            logo: require("./assets/images/games/ditdScene.png"),
            role: "Project Lead, Embedded Programming",
            description: "A haptic device that controls media playback and user interface within virtual reality experiences.",
            bullets: [

            ]
        },
        {
            title: "Dwarves in the Dark",
            sponsor: "Game Capstone Project",
            logo: require("./assets/images/games/ditdScene.png"),
            role: "Multiplayer & UI/UX Developer",
            description: "A multiplayer hack-and-slash where players traverse vast cave systems \n" +
                "and engage in interesting conversation with NPCs powered by OpenAI. ",
            bullets: [

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
            logo: "",
            role: "Lead Developer",
            description: "A software tool intended for scientist and researchers to view geospatial data within a three-dimensional context."
        },
        {
            title: "Portfolio",
            sponsor: "",
            logo: "",
            role: "Full Stack Development",
            description: "Developing this website as a tool to learn React, Javascript, HTML, and SCSS."
        }
    ],
    display: true
}

const gameDev = {
    title: "Game Development",
    games:
        [
            {
                name: "Casa Del Bicho",
                date: "April 2022 - May 2022",
                role: "UI/UX Programmer",
                roleSubtitle: "Programmed dialog, crafting mechanics, and all in-game menus.",
                link: "https://odobos.itch.io/casa-del-bicho",
                logo: "",
                description: "Casa Del Bicho is a casual exploration town builder game where the player must collect and craft items to restore their broken hometown."
            },
            {
                name: "Liminal Space",
                date: "October 2021 - December 2021",
                role: "Lead Programmer",
                roleSubtitle: "Programmed player mechanics, user interface, and collision physics.",
                link: "https://ingoopa.itch.io/liminal-space",
                logo: "",
                description: "Liminal Space is a 2D puzzle platformer from the perspective of a blinded adventurer traversing an unknown world."
            }
        ],
    display: true
}

const gameJams = {
    title: "Game Jams",
    games: [
        {
            name: "",
            date: "",
            jam: "",
            role: "",
            link: "",
            logo: "",
            description: ""
        }
    ],
    display: true
}

const education = {
    header: "Education",
    schools: [
        {
            school: "Arizona State University",
            degree: "Bachelor of Science in Engineering in Computer Systems Engineering",
            logo: require("./assets/images/logos/asuLogo.png"),
            duration: "August 2020 - May 2024"
        }
    ],

    display: false
};

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
    skills,
    experience,
    projects,
    education,
    gameDev,
    currentDev,
    certs
};