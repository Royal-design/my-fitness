import { EXERCISE_DB_API_KEY } from "@env";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://exercisedb.p.rapidapi.com",
  timeout: 10000,
  headers: {
    "X-RapidAPI-Key": EXERCISE_DB_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
});

export default apiClient;
