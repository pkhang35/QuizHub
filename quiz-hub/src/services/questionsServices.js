import { get } from "../utils/request";

export const getQuestionQuizId = async (quizId) => {
    const result = await get(`questions?quizId=${quizId}`);
    return result;
}