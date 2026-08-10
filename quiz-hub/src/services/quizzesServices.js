import { get } from "../utils/request";

export const getQuizList = async () => {
    const result = await get("quizzes");
    return result;
}