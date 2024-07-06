const greeting = {
    username: "Orion Dobos",
    title: "Orion Dobos",
    logo: require("./assets/images/roboSit.gif"),
    subTitle: "Game Developer and Computer Engineer",
    display: true
};

const skills = {
    title: "Skills",
    subTitle: "Some of my skills!",
    softwareSkills: [
        {
            name: "HTML5",
            logo: require("./assets/images/skillLogos/htmlLogo.png"),
            fontAwesome: "fab fa-html5"
        },
        {
            name: "C++",
            logo: require("./assets/images/skillLogos/cppLogo.png"),
            fontAwesome: ""
        },
        {
            name: "C#",
            logo: require("./assets/images/skillLogos/csharpLogo.png"),
            fontAwesome: ""
        },
        {
            name: "Python",
            logo: require("./assets/images/skillLogos/pythonLogo.png"),
            fontAwesome: "fab fa-python"
        },
        {
            name: "Unity",
            logo: require("./assets/images/skillLogos/unityLogo.png"),
            fontAwesome: "fab fa-unity"
        },
        {
            name: "Unreal",
            logo: require("./assets/images/skillLogos/unrealLogo.png"),
            fontAwesome: ""
        }
    ],
    display: true
};

const experience = {
    title: "Experience",
    experience: [
        {
            title: "Extended Reality Creative Developer",
            subTitle: "Meteor Studio",
            logo: require("./assets/images/MeteorStudioLogo2018.png"),
            date: "June 2022 - Present",
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
            subTitle: "Ira A. Fulton Fulton Schools of Engineering",
            logo: require("./assets/images/fultonLogo.png"),
            date: "August 2022 - May 2024",
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
            subTitle: "SCAI Academic Advising Office",
            logo: require("./assets/images/fultonLogo.png"),
            date: "May 2022 - December 2023",
            description: "",
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
    title: "Professional Projects",
    projects: [
        {
            title: "",
            logo: "",
            description: "",
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
    title: "Education",
    schools: [
        {
            title: "Arizona State University",
            subTitle: "Bachelor of Science in Engineering in Computer Systems Engineering",
            logo: require("./assets/images/asuLogo.png"),
            date: "August 2020 - May 2024",
            description: "3.89 / 4.00"
        }
    ],

    display: true
};

const certs = {
    title: "Certifications",
    certs: [
        {
            title: "",
            subTitle: "", // where it came from
            logo: "",
            date: "",
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