import { useEffect, useState } from "react";
import { getQuizList } from "../../services/quizzesServices";
import { Card, Col, Row, Tag, Rate, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./PopularQuizzes.scss"
import { getTopicList } from "../../services/topicsServices";
function PopularQuizzes(){
    const [quizzes, setQuizzes]=useState([]);
    const [topics, setTopics] = useState([]);
    useEffect(()=>{
        const fetchApi= async ()=>{
            const quizResponse = await getQuizList();
            const topicResponse =await getTopicList();
            setQuizzes(quizResponse);
            setTopics(topicResponse);
        }
        fetchApi();
    },[])
    return(
        <>
            <section className="popular-quizzes">
                <div className="container">

                    {/* Heading */}
                    <div className="popular-quizzes__heading">

                        <h2 className="popular-quizzes__title">
                            Thử thách kiến thức của bạn
                        </h2>

                        <p className="popular-quizzes__description">
                            Khám phá những bộ câu hỏi phổ biến
                            và kiểm tra kiến thức của bạn.
                        </p>

                    </div>


                    {/* Quiz list */}
                    <Row gutter={[24, 24]}>

                        {quizzes.slice(0, 6).map((quiz) => {

                            // Tìm topic tương ứng với quiz
                            const topic = topics.find(
                                (topic) => topic.id === quiz.topicId
                            );

                            return (
                                <Col
                                    key={quiz.id}
                                    xs={24}
                                    sm={12}
                                    lg={8}
                                >

                                    <Card className="popular-quizzes__card">

                                        {/* Topic image */}
                                        <div className="popular-quizzes__visual">

                                            {topic && (
                                                <img
                                                    src={topic.image}
                                                    alt={topic.name}
                                                />
                                            )}

                                        </div>


                                        {/* Content */}
                                        <div className="popular-quizzes__content">

                                            {/* Difficulty + Rating */}
                                            <div className="popular-quizzes__meta">

                                                <Tag
                                                    color={
                                                        quiz.difficulty === "Easy"
                                                            ? "green"
                                                            : quiz.difficulty === "Medium"
                                                            ? "orange"
                                                            : "red"
                                                    }
                                                >
                                                    {quiz.difficulty}
                                                </Tag>


                                                <div className="popular-quizzes__rating">

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


                                            {/* Topic */}
                                            <span className="popular-quizzes__topic">
                                                {topic?.name}
                                            </span>


                                            {/* Title */}
                                            <h3 className="popular-quizzes__quiz-title">
                                                {quiz.title}
                                            </h3>


                                            {/* Description */}
                                            <p className="popular-quizzes__quiz-description">
                                                {quiz.description}
                                            </p>


                                            {/* Footer */}
                                            <div className="popular-quizzes__footer">

                                                <span>
                                                    {quiz.questionCount} câu hỏi
                                                </span>

                                                <Button
                                                    type="link"
                                                    className="popular-quizzes__button"
                                                >
                                                    Làm bài →
                                                </Button>

                                            </div>

                                        </div>

                                    </Card>

                                </Col>
                            );
                        })}

                    </Row>


                    {/* View all */}
                    <div className="popular-quizzes__action">

                        <Button
                            type="primary"
                            size="large"
                            icon={<ArrowRightOutlined/>}
                            iconPlacement="end"
                        >
                            Xem tất cả
                        </Button>

                    </div>

                </div>
            </section>
        </>
    )
}
export default PopularQuizzes;