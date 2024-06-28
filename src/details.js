const greeting = {
    username: "Orion Dobos",
    title: "Orion Dobos",
    subTitle: "Game Developer and Computer Engineer",
    display: true
};

const skills = {
    title: "What I do",
    subTitle: "Some of my skills!",
    skills: [
        "skill number 1",
        "skill number 2"
    ],
    display: true
};

const experience = {
    title: "Experience",
    experience: [
        {
            role: "Extended Reality Creative Developer",
            company: "Meteor Studio",
            companyLogo: "",
            date: "June 2022 - Present",
            description: "",
            descBullets: [

            ]
        },
        {
            role: "Teachers Assistant",
            company: "",
            companyLogo: "",
            date: "",
            description: "",
            descBullets: [

            ]
        },
        {
            role: "SCAI Mentor",
            company: "",
            companyLogo: "",
            date: "",
            description: "",
            descBullets: ""
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
            logo: require("./assets/asuLogo.png"),
            degree: "Bachelor of Science in Engineering in Computer Systems Engineering",
            duration: "August 2020 - May 2024",
            gpa: "3.89 / 4.00"
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
    github
};