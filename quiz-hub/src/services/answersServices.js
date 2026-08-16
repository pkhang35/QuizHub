import { get, post } from "../utils/request";

export const createAnswers = async (option) => {
    const result = await post(`answers`,option);
    return result;
}
export const getAnswersByUserQuiz= async (userId, quizId) => {
    const result = await get(`answers?userId=${userId}&quizId=${quizId}`)
    return result;
}
export const getAnswersByUser = async (userId) => {
    const result = await get(`answers?userId=${userId}`);
    return result;
};