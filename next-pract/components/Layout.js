import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'
/** 
 * Component is self titled and is the application
 * @param {Component} param0 
 * @returns void
 */

const Layout = ({children}) => {
    return (
        <>
            <Meta />
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
        
    )
}

export default Layout;