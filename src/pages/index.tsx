import Head from "next/head"
import { useEffect } from "react"
import OptionSelect from "~/components/OptionSelect"

export default function Home() {
    /**
     * Function to set the theme of the site.
     * @param theme Expects "light", "dark", "system", or undefined - undefined will check localStorage for a saved theme and default to "system."
     */
    function setTheme(theme?: string) {
        let savedTheme = localStorage.getItem('theme')
        // theme = was a theme passed in? use theme -> no? is there a savedTheme? use savedTheme -> no savedTheme? use "system"
        theme = theme ? theme : savedTheme ? savedTheme : 'system' 
        localStorage.setItem('theme', theme)
        console.log(`Setting theme to: ${theme}`)
        switch (theme) {
            case 'light':
                document.documentElement.classList.remove('dark')
                break;
            case 'dark':
                document.documentElement.classList.add('dark')
                break;
            case 'system':
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark')
                } else {
                    document.documentElement.classList.remove('dark')
                }
                break;
            default:
                console.error(`Invalid theme passed to setTheme(), expected "light", "dark", "system", or undefined, got: ${typeof theme} : ${theme}`)
                break;
        }
    }
    useEffect(() => {
        setTheme()
    }, [])

    let options = [
        {
            name: 'light',
            value: 'light'
        },
        {
            name: 'dark',
            value: 'dark'
        },
        {
            name: 'system',
            value: 'system'
        }
    ]

    return (
        <>
            <Head>
                <title>Portfolio | Jared Boehm</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="scroll-smooth bg-white dark:bg-[#1a1b26] min-h-screen">
                <OptionSelect options={options} clickFunction={setTheme}/>
                <h1 className="text-3xl font-bold text-blue-700 mb-4">Hello, Tailwind CSS!</h1>
            </main>
        </>
    )
}
