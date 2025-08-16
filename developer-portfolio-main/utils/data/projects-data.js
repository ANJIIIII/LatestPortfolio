import blog from '/public/image/blog.png';
import Donar from '/public/image/donar.png';
import nest from '/public/image/nest.png';
import ngo from '/public/image/ngo.png';
import petcure from '/public/image/petcure.png';
import travel from '/public/image/travel.png';
import realEstate from '/public/image/real-estate.jpg';


export const projectsData = [
     {
        id: 4,
        name: 'PetCure',
        description: "Developed a full-stack ERP web application for a pet resort, enabling seamless management of pets, inventory, and operational processes.",
        tools: ['ReactJs', 'NodeJs', 'Tailwind', 'MongoDB','Redux'],
        code: 'https://github.com/ANJIIIII/VetBuddy',
        demo: 'https://vet-buddy-ft6i.vercel.app/',
        image: petcure,
        role: 'Full Stack Developer',
    },
    {
        id: 1,
        name: 'Donar Deck',
        description: "Built a MERN stack inventory management system with secure Role Based Access Control for controlled access and compliance.",
        tools: [ 'ReactJs', 'Redux', 'NodeJs', 'ExpressJs', 'MongoDB','HTML', 'CSS', 'Js'],
        role: '',
        code: 'https://github.com/ANJIIIII/Donar-Deck',
        demo: 'https://donar-deck-vae5.vercel.app/',
        image: Donar,
    },
    {
        id: 2,
        name: 'NestMart',
        description: "Designed an interactive React.js e-commerce store with intuitive cart management and data fetching via APIs. Tailwind CSS ensures a beautiful and adaptable user experience",
        tools: [ 'Js', 'ReactJs', 'Redux', 'NodeJs', 'ExpressJs', 'MongoDB'],
        role: '',
        code: 'https://github.com/ANJIIIII/E-commerce-webApp',
        demo: 'https://elaborate-klepon-3945d3.netlify.app/',
        image: nest,
    },
    {
        id: 3,
        name: 'Blog App',
        description: "Crafted a high-performing React.js blog platform featuring dynamic interactions for increased user engagement, optimized performance for a seamless experience, and granular search by tags and categories for efficient content discovery.",
        tools: ['Reactjs', 'javascript', 'Tailwind CSS'],
        role: '',
        code: 'https://github.com/ANJIIIII/Blog-Web-App',
        demo: 'https://exquisite-torrone-db545a.netlify.app/',
        image: blog,
    },
      {
        id: 4,
        name: 'Roam Realm',
        description: "A demonstration travel website showcasing my frontend skills, highlighting destinations, activities, and experiences for travelers",
        tools: ['HTML', 'CSS', 'javascript', 'tailwind'],
        code: 'https://github.com/ANJIIIII/RoamRealm',
        demo: 'https://roamrealm.netlify.app/',
        image: travel,
        role: 'Full Stack Developer',
    },  {
        id: 4,
        name: 'NGO Website',
        description: "A static website designed to facilitate pet donations, providing a user-friendly platform to support animal welfare",
        tools: ['ReactJs', 'tailwind'],
        code: 'https://www.doggosheaven.org/',
        demo: 'https://www.doggosheaven.org/',
        image: ngo,
        role: 'Full Stack Developer',
    }, 
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },