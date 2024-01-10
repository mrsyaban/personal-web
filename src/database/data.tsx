import { FaReact, FaPython } from "react-icons/fa";
import {
  SiNextdotjs, 
  SiTailwindcss, 
  SiOpencv,
  SiNumpy,
  SiChakraui,
  SiAxios,
  SiVite,
  SiExpress,
  SiPrisma,
  SiPhp
} from "react-icons/si";

export const careerData = [
    {
        position: 'Fullstack Engineer Freelancer',
        company: 'EBSI Institute',
        date: 'Dec 2023 - Present',
        description:
            [
            'Collaborated with three team members to construct a comprehensive company profile, currently extending to two pages for public viewing and five pages for administrative purposes, leveraging the MERN tech stack.',
            'Created a responsive web application using React.js, Vite, and Shadcn for styling.',
            "Developed a server for the admin dashboard using Express.js and implemented database storage using MongoDB.",
            'Established a CI/CD pipeline at Vercel and configured a custom domain for the website'
            ],
        link: 'https://www.ebsinstite.id',
    },
    {
        position: 'Frontend Engineer',
        company: 'OSKM ITB 2023',
        date: 'June 2023 - Aug 2023',
        description:[
            'Collaborate with team of developers with agile(scrum) methodology to build and optimize front-end systems using T3 stack, a fullstack typesafety with Next.js and Typescript as a core.',
            'Built interactive attendance page for OSKM ITB participant using tRPC(Typesafety Remote Procedural Call) API and ChakraUI component.',
            'Built merchandise page for admin side with search bar to find students by their NIM'
        ],
            link: 'https://www.linkedin.com/company/comlabs-usdi-itb/',
    },
    {
        position: 'Frontend Engineer',
        company: 'Ganesha Student Innovation Summit',
        date: 'May 2023 - June 2023',
        description:[
            'Collaborate with multidisciplinary team of developers, designers, and stakeholders to create innovative web applications for five GSIS event',
            'Build and optimize front-end systems including jwt authentication and two side dashboard using React.js, Vite, and Tailwind'
        ],
            link: 'https://www.linkedin.com/company/comlabs-usdi-itb/',
    },
    {
        position: 'Back End Engineer',
        company: 'Parade Wisuda ITB',
        date: 'Jan 2023 - Apr 2023',
        description: [
        'Build and developing website of parade wisuda ITB include graduates projects showcase and provide all of information of parade wisuda ITB',
        'Collaborate with team of developers to build the website using express.js and deploy it in cPanel'
        ],
        link: 'https://www.linkedin.com/company/comlabs-usdi-itb/',
    },
    {
        position: 'Controls Engineer',
        company: 'Viva La Ganesha',
        date: 'Mar 2022 - Present',
        description: [
        'Collaborate with multidisciplinary team to build a hexapod robot.',
        ],
        link: 'https://www.linkedin.com/company/comlabs-usdi-itb/',
    },
    {
        position: 'Computer Lab Assistant',
        company: 'Comlabs-USDI ITB',
        date: 'Sept 2022 - Dec 2022',
        description: [
            'Guide, assist, and score every test of first-year students on Introduction to Computing practice using Python programming language.',
        ],
        link: 'https://www.linkedin.com/company/comlabs-usdi-itb/',
    },
];

export const projectData = [
    {
        title: 'Podcast App Project',
        url: 'https://github.com/mrsyaban/wbd-client-spa',
        image: "bg-[url('./assets/images/podcast.png')]",
        tools: [
            <FaReact size={25}/>,
            <SiExpress size={25}/>,
            <SiPrisma size={25}/>,
            <SiPhp size={25}/>,
        ],
    },
    {
        title: 'EBSI Institute Profile Page',
        url: 'https://ebsinstitute.id/',
        image: "bg-[url('./assets/images/ebsi.png')]",
        tools: [
            <FaReact size={25}/>,
            <SiVite size={25}/>
        ],
    },
    {
        title: 'ChatGPT Lite',
        url: 'https://github.com/mrsyaban/ChatGPT-Lite',
        image: "bg-[url('./assets/images/chatgptlite.png')]",
        tools: [
            <SiNextdotjs size={25}/>,
            <SiTailwindcss size={25}/>,
            <SiAxios size={25}/>
        ],
    },
    {
        title: 'Face Recognition App',
        url: 'https://github.com/mrsyaban/EigenFace-Recognition',
        image: "bg-[url('./assets/images/face_recognition.png')]",
        tools: [
            <FaPython size={25}/>,
            <SiOpencv size={25}/>,
            <SiNumpy size={25}/>
        ],
    },
    {
        title: 'Shortest Route Finder',
        url: 'https://github.com/mrsyaban/Shortest-route-finder',
        image: "bg-[url('./assets/images/shortest_route.png')]",
        tools: [
            <FaReact size={25}/>,
            <SiChakraui size={25}/>
        ],
    },
]

export const awardsData = [
    {
        title: 'Finalist of Data Analytics Dash of Compfest 15',
        description: [
            'Tackling 65 SQL-related questions using PostgreSQL within a 4-hour time limit and become Top 1 among the top 15 out of 700 teams from across Indonesia in preliminary phase. and present tableau dashboard in final round',
        ],
    },
    {
        title: 'Beswan Djarum Scholarship Awardee',
        description: [
            'Selected as 500 out of 15.000+ applicants all over 98 Djarum Beasiswa Plus university partners across indonesia.',
        ],
    },
    {
        title: 'Silver medalist of Physics on OSN SMA',
        description: [
            'demonstrating critical thinking and problem-solving skills in a highly competitive and rigorous academic competition to outperform 30,000+ participants.',
        ],
    },
]