/* eslint-disable react/prop-types */
import "./Weather.css";
export default function Weather({ weather }) {
  // var element = document.getElementById("rain-button");

  return (
    <header id="weather_Header">
      <h2>
        {weather.condition} {weather.temperature} °C
      </h2>

      <h2 id="h2_header">
        {weather.isGoodWeather
          ? "The weather is great, go outside and: "
          : "Bad weather outside! Here's what you can do now:"}
      </h2>
      <h5 id="my-h1">Go a head and add your favorite Activity!</h5>

      <h6>
        {weather.isGoodWeather
          ? (document.body.style.backgroundImage = `url("https://szeged365.hu/wp-content/uploads/2020/10/Sunshine-gif.gif")`)
          : (document.body.style.backgroundImage = `url("https://clipart-library.com/img/1379250.gif")`)}
      </h6>
    </header>
  );
}
