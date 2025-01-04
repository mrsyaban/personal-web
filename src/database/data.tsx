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
  SiPhp
} from "react-icons/si";

const tools = {
    "Express.js": "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
    "NestJS": "https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white",
    "Deno JS": "https://img.shields.io/badge/deno%20js-000000?style=for-the-badge&logo=deno&logoColor=white",
    "Bun": "https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white",
    "Django": "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white",
    "Flask": "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
    "FastAPI": "https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi",
    "Spring": "https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white",
    "Sequelize": "https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white",
    "Prisma": "https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white",
    "JWT": "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens",
    "Strapi": "https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white",
    "jQuery": "https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white",
    "Webpack": "https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black",
    "React.js": "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    "Vite": "https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white",
    "Next JS": "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
    "Ant-Design": "https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white",
    "Chakra": "https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white",
    "MUI": "https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white",
    "React Hook Form": "https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white",
    "React Query": "https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white",
    "React Router": "https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white",
    "TailwindCSS": "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
    "WebGL": "https://img.shields.io/badge/WebGL-990000?logo=webgl&logoColor=white&style=for-the-badge",
    "Python": "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
    "R": "https://img.shields.io/badge/r-%23276DC3.svg?style=for-the-badge&logo=r&logoColor=white",
    "C++": "https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white",
    "C#": "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white",
    "C": "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white",
    "Java": "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white",
    "Kotlin": "https://img.shields.io/badge/Kotlin-0095D5?&style=for-the-badge&logo=kotlin&logoColor=white",
    "Haskell": "https://img.shields.io/badge/Haskell-5e5086?style=for-the-badge&logo=haskell&logoColor=white",
    "HTML5": "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    "CSS": "https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white",
    "JavaScript": "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    "TypeScript": "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
    "Go": "https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
    "PHP": "https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white",
    "MySQL": "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white",
    "Postgres": "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
    "MariaDB": "https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white",
    "SQLite": "https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white",
    "MongoDB": "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
    "Redis": "https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white",
    "Firebase": "https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white",
    "Amazon DynamoDB": "https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white",
    "Couchbase": "https://img.shields.io/badge/Couchbase-EA2328?style=for-the-badge&logo=couchbase&logoColor=white",
    "Apache Cassandra": "https://img.shields.io/badge/cassandra-%231287B1.svg?style=for-the-badge&logo=apache-cassandra&logoColor=white",
    "Neo4J": "https://img.shields.io/badge/Neo4j-008CC1?style=for-the-badge&logo=neo4j&logoColor=white",
    "ElasticSearch": "https://img.shields.io/badge/-ElasticSearch-005571?style=for-the-badge&logo=elasticsearch",
    "Docker": "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white",
    "Heroku": "https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white",
    "Google Cloud": "https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white",
    "AWS": "https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white",
    "Azure": "https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white",
    "DigitalOcean": "https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&logo=digitalOcean&logoColor=white",
    "GitLab": "https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white",
    "Postman": "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
    "Jira": "https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white",
    "Confluence": "https://img.shields.io/badge/confluence-%23172BF4.svg?style=for-the-badge&logo=confluence&logoColor=white",
    "Trello": "https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white",
    "Figma": "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
    "Canva": "https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white",
    "Apache": "https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white",
    "Apache Tomcat": "https://img.shields.io/badge/apache%20tomcat-%23F8DC75.svg?style=for-the-badge&logo=apache-tomcat&logoColor=black",
    "Nginx": "https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white",
    "Yarn": "https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white",
    "Android Studio": "https://img.shields.io/badge/Android%20Studio-3DDC84.svg?style=for-the-badge&logo=android-studio&logoColor=white",
    "OpenCV": "https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white",
    "TensorFlow": "https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white",
    "Keras": "https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white",
    "PyTorch": "https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white",
    "NumPy": "https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white",
    "Pandas": "https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white",
    "scikit-learn": "https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white",
    "Tkinter": "https://img.shields.io/badge/Tkinter-%23FF4500.svg?style=for-the-badge&logo=python&logoColor=white",
    "PyQt": "https://img.shields.io/badge/PyQt-%2300C853.svg?style=for-the-badge&logo=qt&logoColor=white",
};
export const careerData = [
    {
        position: 'Machine Learning Cohort',
        company: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
        date: 'Sept 2024 - Present',
        description:
            [
            'Selected as one of 4,636 students (≈10%) out of over 45,000 applicants across Indonesia for an intensive Machine Learning program.',
            'Completed 25+ online courses along with three specializations in data analysis, machine learning, deep learning, and generative AI.',
            'Developed a final project application that connects UMKM (micro, small, and medium enterprises) with investors, facilitating funding opportunities for UMKM businesses and incorporating an AI-powered recommendation system.',
            ],
        link: 'https://www.youtube.com/watch?v=Utn2ijPi5uo',
    },
    {
        position: 'Software Engineer Intern',
        company: 'NalaGenetics',
        date: 'Jun 2024 - Aug 2024',
        description:
            [
                'Provided continuous support and maintenance for software that delivers end-to-end automation of the company\'s business processes, ensuring smooth operations and efficiency',
                'Worked within a full Scrum methodology using Jira to manage the development and maintenance of Clinical Decision Support (CDS) systems, utilizing MEAN stack technology',
                'Contributed to migrating legacy code to a newly designed, well-structured backend architecture, improving system efficiency and scalability',
                'Implemented 100% code coverage through unit testing for every new feature, ensuring robust functionality, reliability, and high-quality code',
                'Tech used: angular, express, node.js, mongodb, mysql, sonarcloud, mocha, chai, cypress, busboy, Sonarlint, Amazon S3, grafana, Amazon SQS',
            ],
        link: 'https://nalagenetics.com/',
    },
    {
        position: 'Frontend Engineer Intern',
        company: 'Thinkspedia',
        date: 'Mar 2024 - Jul 2024',
        description:
            [
             'Designed and implemented a school employee management system from scratch using Hexagonal Architecture with Next.js, ensuring a clean and maintainable code structure',
             'Leveraged Inversify for dependency injection, creating a modular and scalable codebase to enhance system flexibility and performance',
             'Developed an internal employee management website using Next.js, optimizing functionality and user experience for seamless internal operations',
             'Implemented responsive and modular UI components using Tailwind CSS and Shadcn, ensuring a flexible and adaptive user interface across devices',
            ],
        link: 'https://thinkspedia.com/',
    },
    {
        position: 'Fullstack Engineer Freelancer',
        company: 'EBSI Institute',
        date: 'Dec 2023 - Feb 2024',
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
            link: 'https://github.com/KATITB2023',
    },
    {
        position: 'Frontend Engineer',
        company: 'Ganesha Student Innovation Summit',
        date: 'May 2023 - Jun 2023',
        description:[
            'Collaborate with multidisciplinary team of developers, designers, and stakeholders to create innovative web applications for five GSIS event',
            'Build and optimize front-end systems including jwt authentication and two side dashboard using React.js, Vite, and Tailwind'
        ],
            link: 'https://www.linkedin.com/company/ganesha-student-innovation-summit/',
    },
    {
        position: 'Back End Engineer',
        company: 'Parade Wisuda ITB',
        date: 'Jan 2023 - Apr 2023',
        description: [
        'Build and developing website of parade wisuda ITB include graduates projects showcase and provide all of information of parade wisuda ITB',
        'Collaborate with team of developers to build the website using express.js and deploy it in cPanel'
        ],
        link: 'https://www.instagram.com/paradewisudaitb/',
    },
    {
        position: 'Programmer',
        company: 'Viva La Ganesha',
        date: 'Mar 2022 - Jan 2024',
        description: [
        'Collaborated with a diverse team of engineers, designers, and programmers to design and assemble a functional hexapod robot, leveraging each member\'s expertise to ensure seamless integration of components.',
        'Developed and implemented sophisticated control algorithms that enable the hexapod to navigate complex terrains with stability and precision.',
        'Integrated sensor systems and adaptive logic to enhance the robot\'s responsiveness and autonomy, allowing it to perform tasks efficiently in various environments',
        ],
        link: 'https://www.instagram.com/vivalaganesha/?hl=en',
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
        desc: [
            'Developed a podcast web application include a premium and regular user feature using REST and SOAP Protocol',
            'The regular user application build with monolithic PHP \'Vanilla\' while the premium user application build with React, Vite, Typescript, and Tailwind',
            'There are three server web service: PHP and Express.js using HTTP Protocol, and JAX WS using SOAP Protocol.',
            'Implemented Docker to orchestrate and run all services simultaneously across environments',
            'Written in ~14,000 LOC within 5 different repositories (50% Php, 40% Javascript, 10% Java)'
        ],
        url: 'https://github.com/mrsyaban/wbd-client-spa',
        image: "bg-[url('./assets/images/podcast.png')]",
        tools: [
            <FaReact size={25}/>,
            <SiExpress size={25}/>,
            <SiPhp size={25}/>,
        ],
        toolsPatch: [
            tools["Express.js"],
            tools["React.js"],
            tools["Vite"],
            tools["JWT"],
            tools["Prisma"],
            tools["TailwindCSS"],
            tools["PHP"],
            tools["Java"],
            tools["TypeScript"],
            tools["MySQL"],
            tools["Docker"],
            tools["Postman"],
            tools["GitLab"],
        ]
    },
    {
        title: 'EBSI Institute Profile Page',
        desc: [
            "Developed a comprehensive company profile website using the MERN (MongoDB, Express, React, Node) tech stack, delivering a dynamic and user-friendly platform",
            "Built an admin dashboard feature for company administrators to easily manage website content, including adding and updating events and articles.",
            "Established a continuous deployment pipeline using Vercel.",
        ],
        url: 'https://ebsinstitute.id/',
        image: "bg-[url('./assets/images/ebsi.png')]",
        tools: [
            <FaReact size={25}/>,
            <SiVite size={25}/>
        ],
        toolsPatch: [
            tools["Express.js"],
            tools["React.js"],
            tools["Vite"],
            tools["Prisma"],
            tools["MongoDB"],
            tools["TypeScript"],
            tools["Postman"],
            tools["TailwindCSS"],
        ]
    },
    {
        title: 'ChatGPT Lite',
        desc: [
            'The application is a basic chatbot leveraging Knuth-Morris-Pratt (KMP) and Boyer-Moore (BM) string matching algorithms to find the closest match to user questions from a predefined database.',
            'Regex is used to ensure that questions conform to specific formats.',
            'If an exact match for the user\'s question is found using KMP or BM, the chatbot provides the corresponding answer',
            'If no exact match is found, it looks for the most similar question with at least 90% similarity',
            'If no question meets the 90% threshold, the chatbot offers the user up to 3 closest matches to choose from',
            'The application is built using React and Tailwind CSS for the frontend and Next.js for the backend, providing a modern, responsive, and dynamic web-based interface.'
        ],
        url: 'https://github.com/mrsyaban/ChatGPT-Lite',
        image: "bg-[url('./assets/images/chatgptlite.png')]",
        tools: [
            <SiNextdotjs size={25}/>,
            <SiTailwindcss size={25}/>,
            <SiAxios size={25}/>
        ],
        toolsPatch: [
            tools["Next JS"],
            tools["React.js"],
            tools["TypeScript"],
            tools["TailwindCSS"],
        ]
    },
    {
        title: 'Face Recognition App',
        desc: [
            'Build a desktop app to recognize a faces in dataset by comparing the eigen vector with query image.',
            'The Eigenfaces method for face recognition utilizes Principal Component Analysis (PCA) to reduce the dimensionality of facial images, identifying key features that capture the most variance among different faces',
            'By projecting new face images onto this reduced feature space, the system can compare them to known faces and determine the closest match, effectively recognizing the individual.',
            'Algorithm reference:\n https://www.geeksforgeeks.org/ml-face-recognition-using-eigenfaces-pca-algorithm/'
        ],
        url: 'https://github.com/mrsyaban/EigenFace-Recognition',
        image: "bg-[url('./assets/images/face_recognition.png')]",
        tools: [
            <FaPython size={25}/>,
            <SiOpencv size={25}/>,
            <SiNumpy size={25}/>
        ],
        toolsPatch: [
            tools["Python"],
            tools["OpenCV"],
            tools["NumPy"],
            tools["Tkinter"],

        ]
    },
    {
        title: 'Shortest Route Finder',
        desc: [
            'This project is a program designed to find the shortest path in a graph, where the graph is generated from an input file. The input file is a JSON file containing an adjacency matrix and coordinates for each node. Node IDs always start from 1 and increment sequentially',
            'Users specify the start and target nodes for which they want to find the shortest path based on graph labels displayed. They then select the algorithm to compute the shortest path and click the "run" button to initiate the calculation',
            'The program calculates and displays the shortest path in the graph, highlighting the path in green for easy visualization',
        ],
        url: 'https://github.com/mrsyaban/Shortest-route-finder',
        image: "bg-[url('./assets/images/shortest_route.png')]",
        tools: [
            <FaReact size={25}/>,
            <SiChakraui size={25}/>
        ],
        toolsPatch: [
            tools["React.js"],
            tools["Chakra"],
            tools["JavaScript"]
        ]
    },
]

export const awardsData = [
    {
        title: 'Student Award Winner AI Innovation Challenge of Compfest 16',
        description: [
            'Achieved top 2% ranking out of 212 teams in developing an AI-based solution to address the shortage of digital talent in Indonesia.',
            'The competition held by Faculty of Computer Science University of Indonesia',
        ],
    },
    {
        title: '2nd Winner of Web Development Competition of IFEST',
        description: [
            'Developing a web-based solution that leverages AI to help job seekers land their dream jobs.',
            'The competition held by Padjadjaran University'
        ],
    },
    {
        title: 'Finalist of Data Analytics Dash of Compfest 15',
        description: [
            'Tackling 65 SQL-related questions using PostgreSQL within a 4-hour time limit and become Top 1 among the top 15 out of 700 teams from across Indonesia in preliminary phase. and present tableau dashboard in final round',
            'The competition held by Faculty of Computer Science University of Indonesia',
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

