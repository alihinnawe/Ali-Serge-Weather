import React from "react";
import "./Weather.css";

export default function Weather({ onFetchWeather }) {
  return (
    <>
      <h1>
        {onFetchWeather.condition} {onFetchWeather.temprature} °C
      </h1>
      <h2>
        {" "}
        {onFetchWeather.isGoodWeather
          ? "the weather is great"
          : "bad weather today!"}{" "}
      </h2>
    </>
  );
}
