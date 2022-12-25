//style imports can be any name desired
import headerStyles from '../styles/Header.module.css'

export const Header = () => {
  return (
    <div>
        <h1 className="title">
            <span> WebDev </span> News
        </h1>
        {/* example of embedded styling */}
        {/* <style jsx>{`.title {color: red;}`}</style> */}
    </div>
  )
}

export default Header;
