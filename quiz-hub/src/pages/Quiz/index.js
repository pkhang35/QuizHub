import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTopicQuiz } from "../../services/quizzesServices";
import { Breadcrumb, Button, Card, Col, Rate, Row, Tag } from "antd";
import { getTopicId } from "../../services/topicsServices";
import { RightOutlined } from "@ant-design/icons";
import "./QuizTopic.scss"
function Quiz(){
    const params = useParams();
    const [quiz,setQuiz]= useState([]);
    const [topic,setTopic]=useState([]);
    useEffect(()=>{
        const fetchApi= async () => {
            const responseTopic=await getTopicId(params.id);
            setTopic(responseTopic);
    
        }
        fetchApi();
    },[])
    console.log(topic)
    useEffect(()=>{
        const fetchApi= async () => {
            const responseQuiz=await getTopicQuiz(params.id);
            setQuiz(responseQuiz);
        }
        fetchApi();
    },[])
    return(
        <>
            <section className="hero-quiz">
                <div className="container">
                    <Breadcrumb
                        className="hero-quiz__breadcrumb"
                        items={[
                            {
                                title: <Link to="/">Trang chủ</Link>
                            },
                            {
                                title: <Link to="/topic">Chủ đề</Link>
                            },
                            {
                                title: topic.name
                            }
                        ]}
                    />
                    <div className="hero-quiz__content">
                        <div className="hero-quiz__icon">
                            <img
                                src={topic.image}
                                alt={topic.name}
                            />
                        </div>
                        <div>
                            <span className="hero-quiz__label">
                                Chủ đề
                            </span>
                            <h1>
                                {topic.name}
                            </h1>
                            <p>
                                {topic.description}
                            </p>
                            <span className="hero-quiz__count">
                                {quiz.length} bài trắc nghiệm
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="topic-quiz">
                <div className="container">
                    <div className="topic-quiz__header">
                        <div>
                            <h2>Các bài trắc nghiệm</h2>
                            <p>Chọn một bài trắc nghiệm và bắt đầu luyện tập kiến thức của bạn.</p>
                        </div>
                    </div>
                    <Row gutter={[20,20]}>
                        {quiz.map(quiz=>(
                            <Col 
                                key={quiz.id}
                                xs={24}
                                sm={12}
                                lg={8}
                            >
                                <Card 
                                    className="topic-quiz__card"
                                    hoverable
                                >
                                    <div className="topic-quiz__top">
                                        <Tag
                                            color={
                                                quiz.difficulty==="Dễ"
                                                ?"green"
                                                :quiz.difficulty==="Trung bình"
                                                    ?"orange"
                                                    :"red"

                                            }
                                        >
                                            {quiz.difficulty}
                                        </Tag>
                                    </div>
                                    <h3>
                                        {quiz.title}
                                    </h3>
                                    <p>
                                        {quiz.description}
                                    </p>
                                    <div className="topic-quiz__info">
                                        <span>
                                            {quiz.questionCount} câu hỏi
                                        </span>
                                        <div className="topic-quiz__rating">
                                            <Rate
                                                disabled
                                                allowHalf
                                                value={quiz.rating}
                                            />
                                            <span>
                                                {quiz.rating}
                                            </span>
                                        </div>
                                    </div>

                                   <Link
                                        to={`/questions/${quiz.id}`}
                                        className="topic-quiz__button-link"
                                    >
                                        <Button
                                            type="primary"
                                            block
                                            className="topic-quiz__button"
                                        >
                                            Bắt đầu quiz
                                            <RightOutlined />
                                        </Button>
                                    </Link>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>

            </section>
        </>
    )
}
export default Quiz;