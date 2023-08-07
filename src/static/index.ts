import { IconType } from "../constants/common.constants"

export const utils = {
    iconRedirectionPath: [
        { link: `https://www.facebook.com`,identifier:IconType.Facebook },
        // { link: `https://www.twitter.com`,identifier:IconType. },
        { link: `https://www.instagram.com`, identifier:IconType.Instagram },
        { link: `https://www.github.com`,identifier:IconType.GitHub  },
        { link: `https://www.linkedin.com`,identifier:IconType.LinkedIn  },
    ],
    copyRightText: ``,
    email: `chetan.rathor.dev@gmail.com`,
    phone: ``
}

export const hero = {
    headingFirst: `I'm Web Developer`,
    headingSecond: `Chetan S. Rathor`,
    subTitle: `Experienced web developer proficient in front-end and back-end development, with strong problem-solving skills and a passion for continuous learning.`,
    buttonText: 'LEARN MORE'
}

export const aboutMe = {
    subTitle: `Passionate web developer dedicated to excellence.`,
    heading: `Developing With a Passion While Exploring The World.`,
    leftSection: {
        one: `I am a professional web developer with a strong background in both front-end and back-end development. With my expertise in HTML, CSS, JavaScript, React, and Bootstrap, I can create visually stunning and user-friendly websites. However, my skills extend beyond the front-end, as I also have experience with back-end technologies like Nest.js, PostgreSQL, and TypeScript.`,
        two: `I am passionate about programming, constantly learning and exploring new technologies to deliver cutting-edge solutions and push boundaries in code.`
    },
    rightSection: {
        one: `I believe in delivering nothing short of excellence in my work. I am known for my attention to detail and my commitment to producing high-quality websites. I take the time to understand my clients' requirements, ensuring that I meet their specific needs and exceed their expectations. By employing best practices and employing industry standards, I ensure that the websites I develop are not only visually appealing but also highly functional and performant.`,
        two: `
        I excel at solving complex problems with a creative mindset, delivering unique and outstanding websites that exceed expectations through collaboration, expertise, and passion for programming.   `
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
            description: `My expertise lies in front-end development, where I specialize in creating dynamic UIs using technologies such as React, HTML, CSS, and more. &nbsp;`,
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
            description: `I possess extensive expertise in NestJS, a powerful Node.js framework. Skilled in creating scalable and robust server-side solutions, backed by formidable experience in backend development.`,
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
            description: `I excel at seamlessly integrating third-party APIs to enhance web application functionality. My skills in this area enable me to create flawless integrations with various APIs.`,
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
                title: `HTML5`,
                year: `2022-Present`,
                subTitle: `Proficient in HTML5: Crafting Dynamic and Responsive Web Content with Cutting-Edge Markup Language for Seamless User Experiences and Modern Design Aesthetics`,
                progress: 60
            },
            {
                title: `CSS3`,
                year: `2022-Present`,
                subTitle: `Elevating Web Design with CSS3 Mastery: Creating Visually Stunning and Engaging User Interfaces through Advanced Styling Techniques and Responsive Layouts. &nbsp;`,
                progress: 50
            }
        ],
        [
            {
                title: `React.Js`,
                year: `2022-Present`,
                subTitle: `Empowering Web Development with React: Building Interactive and Scalable User Interfaces Using the Modern JavaScript Library for Efficient Front-End Creation and Seamless State Management.`,
                progress: 40
            },
            {
                title: `Nest.Js`,
                year: `2022-Present`,
                subTitle: `Unlocking Backend Potential with NestJS: Harnessing the Power of a Progressive Node.js Framework for Building Scalable, Modular, and Maintainable Server-side Applications.&nbsp&nbsp&nbsp jshjs`,
                progress: 30
            },
            {
                title: `TypeORM & PgSQL`,
                year: `2022-Present`,
                subTitle: `Seamless Data Integration with TypeORM and PostgreSQL: Leveraging Advanced Object-Relational Mapping and Robust Database Management for Efficient and Reliable Backend Development.`,
                progress: 20
            },
        ]
    ],
}

export const myPortfolio = {
    subTitle: ``,
    portfolio: []
}

export const clientSays = {
    subTitle: `Client's Vision Transformed: Listening, Adapting, Delivering Exceptional Solutions with Precision.`,
    clientReviews: [
        {
            avatar: `male.png`,
            name: `Mark Wood`,
            review: `Remarkable service! Attentively grasped our requirements and delivered beyond expectations. True collaborators, they're essential for any project.&nbsp;`,

        },
        {
            avatar: `male.png`,
            name: `Henry Feyol`,
            review: `Expertise shines. Transformed our concepts into polished reality swiftly. Great communication, exceptional outcomes! Highly recommended for top-tier results.`,

        },
        {
            avatar: `male.png`,
            name: `Ileana charis`,
            review: `Dependable innovators. Executed our project with brilliance and insights. Trustworthy partners delivering seamless solutions. A go-to choice for reliability and ingenuity.`,

        }
    ]
}

export const stayInTouch = {
    subTitle: ``,
    inputBoxPlaceHolder: ``,
    buttonText: ``
}




