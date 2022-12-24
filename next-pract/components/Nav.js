import Link from 'next/link'
import Layout from './Layout'
//import navStyles from '../styles/Nav.module.css'

/**
 * We want nav bar to be in the Layout.js component
 * B/c we want the Links to be in every page
 */

const Nav = () => {
    return (
        <nav>
            <ul>
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