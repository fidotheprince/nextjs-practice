import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

/**
 * We want nav bar to be in the Layout.js component
 * B/c we want the Links to be in every page
 */

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul className={navStyles.ul}>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;