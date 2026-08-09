import { Layout } from 'antd';
import {  Link, NavLink, Outlet } from "react-router-dom"
import "./LayoutDefault.scss"
import Header from '../../components/Header';
import Footer from '../../components/Footer';
const { Content} = Layout;
function LayoutDefault(){
    // const navLickActive=(e)=>{
    //     console.log(e)
    //     return e.isActive ? "menu__link menu__link--active": "menu__link"
    // }
    return(
        <>
            <Layout className="layout-default">
                <Header/>

                <Content className="layout-default__main">
                    <Outlet />
                </Content>

                <Footer/>

            </Layout>
        </>
    )
}
export default LayoutDefault