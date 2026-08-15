import { useEffect, useState } from "react";
import { getQuestionQuizId } from "../../services/questionsServices";
import { useParams } from "react-router-dom";
import { Button, Card, message, Progress, Radio, Tag } from 'antd';
import {
    ArrowLeftOutlined,
    ArrowRightOutlined,
} from "@ant-design/icons";
import "./Question.scss";
import { createAnswers } from "../../services/answersServices";
import { getCookie } from "../../helpers/cookie";
function Question(){
    const params=useParams();
    const [questions,setQuestions]=useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [messageApi, contextHolder] = message.useMessage();
    const [answers, setAnswers] = useState([]);
    useEffect(()=>{
        const fetchApi = async () => {
            const resQuestion= await getQuestionQuizId(params.quizId);
            setQuestions(resQuestion);
        }
        fetchApi()
    },[])
    if (questions.length === 0) {
        return (
            <div className="question__loading">
                Đang tải câu hỏi...
            </div>
        );
    }
    const currentQuestion = questions[currentIndex];
    const progress=((currentIndex+1)/questions.length)*100;
    const handleSelectAnswer = (value) => {
        setSelectedAnswer(value);
        setAnswers(prev => {
            const exists = prev.find(
                item => item.questionId === currentQuestion.id
            );
            // Nếu câu này đã chọn rồi → cập nhật đáp án
            if (exists) {
                return prev.map(item =>
                    item.questionId === currentQuestion.id
                        ? {
                            ...item,
                            answer: value
                        }
                        : item
                );

            }
            // // Nếu chưa có → thêm mới
            return [
                ...prev,
                {
                    questionId: currentQuestion.id,
                    answer: value
                }
            ];

        });
    };
    const handleNext = () => {
        if (selectedAnswer === null) {
            messageApi.warning(
                "Vui lòng chọn một đáp án!"
            );
            return;
        }
        if (currentIndex < questions.length - 1) {
            const nextIndex = currentIndex + 1;
            const nextQuestion = questions[nextIndex];
            
            const savedAnswer = answers.find(
                item => item.questionId === nextQuestion.id
            );
            console.log(savedAnswer);
            setCurrentIndex(nextIndex);
            if (savedAnswer) {
                setSelectedAnswer(savedAnswer.answer);
            } else {
                setSelectedAnswer(null);
            }
        } else {
            // messageApi.success(
            //     "Bạn đã hoàn thành bài quiz!"
            // );
            handleSubmitQuiz();
        }
    };
    const handlePrevious = () => {
        if (currentIndex > 0) {
            const previousIndex = currentIndex - 1;
            const previousQuestion = questions[previousIndex];
            const savedAnswer = answers.find(
                item => item.questionId === previousQuestion.id
            );
            setCurrentIndex(previousIndex);
            if (savedAnswer) {
                setSelectedAnswer(savedAnswer.answer);
            } else {
                setSelectedAnswer(null);
            }
        }
    };
    const handleSubmitQuiz= async ()=>{
        const data = {
            userId: Number(getCookie("id")),
            quizId: Number(params.quizId),
            answers: answers
        };
        const response = await createAnswers(data);
        if (response) {
            messageApi.success(
                "Bạn đã hoàn thành bài quiz!"
            );
        }
    }
    return(
         <>
         {contextHolder}
            <div className="question">
                <div className="container">
                    <div className="question__header">
                        <div>
                            <h1>
                                Kiểm tra kiến thức
                            </h1>
                        </div>
                        <div className="question__counter">
                            {currentIndex+1}
                            /
                            {questions.length}
                        </div>

                    </div>
                    <div className="question__progress">
                        <Progress  
                            percent={progress}
                            showInfo={false}
                        />
                    </div>
                    <Card className="question__card">
                        <div className="question__top">
                            <Tag color="purple">
                                C{currentIndex+1}/
                                {questions.length}
                            </Tag>
                            <Tag>
                                Câu
                            </Tag>
                        </div>
                        <div className="question__title">
                            {currentQuestion.question}
                        </div>
                        <Radio.Group
                            value={selectedAnswer}
                             onChange={(e) =>
                                    handleSelectAnswer(
                                        e.target.value
                                    )
                             }
                            className="question__answers"
                        >
                            {currentQuestion.answers.map((answer,index)=>{
                                  const answerNumber =
                                    index + 1;

                                const answerLetter =
                                    String.fromCharCode(
                                        65 + index
                                    );
                                return(
                                    <Radio
                                        key={answerNumber}
                                        value={answerNumber}
                                        className="question__answer"
                                    >
                                        <span className="question__answer-letter">
                                            {answerLetter}
                                        </span>

                                        <span className="question__answer-text">
                                            {answer}
                                        </span>
                                    </Radio>
                                )
                            })}
                        </Radio.Group>

                        <div className="question__footer">
                            <Button
                                icon={<ArrowLeftOutlined />}
                                disabled={
                                    currentIndex === 0
                                }
                                onClick={handlePrevious}
                            >
                                Câu trước
                            </Button>
                            <Button
                                type="primary"
                                icon={<ArrowRightOutlined />}
                                iconPosition="end"
                                onClick={handleNext}
                            >
                                {currentIndex === questions.length - 1
                                    ? "Hoàn thành"
                                    : "Câu tiếp theo"
                                }
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}
export default Question;