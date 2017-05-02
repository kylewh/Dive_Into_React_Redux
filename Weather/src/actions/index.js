import axios from 'axios'
import { FETCH_WEATHER } from './action-list'

const API_KEY = 'e2ef22740207f6f8ec4373d47dd7f5ea'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  console.log(url)
  const request = axios.get(url).catch((error) => new Error(error))
  return {
    type: FETCH_WEATHER,
    payload: request // Watch out! This is a promise
  }
}