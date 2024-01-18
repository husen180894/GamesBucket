import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.LGA_API_URL,
});
