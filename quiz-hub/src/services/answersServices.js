import { post } from "../utils/request";

export const createAnswers = async (option) => {
    const result = await post(`answers`,option);
    return result;
}