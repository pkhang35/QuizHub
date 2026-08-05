import {  NavLink, Outlet } from "react-router-dom"
import "./LayoutDefault.scss"
function LayoutDefault(){
    const navLickActive=(e)=>{
        console.log(e)
        return e.isActive ? "menu__link menu__link--active": "menu__link"
    }
    return(
        <>

        <div className="layout-default">
           <header className="layout-default__header">
            <div className="layout-default__logo">Logo</div>
            <div className="menu">
                <ul>
                    <li>
                        <NavLink to="/" className={navLickActive}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"  className={navLickActive}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"  className={navLickActive}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog"  className={navLickActive}>Blog</NavLink>
                        <ul className="menu__sub">
                            <li>
                                <NavLink to="/blog/news"  
                                className={navLickActive}>News</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog/related"  
                                className={navLickActive}>Related</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/info-user"  className={navLickActive}>InfoUser</NavLink>
                    </li>
                </ul>
            </div>
           </header>
           <main className="layout-default__main">
            <Outlet/>
           </main>
           <footer className="layout-default__footer">
            Copyright @2026 by khang
           </footer>
        </div>
        </>
    )
}
export default LayoutDefault