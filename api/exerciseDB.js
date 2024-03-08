import axios from "axios";
import { rapidAPI } from "../constants";

const baseUrl = "https://exercisedb.p.rapidapi.com";

const apiCall = async (url, params) => {
  try {
    const options = {
      method: "GET",
      url,
      params,
      headers: {
        "X-RapidAPI-Key": rapidAPI,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("error: ", error.message);
  }
};

export const fetchExercisesByBodyPart = async (bodyPart) => {
  const data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyPart}`);
  return data;
};
