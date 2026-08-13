import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Header.scss";
import { Button, Input } from "antd";
import {useSelector} from "react-redux";
import { HomeOutlined, AppstoreOutlined, CheckCircleOutlined, LoginOutlined, UserAddOutlined  } from '@ant-design/icons';
import { getCookie } from "../../helpers/cookie";
function Header(){
    const token=getCookie("token");
    const isLoading=useSelector(state=>state.loadingReducer)
    const menuItems=[
        {
            label:"Trang chủ",
            path:"/",
            icon: <HomeOutlined />
        },
        {
            label:"Chủ đề",
            path:"/topic",
            icon: <AppstoreOutlined />
        },
        {
            label:"Câu trả lời",
            path:"/answers",
            icon: <CheckCircleOutlined />,
            requiredAuth: true
        }
    ]
    return(
        <>
            <header className="header">
                <div className="container">
                    <div className="header__inner-wrap">
                        <Link to="/" className="header__logo">
                            <img src={logo} alt="logo"/>
                        </Link>
                        {/* Navigation */}
                        <nav className="header__nav">
                            <ul className="header__menu">
                                {menuItems
                                    .filter(item => !item.requiredAuth || token)
                                    .map((item)=>(
                                    <li key={item.path} className="header__item"> 
                                    <NavLink 
                                        to={item.path}
                                        className={({isActive})=>
                                            isActive ?"header__link header__link--active"
                                                    :"header__link"
                                        }
                                    >
                                            {item.icon}
                                            <span>{item.label}</span>
                                    </NavLink>
                                </li>
                                ))}   
                            </ul>
                        </nav>
                        <div className="header__right">
                            <div className="header__search">
                                <Input.Search
                                    placeholder="Tìm kiếm quiz..."
                                />
                            </div>
                            <div className="header__actions">
                                {token ?(
                                    <Link to="/logout">
                                        <Button 
                                            icon={<LoginOutlined />}
                                            className="header__btn header__btn--login"
                                        >
                                            Đăng xuất
                                        </Button>
                                    </Link>
                                ):(
                                    <>
                                        <Link to="/login">
                                            <Button 
                                                icon={<LoginOutlined />}
                                                className="header__btn header__btn--login"
                                            >
                                                Đăng nhập
                                            </Button>
                                        </Link>

                                        <Link to="/register">
                                        <Button 
                                            icon={<UserAddOutlined />}
                                            className="header__btn header__btn--register "
                                        >
                                                Đăng ký
                                            </Button>
                                        </Link>
                                    </>
                                ) 
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </header>
        </>
    )
}
export default Header;