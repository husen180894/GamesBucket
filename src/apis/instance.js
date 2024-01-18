import axios from 'axios';
import {LGA_API_URL, API_KEY, LGA_HOST} from '@env';

const axiosInstanceLGA = axios.create({
  baseURL: LGA_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': LGA_HOST,
  },
});

export {axiosInstanceLGA};
