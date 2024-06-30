const greeting = {
    username: "Orion Dobos",
    title: "Orion Dobos",
    subTitle: "Game Developer and Computer Engineer",
    display: true
};

const skills = {
    title: "Skills",
    subTitle: "Some of my skills!",
    skills: [
        {
            name: "HTML5",
            logo: require("./assets/images/skillLogos/htmlLogo.png")
        },
        {
            name: "C++",
            logo: require("./assets/images/skillLogos/cppLogo.png")
        },
        {
            name: "C#",
            logo: require("./assets/images/skillLogos/csharpLogo.png")
        },
        {
            name: "Python",
            logo: require("./assets/images/skillLogos/pythonLogo.png")
        },
        {
            name: "Unity",
            logo: require("./assets/images/skillLogos/unityLogo.png")
        },
        {
            name: "Unreal",
            logo: require("./assets/images/skillLogos/unrealLogo.png")
        }
    ],
    display: true
};

const experience = {
    title: "Experience",
    experience: [
        {
            role: "Extended Reality Creative Developer",
            company: "Meteor Studio",
            logo: require("./assets/images/MeteorStudioLogo2018.png"),
            date: "June 2022 - Present",
            description: "",
            descBullets: [
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
            role: "Teachers Assistant",
            company: "Ira A. Fulton Fulton Schools of Engineering",
            logo: require("./assets/images/fultonLogo.png"),
            date: "August 2022 - May 2024",
            description: "",
            descBullets: [
                "Aided students in programming and debugging their projects in Gamemaker Studio and the \n" +
                "Unity Game Engine throughout the semester.",
                "Led a lecture series on integrating multiplayer systems within a Unity project.",
                "Created a website that contains class resources for present and future students to utilize in their \n" +
                "studies."
            ]
        },
        {
            role: "SCAI Mentor",
            company: "SCAI Academic Advising Office",
            logo: require("./assets/images/fultonLogo.png"),
            date: "May 2022 - December 2023",
            description: "",
            descBullets: [
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
            name: "",
            logo: "",
            description: "",
            footerLink: [
                {
                    name: "",
                    url: ""
                }
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
            name: "Arizona State University",
            logo: require("./assets/images/asuLogo.png"),
            degree: "Bachelor of Science in Engineering in Computer Systems Engineering",
            duration: "August 2020 - May 2024",
            gpa: "3.89 / 4.00"
        }
    ],

    display: true
};

const certs = {
    title: "Certifications",
    certs: [
        {
            name: "",
            dist: "",
            link: "",
            date: ""
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