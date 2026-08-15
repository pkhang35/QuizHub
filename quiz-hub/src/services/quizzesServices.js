import { get } from "../utils/request";

export const getQuizList = async () => {
    const result = await get("quizzes");
    return result;
}

export const getTopicQuiz = async (topicId) => {
    const result = await get(`quizzes?topicId=${topicId}`);
    return result;
}