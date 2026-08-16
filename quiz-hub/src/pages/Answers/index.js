import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Card,
    Tag,
    Button,
    Empty,
    Spin
} from "antd";

import {
    FileTextOutlined,
    RightOutlined,
    CheckCircleOutlined
} from "@ant-design/icons";
import { getAnswersByUser } from "../../services/answersServices";
import { getQuizList } from "../../services/quizzesServices";
import { getTopicList } from "../../services/topicsServices";
import { getCookie } from "../../helpers/cookie";
import "./Answer.scss";
function Answers() {
    const navigate = useNavigate();
    const [answers, setAnswers] = useState([]);
    const [quizzes, setQuizzes] = useState([]);
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const userId = Number(
                    getCookie("id")
                );
                // Lấy lịch sử làm bài
                const responseAnswers =await getAnswersByUser(userId);
                // Lấy danh sách Quiz
                const responseQuizzes =await getQuizList();
                // Lấy danh sách Topic
                const responseTopics =await getTopicList();
                setAnswers(responseAnswers);
                setQuizzes(responseQuizzes);
                setTopics(responseTopics);
            } catch (error) {
                console.log(
                    "Lỗi lấy danh sách bài đã làm:",
                    error
                );
            } finally {
                setLoading(false);
            }
        };
        fetchApi();
    }, []);
    const latestAnswers = [];
    answers.forEach(answer => {
        const exists = latestAnswers.find(
            item =>
                Number(item.quizId) ===
                Number(answer.quizId)
        );
        if (!exists) {
            latestAnswers.push(answer);
        }
        else {
            if (
                Number(answer.id) >
                Number(exists.id)
            ) {
                const index =
                    latestAnswers.indexOf(exists);
                latestAnswers[index] = answer;
            }
        }
    });
    if (loading) {
        return (
            <div className="answers__loading">
                <Spin size="large" />
                <p>
                    Đang tải lịch sử làm bài...
                </p>
            </div>
        );
    }
    if (latestAnswers.length === 0) {
        return (
            <div className="answers">
                <div className="container">
                    <div className="answers__empty">
                        <Empty
                            description="Bạn chưa làm bài Quiz nào"
                        />
                        <Button
                            type="primary"
                            onClick={() =>
                                navigate("/topic")
                            }
                        >
                            Khám phá chủ đề
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="answers">
            <div className="container">
                <div className="answers__header">
                    <div className="answers__header-icon">
                        <FileTextOutlined />
                    </div>
                    <div>
                        <h1>
                            Bài Quiz đã làm
                        </h1>
                        <p>
                            Xem lại những bài kiểm tra
                            bạn đã hoàn thành
                        </p>
                    </div>
                </div>
                <div className="answers__list">
                    {latestAnswers.map(answer => {
                        const quiz =
                            quizzes.find(
                                item =>
                                    Number(item.id) ===
                                    Number(answer.quizId)
                            );
                        if (!quiz) {
                            return null;
                        }
                        const topic =
                            topics.find(
                                item =>
                                    Number(item.id) ===
                                    Number(quiz.topicId)
                            );
                        return (
                            <Card
                                key={answer.id}
                                className="answers__card"
                                hoverable
                                onClick={() =>
                                    navigate(
                                        `/answers/${answer.quizId}`
                                    )
                                }

                            >
                                <div className="answers__card-image">
                                    <img
                                        src={topic?.image}
                                        alt={topic?.name}
                                    />
                                </div>
                                <div className="answers__card-content">
                                    <div className="answers__card-top">
                                        <Tag color="purple">
                                            {topic?.name ||
                                                "Không xác định"}
                                        </Tag>
                                    </div>
                                    <h2 className="answers__quiz-title">
                                        {quiz.title}
                                    </h2>
                                    <p className="answers__quiz-description">
                                        Bạn đã hoàn thành
                                        bài kiểm tra này.
                                    </p>
                                    <div className="answers__card-bottom">
                                        <span>
                                            <CheckCircleOutlined />
                                            {answer.answers?.length || 0}
                                            {" "}
                                            câu đã trả lời
                                        </span>
                                        <Button
                                            type="link"
                                            icon={
                                                <RightOutlined />
                                            }
                                            iconPosition="end"
                                        >
                                            Xem kết quả
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
export default Answers;