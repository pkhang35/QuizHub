import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Progress, Tag } from "antd";

import {
  ArrowLeftOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { getQuestionQuizId } from "../../services/questionsServices";
import { getAnswersByUserQuiz } from "../../services/answersServices";
import { getCookie } from "../../helpers/cookie";
import "./AnswerDetail.scss";
function AnswerDetail() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const userId = Number(getCookie("id"));
        const responseQuestions = await getQuestionQuizId(quizId);
        const responseAnswers = await getAnswersByUserQuiz(userId, quizId);
        setQuestions(responseQuestions);
        if (responseAnswers && responseAnswers.length > 0) {
          const latestAnswer = responseAnswers[responseAnswers.length - 1];
          setUserAnswers(latestAnswer.answers);
        }
      } catch (error) {
        console.log("Lỗi lấy dữ liệu:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, [quizId]);
  if (loading) {
    return (
      <div className="answers__loading">
        <div className="answers__loading-spinner">Đang tải đáp án...</div>
      </div>
    );
  }
  let correct = 0;
  questions.forEach((question) => {
    const userAnswer = userAnswers.find(
      (item) => item.questionId === question.id,
    );
    if (userAnswer && userAnswer.answer === question.correctAnswer) {
      correct++;
    }
  });
  const total = questions.length;
  const wrong = total - correct;
  const percent = total > 0 ? Math.round((correct / total) * 100) : 0;
  return (
    <div className="answers">
      <div className="container">
        <div className="answers__header">
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate(-1)}
            className="answers__back"
          >
            Quay lại
          </Button>
          <div className="answers__heading">
            <div className="answers__heading-icon">
              <FileTextOutlined />
            </div>
            <div>
              <h1>Xem đáp án</h1>
              <p>Kiểm tra lại từng câu trả lời của bạn</p>
            </div>
          </div>
        </div>
        <div className="answers__summary">
          <Card className="answers__summary-card">
            <div className="answers__summary-icon answers__summary-icon--correct">
              <CheckCircleOutlined />
            </div>
            <div>
              <strong>{correct}</strong>
              <span>Câu đúng</span>
            </div>
          </Card>
          <Card className="answers__summary-card">
            <div className="answers__summary-icon answers__summary-icon--wrong">
              <CloseCircleOutlined />
            </div>
            <div>
              <strong>{wrong}</strong>
              <span>Câu sai</span>
            </div>
          </Card>
          <Card className="answers__summary-card">
            <div className="answers__summary-icon answers__summary-icon--total">
              <FileTextOutlined />
            </div>
            <div>
              <strong>{total}</strong>
              <span>Tổng số câu</span>
            </div>
          </Card>
        </div>
        <Card className="answers__score">
          <div>
            <h2>Kết quả của bạn</h2>
            <p>
              Bạn đã trả lời đúng{" "}
              <strong>
                {correct}/{total}
              </strong>{" "}
              câu hỏi.
            </p>
          </div>
          <div className="answers__score-progress">
            <Progress percent={percent} showInfo />
          </div>
        </Card>
        <div className="answers__list">
          {questions.map((question, index) => {
            const userAnswer = userAnswers.find(
              (item) => item.questionId === question.id,
            );
            const isCorrect = userAnswer?.answer === question.correctAnswer;
            return (
              <Card
                key={question.id}
                className={`answers__question-card ${
                  isCorrect
                    ? "answers__question-card--correct"
                    : "answers__question-card--wrong"
                }`}
              >
                <div className="answers__question-header">
                  <Tag color="purple" className="answers__question-number">
                    Câu {index + 1}
                  </Tag>
                  {isCorrect ? (
                    <Tag color="success" icon={<CheckCircleOutlined />}>
                      Chính xác
                    </Tag>
                  ) : (
                    <Tag color="error" icon={<CloseCircleOutlined />}>
                      Sai
                    </Tag>
                  )}
                </div>
                <h2 className="answers__question-title">{question.question}</h2>
                <div className="answers__options">
                  {question.answers.map((answer, answerIndex) => {
                    const answerNumber = answerIndex + 1;
                    const answerLetter = String.fromCharCode(65 + answerIndex);
                    const isUserAnswer = userAnswer?.answer === answerNumber;
                    const isCorrectAnswer =
                      question.correctAnswer === answerNumber;
                    let optionClass = "answers__option";
                    if (isCorrectAnswer) {
                      optionClass += " answers__option--correct";
                    }
                    if (isUserAnswer && !isCorrectAnswer) {
                      optionClass += " answers__option--wrong";
                    }
                    return (
                      <div key={answerNumber} className={optionClass}>
                        <span className="answers__letter">{answerLetter}</span>
                        <span className="answers__text">{answer}</span>
                        {isCorrectAnswer && (
                          <span className="answers__option-label answers__option-label--correct">
                            <CheckCircleOutlined />
                            Đáp án đúng
                          </span>
                        )}
                        {isUserAnswer && !isCorrectAnswer && (
                          <span className="answers__option-label answers__option-label--wrong">
                            <CloseCircleOutlined />
                            Bạn chọn
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="answers__result">
                  <div>
                    <span>Bạn chọn:</span>

                    <strong
                      className={
                        isCorrect
                          ? "answers__result-correct"
                          : "answers__result-wrong"
                      }
                    >
                      {userAnswer
                        ? String.fromCharCode(64 + userAnswer.answer)
                        : "Chưa trả lời"}
                    </strong>
                  </div>

                  {!isCorrect && (
                    <div>
                      <span>Đáp án đúng:</span>
                      <strong className="answers__result-correct">
                        {String.fromCharCode(64 + question.correctAnswer)}
                      </strong>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="answers__bottom">
          <Button icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)}>
            Quay lại kết quả
          </Button>
        </div>
      </div>
    </div>
  );
}
export default AnswerDetail;
