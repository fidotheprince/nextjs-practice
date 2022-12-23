import styles from '../styles/Layout.module.css'

/** 
 * Component is self titled and is the application
 * @param {Component} param0 
 * @returns void
 */

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>{children}</main>
        </div>
    )
}

export default Layout;