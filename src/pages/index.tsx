import Head from "next/head"
import { useEffect } from "react"
import OptionSelect from "~/components/OptionSelect"
import ProjectCard from "~/components/ProjectCard"
import setTheme from "~/utils/setTheme"

export default function Home() {
    let themeOptions = [
        {
            display: 'Light',
            value: 'light'
        },
        {
            display: 'Dark',
            value: 'dark'
        },
        {
            display: 'System',
            value: 'system'
        }
    ]
    useEffect(() => {
        setTheme()
    }, [])
    let projects = [
        {
            img: {
                src: '/dndquick.jpg',
                alt: 'D&D Quick Logo'
            },
            title: 'D&D Quick',
            description: 'Quickly generate a character for D&D',
            techs: ['Javascript', 'Tailwind'],
            github: 'https://github.com/JaredBoehm/dnd-quick',
            demo: 'https://jaredboehm.github.io/dnd-quick/'
        },
        {
            img: {
                src: '/casterly_roost.jpg',
                alt: 'Next.js Logo'
            },
            title: 'The Roost',
            description: 'React browser game.',
            techs: ['Graphql', 'React', 'MongoDB'],
            github: 'https://github.com/shindekokoro/the-roost',
            demo: 'https://the-roost.spinda.dev/'
        },
    ]


    return (
        <>
            <Head>
                <title>Portfolio | Jared Boehm</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body className="bg-white dark:bg-[#1a1b26] min-h-screen">
                <header>
                    <nav className="flex justify-end">
                        <OptionSelect options={themeOptions} clickFunction={setTheme} />
                    </nav>
                </header>
                <main>
                    <nav className="flex justify-center p-10">
                        <ul className="flex flex-wrap gap-10 px-10 py-2 fixed top-10 bg-white dark:bg-[#1a1b26] border-2 m-2 rounded">
                            <li>
                                <a href="#about" className="dark:text-white hover:underline">About</a>
                            </li>
                            <li>
                                <a href="#projects" className="dark:text-white hover:underline">Projects</a>
                            </li>
                            <li>
                                <a href="#contact" className="dark:text-white hover:underline">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <section id="about" className="flex flex-col justify-center items-center min-h-screen">
                        <h1 className="text-3xl font-bold text-blue-700 mb-4">Hello!</h1>
                        <h2 className="text-xl dark:text-white">
                            I'm Jared Boehm
                        </h2>
                        <p className="text-center dark:text-white">
                            I'm a full-stack developer with a passion for creating beautiful, functional, and accessible websites and applications.
                        </p>
                    </section>
                    <section id="projects" className="flex flex-col justify-center items-center min-h-screen">
                        <h1 className="text-3xl font-bold text-blue-700 mb-4">Projects</h1>
                        <h2 className="text-xl dark:text-white">
                            Here are some of my projects!
                        </h2>
                        <span className="flex flex-wrap justify-center gap-2">
                            {projects.map((project) => {
                                return (
                                    <ProjectCard key={project.title} project={project} />
                                )
                            })}
                        </span>
                    </section>
                    <section id="contact" className="flex flex-col justify-center items-center min-h-screen">
                        <h1 className="text-3xl font-bold text-blue-700 mb-4">Contact</h1>
                        <h2 className="text-xl dark:text-white mb-4">
                            Hit me up!
                        </h2>
                        <p className="flex gap-3 dark:text-white">
                            <a href="https://github.com/JaredBoehm" target="_blank" className="hover:underline">Github</a>
                            <a href="https://www.linkedin.com/in/jaredboehm/" target="_blank" className="hover:underline">LinkedIn</a>
                            <a href="mailto:me@jaredboehm.com" target="_blank" className="hover:underline">Email</a>
                        </p>
                    </section>
                </main>
                <footer className="dark:text-white text-center p-8 text-xs">
                    <p>© Jared Boehm, 2023</p>
                    <p>Powered by Next.js <a href="https://create.t3.gg/" className="text-blue-700">@T3</a></p>
                    Tailwind ❤️
                </footer>
            </body >
        </>
    )
}
