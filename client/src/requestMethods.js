import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTcxYzg5MTZlYTMzM2Y2ODMzYjdmYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzEwMTM0MCwiZXhwIjoxNjMzMzYwNTQwfQ.RPqqLg73eQk3F64s_d10ll5OfjM4wg4G42y2Kz8Sqoo";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Stide ${TOKEN}` },
});
