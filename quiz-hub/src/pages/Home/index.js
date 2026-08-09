import { Button, Tag, Statistic } from 'antd';
import {
    BookOutlined,
    CodeOutlined,
    UserOutlined,
    ArrowRightOutlined,
    StarOutlined
} from "@ant-design/icons";
import heroImage from "../../assets/images/heroImage.png";
import "./Home.scss"
function Home(){
    return(
        <>
            <section className="hero">
                <div className="container">
                    <div className='hero__inner-wrap'>
                        <div className="hero__content">
                            {/* Badge */}
                            <Tag 
                                color="#574FF5" 
                                icon={<CodeOutlined />}
                                className="hero__badge"
                            >
                                Chào mừng bạn đến với DevQuiz
                            </Tag>

                            {/* Heading */}
                            <h1 className="hero__title">THỬ THÁCH KIẾN THỨC LẬP TRÌNH CỦA BẠN</h1>

                            {/* Description */}
                            <p className="hero__desc">Luyện tập với hàng trăm bài trắc nghiệm, theo dõi tiến độ
                                và tranh tài cùng các lập trình viên trên toàn thế giới.</p>

                            {/* Buttons */}
                            <div className='hero__actions'>
                                <Button 
                                    className='hero__btn hero__btn--start'
                                    icon={<ArrowRightOutlined />}
                                    iconPlacement="end"
                                >
                                    Bắt đầu ngay
                                </Button>

                                <Button className='hero__btn hero__btn--topic'>
                                    Khám phá chủ đề
                                </Button>
                            </div>

                            {/* Stats */}
                            <div className="hero__stat">
                                <div className="hero__item">
                                    <div className="hero__item-icon">
                                        <BookOutlined />
                                    </div>

                                    <Statistic
                                        title="Câu hỏi"
                                        value="1,200+"
                                        className='hero__statistic'
                                    />
                                </div>
                                <div className="hero__item">
                                    <div className="hero__item-icon">
                                        <CodeOutlined />
                                    </div>

                                    <Statistic
                                        title="Chủ đề"
                                        value="25+"
                                        className='hero__statistic'
                                    />
                                </div>
                                <div className="hero__item">
                                    <div className="hero__item-icon">
                                        <UserOutlined/>
                                    </div>

                                    <Statistic
                                        title="Người dùng"
                                        value="1125+"
                                        className='hero__statistic'
                                    />
                                </div>
                                <div className="hero__item">
                                    <div className="hero__item-icon">
                                        <StarOutlined />
                                    </div>

                                    <Statistic
                                        title="Đánh giá"
                                        value="499+"
                                        className='hero__statistic'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="hero__visual">
                            {/* Image */}
                            <img
                                src={heroImage}
                                alt="DevQuiz coding illustration"
                            />
                        </div>
                    </div>
                   
                </div>
            </section>
        </>
    )
}
export default Home;