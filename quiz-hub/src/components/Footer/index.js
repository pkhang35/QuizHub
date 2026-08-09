import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {
    GithubOutlined,
    LinkedinOutlined,
    FacebookOutlined,
} from "@ant-design/icons";
import "./Footer.scss";
function Footer(){
    return(
        <>
            <footer className="footer">
                <div className="container">

                    <div className="footer__top">
                        <div className="footer__brand">
                            <Link to="/" className="footer__logo">
                                <img src={logo} alt="logo"/>
                            </Link>
                            <p className="footer__description">
                                Nền tảng luyện quiz dành cho Developer.
                                Học tập, luyện tập và nâng cao kiến thức lập trình.
                            </p>
                        </div>

                        <div className="footer__column">
                            <h3 className="footer__title">
                                Sản phẩm
                            </h3>

                            <ul className="footer__links">
                                <li>
                                    <Link to="/">
                                        Trang chủ
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/topic">
                                        Chủ đề
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer__column">
                            <h3 className="footer__title">
                                Tài nguyên
                            </h3>

                            <ul className="footer__links">
                                <li>
                                    <Link to="/about">
                                        Về DevQuiz
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/help">
                                        Trợ giúp
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/contact">
                                        Liên hệ
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                      {/* Bottom */}
                    <div className="footer__bottom">
                        <p className="footer__copyright">
                            © 2026 DevQuiz. All rights reserved.
                        </p>

                        <div className="footer__socials">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                            >
                                <GithubOutlined />
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                            >
                                <LinkedinOutlined />
                            </a>

                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                            >
                                <FacebookOutlined />
                            </a>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}
export default Footer