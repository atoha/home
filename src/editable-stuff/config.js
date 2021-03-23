// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Gufron",
  middleName: "",
  lastName: "Atokhojaev",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/atoha",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/gufronato/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/toha_gufron/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/gatokhojaev/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/gatokhojaev/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/gufronato.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/gufronato.png"),
  imageSize: 375,
  message:
    "My name is Gufron Atokhojaev. Experienced Software Developer, Software Architect and Enterprise Architect with a demonstrated history of working in finance, logistic and energy industry. Skilled in Enterprise Development, Java, C++, C#, Python, PHP and JavaScript. Strong engineering professional with a Master Degree in Computer Science from University Bonn.",
  resume: "https://drive.google.com/file/d/14YBB2nMKOAftlWH05-fCqD09XRrFGxpi/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "atoha", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/gufronato.png"),
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/gufronato.png"),
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  eaSkills: [
    { name: "Communications", value: 95 },
    { name: "Group session facilitation", value: 90 },
    { name: "Team leadership", value: 95 },
    { name: "Marketing of Architecture", value: 80 },
    { name: "Analysis and design", value: 90 },
    { name: "Developing the Enterprise Architecture", value: 80 },
    { name: "Influencing business strategy", value: 95 },
    { name: "Management of Architecture", value: 90 },
  ],
  hardSkills: [
    { name: "Python", value: 95 },
    { name: "SQL", value: 90 },
    { name: "Data Structures", value: 95 },
    { name: "C/C++", value: 80 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 80 },
    { name: "Java", value: 95 },
    { name: "C#", value: 90 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 85 },
    { name: "Collaboration", value: 95 },
    { name: "Positivity", value: 80 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 95 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 80 },
    { name: "Creativity", value: 95 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I am currently involved in several projects in the finance, security, eGov sector and building it-solutions in the cloud, hyperscale, enterprise and data analytics fields. If you have interest in my field of work, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "contact@gufron.io",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Enterprise Architect at Bechtle AG',// Here Add Company Name
      companylogo: require('../assets/img/bechtle.png'),
      date: 'June 2020 – Present',
    },
    {
      role: 'Enterprise Architect at Nets Group',
      companylogo: require('../assets/img/nets.png'),
      date: 'October 2019 – May 2020',
    },
    {
      role: 'Software Architect at Concardis GmbH',
      companylogo: require('../assets/img/concardis.png'),
      date: 'July 2016 – September 2019',
    },
    {
      role: 'Senior Software Developer at Kisters AG',
      companylogo: require('../assets/img/kisters.png'),
      date: 'July 2013 – June 2016',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
