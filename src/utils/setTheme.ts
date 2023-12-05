/**
 * Function to set the theme of the site.
 * @param theme Expects "light", "dark", "system", or undefined - undefined will check localStorage for a saved theme and default to "system."
 */
export default function setTheme(theme?: string) {
    // check localStorage for a saved theme
    let savedTheme = localStorage.getItem('theme')
    // theme = was a theme passed in? use theme -> no? is there a savedTheme? use savedTheme -> no savedTheme? use "system"
    theme = theme ? theme : savedTheme ? savedTheme : 'system' 
    // set the theme in localStorage
    localStorage.setItem('theme', theme)
    // set the theme class on the root node of the document see: https://tailwindcss.com/docs/dark-mode
    switch (theme) {
        case 'light':
            document.documentElement.classList.remove('dark')
            break
        case 'dark':
            document.documentElement.classList.add('dark')
            break
        case 'system':
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
            break
        default:
            console.error(`Invalid theme passed to setTheme(), expected "light", "dark", "system", or undefined, got: ${typeof theme} : ${theme}`)
            break
    }
}
