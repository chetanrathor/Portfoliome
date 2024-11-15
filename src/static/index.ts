import { IconType } from "../constants/common.constants"

export const utils = {
    iconRedirectionPath: [
        { link: `https://www.linkedin.co.in/chetan-rathor`,identifier:IconType.LinkedIn  },
        { link: `https://www.github.com/chetanrathor`,identifier:IconType.GitHub  },
        { link: `https://www.facebook.com`,identifier:IconType.Facebook },
        // { link: `https://www.twitter.com`,identifier:IconType. },
        { link: `https://www.instagram.com`, identifier:IconType.Instagram },
    ],
    copyRightText: ``,
    email: `chetan.rathor.dev@gmail.com`,
    phone: ``
}

export const hero = {
    headingFirst: `Full Stack MERN Developer`,
    headingSecond: `Chetan S. Rathor`,
    subTitle: `Dynamic full-stack MERN developer with over two years of experience, adept in Node.js, React, Express, and MongoDB, delivering high-quality, scalable solutions across domains.`,
    buttonText: 'LEARN MORE'
}

export const aboutMe = {
    subTitle: `Passionate Full Stack MERN Developer Dedicated To Excellence.`,
    heading: `Developing With a Passion While Exploring The World.`,
    leftSection: {
        one: `Proficient and hands-on in a wide array of full-stack technologies, including JavaScript, TypeScript, Node.js, React, and Express, I excel at building efficient, scalable web applications. With direct experience in MongoDB, PostgreSQL, Redis, and Docker, I ensure seamless data management, optimized server performance, and reliable deployment practices, enabling robust and streamlined workflows.`,
        two: ``
    },
    rightSection: {
        one: `I excel in clear, effective communication, which enhances collaboration with team members, clients, and stakeholders alike. My ability to listen, understand requirements, and articulate technical concepts fosters a positive, solution-driven environment that ensures all project members are aligned toward shared goals.`,
        two: `With a proactive approach to challenges, I bring strong leadership and critical thinking skills to every task. I’m dedicated to finding efficient, innovative solutions to complex issues, balancing attention to detail with big-picture strategy to consistently deliver high-quality results within deadlines.`
    },
    sectionHero: {
        path: `meta_comp.png`,
        height: '420px',
        width: '420px'

    },
    buttonText: `Contact Us`
}

export const servicesProvidingMe = {
    subTitle: ` Providing Excellent Solutions for All Your Business Needs`,
    services: [
        {
            title: `Fron End Development`,
            description: `We craft intuitive, visually striking interfaces using React, Redux, and top-tier UI frameworks like Material UI. Our frontend expertise ensures a seamless, engaging user experience that brings your vision to life, driving user satisfaction and retention. `,
            icon: {
                path: 'code.png',
                meta: {
                    imagePath: 'code.png',
                    height: '68px',
                    width: '68px'
                },
            }
        },
        {
            title: `Back End Development`,
            description: `Our backend services are designed for reliability and scalability. Using Node.js, Express, and MongoDB, we build secure infrastructures with optimized data handling and real-time capabilities to support complex, high-traffic applications, ensuring performance that grows with your business.`,
            icon: {
                path: 'gear.png',
                meta: {
                    height: '68px',
                    width: '68px'
                }
            }
        },
        {
            title: `Deployment`,
            description: `We ensure flawless deployments and resilient infrastructure management, leveraging Docker, AWS, and advanced CI/CD practices. Our approach minimizes downtime and maximizes application stability, providing peace of mind and consistent performance for your live environment.`,
            icon: {
                path: 'gear.png',
                meta: {
                    height: '68px',
                    width: '68px'
                }
            }
        },

    ],
    navigationIcon: ``
}

export const workExperince = {
    subTitle: `Transformed complex challenges into innovative solutions through collaborative teamwork and strategic thinking`,
    experiences: [
        [
            {
                title: `HTML & CSS`,
                year: `2022-Present`,
                subTitle: `Proficient in HTML and CSS, creating responsive, visually appealing web interfaces. Skilled in transforming designs into clean, efficient code, ensuring cross-browser compatibility and optimal user experience on all devices.`,
                progress: 75
            },
            {
                title: `React & Redux`,
                year: `2022-Present`,
                subTitle: `Specialized in React and Redux, building responsive, interactive UIs with efficient state management. Adept at developing reusable components and enhancing user experiences with seamless, data-driven interfaces.`,
                progress: 65
            }
        ],
        [
            {
                title: `JavaScript & TypeScript`,
                year: `2022-Present`,
                subTitle: `Experienced in JavaScript and TypeScript for building robust, scalable applications. Expertise in developing dynamic functionality, maintaining type safety, and leveraging both for smooth client-side and server-side operations.`,
                progress: 75
            },
            {
                title: `Node.js & Express`,
                year: `2022-Present`,
                subTitle: `Skilled in backend development using Node.js and Express, creating secure, scalable server-side applications. Expertise in RESTful APIs, middleware, and data handling for high-performance applications. &nbsp;`,
                progress: 80
            },
            {
                title: `MongoDB & PostgreSQL`,
                year: `2022-Present`,
                subTitle: `Seamless Data Integration with TypeORM and PostgreSQL: Leveraging Advanced Object-Relational Mapping and Robust Database Management for Efficient and Reliable Backend Development. &nbsp;&nbsp;&nbsp`,
                progress: 72
            },
        ]
    ],
}

export const myPortfolio = {
    subTitle: ``,
    portfolio: []
}

export const clientSays = {
    heading:`Endorsements Across Social Platforms`,
    subTitle: `See what others are saying about my work across LinkedIn and other platforms.`,
    clientReviews: [
        {
            avatar: `PALASH_SETHIYA.jpeg`,
            name: `Palash Sethiya`,
            review: `Highly recommend Chetan Rathor. Collaborated on Rated Driving Instructor project, demonstrating exceptional skills, dedication, and quick learning. A valuable asset to any team! &nbsp; &nbsp; &nbsp;`,

        },
        {
            avatar: `Aryan_PIDHIYA.jpeg`,
            name: `Aryan Pidhia`,
            review: `Chetan is detail-oriented, highly skilled in his tech stack, and understands business needs, applying his expertise to solve problems effectively. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `,

        },
        {
            avatar: `SACHIN_MUKSHA.jpeg`,
            name: `Sachin Muksha`,
            review: `Highly recommend Chetan Rathor. He showcased exceptional skills, dedication, and adaptability on our Tender Finance and Fantasy King projects. A quick learner and invaluable asset to any team he joins.`,

        }
    ]
}

export const stayInTouch = {
    subTitle: ``,
    inputBoxPlaceHolder: ``,
    buttonText: ``
}


export const aboutUsPage = {
    heading:'About Us',
    sectionA:{
        image:'',
        firstHalf:{
            heading:'Passionate Full Stack Developer Crafting Digital Experiences With Code',
            subHeading:'"I am a dedicated full-stack developer passionate about delivering impactful, user-centric solutions. My approach combines a commitment to excellence with an emphasis on continuous improvement, ensuring each project is optimized for performance and usability."',
            para1:`"Full Stack Alchemist: Transforming Ideas into Digital Realities Through Code, Design, and Imagination. Let's Craft Your Digital Success Story!"`,
            emailLabel:`Let's Stay in Touch: Email Me!`,
            email:'dev.chetan.rathor@gmail.com'
        },secondfHalf:{
            title:`"Full Stack Developer: Code Wizardry Ahead"`,
            heading:`With over two years of experience, I specialize in Node.js, Express, and MongoDB, implementing SOLID principles and optimizing system architecture. My work reflects a strong focus on clean code, efficient state management, and robust backend systems using tools like Docker, Redis, and AWS for deployment.`,
            para1:`Building Seamless Online Experiences with a Blend of Code Mastery, Design Aesthetics, and User-Centric Thinking. Let's Create Excellence!`,
            para2:`Elevating User Journeys Through Code, Design, and a Passion for Crafting Exceptional Digital Solutions. Your Success, My Priority!`
        }
    },
    sectionB:{
        heading:'',
        subTitle:`On the frontend, I’m skilled in React, Redux Toolkit, and SCSS, creating responsive UIs that enhance user engagement. On the backend, I have deep expertise in database management, RESTful APIs, and real-time data processing, using technologies like PostgreSQL, Firebase, Socket.io, and Twilio, integrating seamless, scalable solutions across platforms.`
    },
    sectionC:{
        heading:'',
        subHeading:`Let's Keep the Conversation Going - Connect, Collaborate, and Create Together for Future Success.`
    }
}

export const contactPage = {
    phone:{
        number:'+91 882 188 9586',
        availableTime:'Monday - Friday from 7am - 5pm'
    },
    address:{
        city:'Indore,India',
        street:'Madhya Pradeh'
    },
    email:{ 
        address:'chetanrathore3899@gmail.com',
        oneLiner:'Contact me every time!'
    }
}



export const Portfolios = [
    {
        name:'Rated Driving',
        description:'This project is a driving lesson scheduling app where users can book, track utilized and remaining hours, and manage schedules. Instructors can adjust availability, with the app automatically updating and marking busy times for seamless planning.',
        link:'https://www.rateddriving.com',
        image:'RDI.png'
    },
    {
        name:'Loadmee Logistics',
        description:'This project allows users to book vehicles for transporting goods. It provides real-time tracking, scheduling, and availability management, streamlining logistics for efficient and reliable delivery services. &nbsp;&nbsp;&nbsp;&nbsp;',
        link:'https://www.loadmee.com',
        image:'LOADMEE.png'
    },
    {
        name:'OnlyBets',
        description:'This project is a comprehensive casino and sports betting platform where users can place bets, track real-time odds, and manage their winnings, offering a secure and engaging experience for entertainment and gaming enthusiasts.',
        link:'https://www.onlybets.tv',
        image:'ONLYBETS.png'
    },
    {
        name:'PetShop',
        description:'This project is an online e-commerce platform dedicated to pets, allowing users to purchase pet supplies and book consultations with veterinarians for expert advice and care.',
        link:'https://itspetshop.netlify.app/home',
        image:'PETSHOP.png'
    },
    {
        name:'Fantasy King',
        description:'Platform where users create teams, join contests, and compete based on real matches, offering live score updates and rewards for an exciting sports experience.',
        link:'https://itspetshop.netlify.app/home',
        image:'FANATSY_KING.png'
    }
]