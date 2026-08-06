import {  Link, NavLink, Outlet } from "react-router-dom"
import "./LayoutDefault.scss"
function LayoutDefault(){
    // const navLickActive=(e)=>{
    //     console.log(e)
    //     return e.isActive ? "menu__link menu__link--active": "menu__link"
    // }
    return(
        <>
        <div className="layout-default">
           <header className="layout-default__header">
            <div className="layout-default__logo">Logo</div>
            <div className="menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
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