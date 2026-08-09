import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Header.scss";
import { Button, Input } from "antd";
import { HomeOutlined, AppstoreOutlined, CheckCircleOutlined, LoginOutlined, UserAddOutlined  } from '@ant-design/icons';
function Header(){
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
            icon: <CheckCircleOutlined />
        }
    ]
    return(
        <>
            <header className="header">
                <div className="header__container">
                    <Link to="/" className="header__logo">
                        <img src={logo} alt="logo"/>
                    </Link>
                     {/* Navigation */}
                     <nav className="header__nav">
                        <ul className="header__menu">
                            {menuItems.map((item)=>(
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
                        </div>
                    </div>
                    


                     
                </div>
            </header>
        </>
    )
}
export default Header;