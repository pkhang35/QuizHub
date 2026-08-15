import { useEffect, useState } from "react";
import "./Topic.scss";
import { getTopicList } from "../../services/topicsServices";
import { Card, Col, Row } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { getQuizList } from "../../services/quizzesServices";
import { Link } from "react-router-dom";
function Topic(){
    const [topics,setTopics]= useState([]);
    const [quizzes,setQuizzes]= useState([]);
    useEffect(()=>{
         const fetchApi= async()=>{
            const responseTopic= await getTopicList();
            const responseQuiz=await getQuizList();
            setTopics(responseTopic);
            setQuizzes(responseQuiz);
         }
         fetchApi()
    },[])

    return(
        <>
            {/* HERO */}
             <section className="hero-topic">
                <div className="container">
                    <div className="hero-topic__content">
                        <h1 className="hero-topic__title">
                            Khám phá các chủ đề
                        </h1>
                        <p className="hero-topic__desc">
                            Chọn một chủ đề và bắt đầu kiểm tra kiến thức lập trình của bạn
                        </p>
                    </div>
                </div>

            </section>
            {/* Topics */}
            <section className="topic">
                <div className="container">
                    <div className="topic__header">
                        <div>
                            <h2>
                                Tất cả các chủ đề
                            </h2>
                            <p>Lựa chọn chủ đề bán muốn luyện tập</p>
                        </div>
                        
                        <span>{topics.length} chủ đề</span>
                    </div>
                    <Row gutter={[24,24]}>
                        {topics.map(topic=>(
                            <Col
                                key={topic.id}   
                                xs={24}
                                sm={12}
                                md={8}
                                lg={6}
                            >
                                <Link to={"/quizzes/"+topic.id}>
                                     <Card 
                                        className="topic__card"
                                        hoverable
                                    >
                                        <div className="topic__card-icon">
                                            <img src={topic.image} alt={topic.name}/>
                                        </div>
                                        <div className="topic__card-content">
                                            <h3>
                                                {topic.name}
                                            </h3>

                                            <p>
                                                {topic.description}
                                            </p>
                                        </div>
                                        <div className="topic__card-footer">
                                                
                                            <span>
                                                {
                                                    quizzes.filter(
                                                        quiz => quiz.topicId === topic.id
                                                    ).length
                                                } quizzes 
                                            </span>

                                            <RightOutlined />

                                        </div>
                                    </Card>
                                </Link>
                               
                            </Col>
                        ))}
                    </Row>
              

                </div>

            </section>
           
        </>
    )
}
export default Topic