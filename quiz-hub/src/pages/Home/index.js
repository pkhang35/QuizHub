import { Button, Tag, Statistic, Card } from 'antd';
import {
    BookOutlined,
    CodeOutlined,
    UserOutlined,
    ArrowRightOutlined,
    StarOutlined
} from "@ant-design/icons";
import heroImage from "../../assets/images/heroImage.png";
import createQuiz from "../../assets/images/create-question.png";
import createTopic from "../../assets/images/create-topics.png";
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

            <section className="contribute">
                <div className="container">
                    <div className="contribute__list">
                        <div className="contribute__card">
                            <div className="contribute__images">
                                <img src={createQuiz} alt="create-Quiz" />
                            </div>

                            <div className="contribute__content">
                                <h3>
                                    Tạo câu hỏi
                                </h3>

                                <p>
                                    Thêm những câu hỏi lập trình thú vị
                                    và giúp cộng đồng cùng luyện tập.
                                </p>

                                <Button
                                    className="contribute__btn contribute__btn--quiz"
                                >
                                    Tạo câu hỏi
                                    <ArrowRightOutlined />
                                </Button>
                            </div>
                        </div>

                        <div className="contribute__card">
                            <div className="contribute__images">
                                    <img src={createTopic} alt="create-Quiz" />
                            </div>

                            <div className="contribute__content ">

                                <h3>
                                    Tạo chủ đề
                                </h3>

                                <p>
                                    Tạo một chủ đề mới và mở rộng
                                    kho kiến thức của DevQuiz.
                                </p>

                                <Button
                                    className="contribute__btn contribute__btn--topic"
                                >
                                    Tạo chủ đề
                                    <ArrowRightOutlined />
                                </Button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
        </>
    )
}
export default Home;