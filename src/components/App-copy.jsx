import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { uid } from "uid";
import Weather from "./components/Weather-copy";
import useLocalStorageState from "use-local-storage-state";

const URL = "https://example-apis.vercel.app/api/weather";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState("");
  // console.log("weather.isGoodWeather", weather.isGoodWeather);

  /*if it is good waether then display activities for the weather,
    else display activities for bad weather */
  const filterGoodBadWeather_Activities = activities.filter((activity) =>
    weather.isGoodWeather
      ? activity.isForGoodWeather
      : !activity.isForGoodWeather
  );
  // console.log("filteredActivities:", filterGoodBadWeather_Activities);

  async function FetchWeather1() {
    const response = await fetch(URL);
    const weather = await response.json();
    setWeather(weather);
    console.log("data is:", weather);
  }

  FetchWeather1();

  function handleAddActivity(newActivity) {
    setActivities([
      {
        id: uid(),
        name: newActivity.name,
        /*is this activity for good or bad weather?*/
        isForGoodWeather: newActivity.checkbox ? true : false,
      },
      ...activities,
    ]);
  }
  // console.log("CurrentActivities:", activities);
  function handleRemoveActivity(activityToDelete) {
    setActivities(
      activities.filter((activity) => activity !== activityToDelete)
    );
  }

  return (
    <div className="app">
      <main className="app_main">
        <h1>Weather App</h1>
        <Weather weather={FetchWeather1} />
        <List
          onDeleteActivities={handleRemoveActivity}
          activities={filterGoodBadWeather_Activities}
        />
        <Form onAddActivity={handleAddActivity} />
      </main>
    </div>
  );
}

export default App;
