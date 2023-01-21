// import React from 'react'
import { ChangeEvent, useEffect, useState } from "react";
import { forecastType, optionCityType } from "../types";

const useForecast = () => {

  const API_KEY = process.env.REACT_APP_API_KEY;

  const [term, setTerm] = useState<string>("");
  const [options, setOptions] = useState<[]>([]);
  const [city, setCity] = useState<optionCityType | null>();
  const [forecast, setForecast] = useState<forecastType | null>()

  const getSearch = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${API_KEY}`
    )
      .then((res) => res.json())
      // .then((data) => console.log(data) setOptions(data));
      .then((data) => setOptions(data));

  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(value);
    if (value === "") return;
    getSearch(value);
  };



  const getWeatherData = (city: optionCityType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const forecastData = {
          ...data.city,
          list : data.list.slice(0,16),
        }
        setForecast(forecastData);
      });
  };

  console.log(forecast)

  const handleSubmit = () => {
    if (!city) return;

    getWeatherData(city);
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);
  return {
    handleChange, handleSubmit,term, options,setCity,forecast,setForecast, setTerm
  }
}

export default useForecast