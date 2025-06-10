import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'skrakesh2602@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Rakesh, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    linkedInProfile: 'https://www.linkedin.com/in/rakesh262',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Sharma262' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/rakesh262/' },
    {
        name: 'Hacker Rank',
        url: 'https://www.hackerrank.com/profile/skrakesh2602',
    },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'HTML',
            icon: '/logo/html.png',
        },
        {
            name: 'CSS',
            icon: '/logo/css.png',
        },
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'SASS',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Nest.js',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        // {
        //     name: 'MySQL',
        //     icon: '/logo/mysql.svg',
        // },

        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    blockchain: [
        {
            name: 'Web3.js',
            icon: '/logo/web3.0.png',
        },
        {
            name: 'Ether.js',
            icon: '/logo/ethereum.png',
        },
        {
            name: 'Smart contract',
            icon: '/logo/smart-contracts.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Github',
            icon: '/logo/github.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'devLinks',
        slug: 'devLinks',
        techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devlinks-1.png',
            '/projects/images/devlinks-2.png',
            '/projects/images/devlinks-3.png',
        ],
        liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
        year: 2025,
        description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

            I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
        role: ``,
    },
    {
        title: 'Task manager',
        slug: 'taskManager',
        techStack: ['Next.js', 'Typescript', 'SPA', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/Task_manager.jpg',
        longThumbnail: '/projects/long/Task_manager.jpg',
        images: [
            '/projects/images/Task_manager1.png',
            '/projects/images/Task_manager2.png',
            '/projects/images/Task_manager3.png',
        ],
        liveUrl: 'https://itasks.vercel.app/',
        year: 2025,
        description: `Improve your productivity with a sleek UI.<br/><br/>

        Welcome to Task Manager, your all-in-one solution for seamless task management and conquering challenges. Enjoy a beautiful UI, effortless task handling, and unique features designed to enhance your productivity without the hassle of sign-ups.`,
        role: ``,
    },
    {
        title: 'Snake mania',
        slug: 'snakeMania',
        techStack: ['HTML', 'CSS', 'Javascript'],
        thumbnail: '/projects/thumbnail/snake_mania.jpg',
        longThumbnail: '/projects/long/snake_mania.jpg',
        images: ['/projects/images/snake_mania.png'],
        sourceCode: 'https://github.com/Sharma262/Snake_mania.git',
        year: 2023,
        description: `Relive your childhood with this nostalgic Snake Game, crafted with modern HTML, CSS, and JavaScript.
        Featuring immersive music, sound effects, high score tracking, and a stunning UI that keeps you hooked.
        It’s not just a game—it’s a trip down memory lane with a fresh, addictive twist!`,
        role: ``,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Associate Software Engineer',
        company: 'Antier solutions pvt ltd',
        duration: 'Feb 2023 - Nov 2024',
    },
    {
        title: 'Frontend Developer',
        company: 'ACIL pvt ltd',
        duration: 'Nov 2021 - Jan 2023',
    },
];
