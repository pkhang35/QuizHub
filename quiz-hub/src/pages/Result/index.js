import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button, Card, Progress, Statistic } from "antd";
import {
    CheckCircleOutlined,
    CloseCircleOutlined,
    ReloadOutlined,
    HomeOutlined,
    FileTextOutlined
} from "@ant-design/icons";

import "./Result.scss";

function Result() {

    const { quizId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const questions = location.state?.questions || [];
    const answers = location.state?.answers || [];

    let correct = 0;

    questions.forEach(question => {

        const userAnswer = answers.find(
            item => item.questionId === question.id
        );

        if (
            userAnswer &&
            userAnswer.answer === question.correctAnswer
        ) {
            correct++;
        }

    });

    const total = questions.length;

    const wrong = total - correct;

    const percent = total > 0
        ? Math.round((correct / total) * 100)
        : 0;

    const handleRetry = () => {
        navigate(`/questions/${quizId}`);
    };

    const handleBackTopic = () => {
        navigate("/topic");
    };

    const handleReview = () => {
        navigate(`/answers/${quizId}`);
    };

    return (
        <div className="result">
            <div className="container">
                <Card className="result__card">
                    <div className="result__header">
                        <div className="result__icon">
                            <CheckCircleOutlined />
                        </div>

                        <h1>
                            Hoàn thành bài Quiz! 🎉
                        </h1>

                        <p>
                            Bạn đã hoàn thành bài kiểm tra.
                            Hãy xem lại kết quả của mình nhé!
                        </p>

                    </div>

                    <div className="result__score">
                        <Progress
                            type="circle"
                            percent={percent}
                            size={220}
                            format={() => null} //ko vẽ %
                        />
                        <div className="result__score-text">

                            <strong>
                                {correct}/{total}
                            </strong>

                            <span>
                                câu trả lời đúng
                            </span>

                        </div>

                    </div>


                    {/* STATISTICS */}

                    <div className="result__stats">

                        <div className="result__stat">

                            <CheckCircleOutlined />

                            <Statistic
                                title="Đúng"
                                value={correct}
                            />

                        </div>


                        <div className="result__stat">

                            <CloseCircleOutlined />

                            <Statistic
                                title="Sai"
                                value={wrong}
                            />

                        </div>


                        <div className="result__stat">

                            <FileTextOutlined />

                            <Statistic
                                title="Tổng số câu"
                                value={total}
                            />

                        </div>

                    </div>


                    {/* MESSAGE */}

                    <div className="result__message">

                        {percent >= 80 && (
                            <>
                                <h3>
                                    🎉 Xuất sắc!
                                </h3>

                                <p>
                                    Bạn đã nắm rất tốt kiến thức
                                    của chủ đề này.
                                </p>
                            </>
                        )}

                        {percent >= 50 && percent < 80 && (
                            <>
                                <h3>
                                    👍 Khá tốt!
                                </h3>

                                <p>
                                    Bạn đã làm khá tốt,
                                    nhưng vẫn có thể cải thiện thêm.
                                </p>
                            </>
                        )}

                        {percent < 50 && (
                            <>
                                <h3>
                                    💪 Cố gắng thêm nhé!
                                </h3>

                                <p>
                                    Hãy ôn lại kiến thức và
                                    thử lại một lần nữa.
                                </p>
                            </>
                        )}

                    </div>


                    {/* ACTIONS */}

                    <div className="result__actions">

                        <Button
                            icon={<FileTextOutlined />}
                            onClick={handleReview}
                        >
                            Xem đáp án
                        </Button>

                        <Button
                            type="primary"
                            icon={<ReloadOutlined />}
                            onClick={handleRetry}
                        >
                            Làm lại
                        </Button>

                        <Button
                            icon={<HomeOutlined />}
                            onClick={handleBackTopic}
                        >
                            Về chủ đề
                        </Button>

                    </div>

                </Card>

            </div>

        </div>
    );
}

export default Result;