import {  get } from "../utils/request";

export const getTopicList = async () => {
    const result = await get("topics");
    return result;
}