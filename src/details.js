const greeting = {
    username: "Orion Dobos",
    name: "Orion Dobos",
    logo: require("./assets/images/roboSit.gif"),
    subTitle: "Game Developer and Computer Engineer",
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
    display: true
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
                "students on various cloud systems and architectural solutions to be used for projects in and out \n" +
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
                "Aided students in programming and debugging their projects in Gamemaker Studio and the \n" +
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
    display: true
};

const projects = {
    header: "Projects",
    projects: [
        {
            title: "Planetary Parfait",
            sponsor: "Meteor Studio",
            logo: "",
            description: "A software tool intended for scientist and researchers to view geospatial data within a three-dimensional context.",
            bullets: [

            ]
        },
        {
            title: "Haptic Media Controller",
            sponsor: "Systems Capstone Project",
            logo: "",
            description: "A haptic device that controls media playback and user interface within the virtual reality experiences of Dreamscape Learn.",
            bullets: [

            ]
        },
        {
            title: "Dwarves in the Dark",
            sponsor: "Game Capstone Project",
            logo: "",
            description: "A multiplayer hack-and-slash where players traverse vast cave systems \n" +
                "and engage in interesting conversation with NPCs powered by OpenAI. ",
            bullets: [

            ]
        }
    ],
    display: true
};

const github = {
    title: "Personal Projects",
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

    display: true
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

    display: true
};

const resume = {
    title: "Download my resume!",
    display: true
};

export {
    greeting,
    skills,
    experience,
    projects,
    education,
    resume,
    github,
    certs
};