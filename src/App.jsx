/*import Libraries*/
import { useState, useEffect } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

/*import css*/
import "./App.css";

/*import Components*/
import Form from "./components/Form";
import List from "./components/List";
import Weather from "./components/Weather";

function hideH1() {
  // Get the h1 tag by its id
  var h1 = document.getElementById("my-h1");
  // Set its display value to "none"
  h1.style.display = "none";
}

function ShowH1() {
  // Get the h1 tag by its id
  var h1 = document.getElementById("my-h1");
  // Set its display value to "none"
  h1.style.display = "block";
  console.log("test");
}
const link = "https://example-apis.vercel.app/api/weather";

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

  useEffect(() => {
    /*fetch the waether api*/
    async function fetchWeatherAPI() {
      try {
        const response = await fetch(link);
        const weather = await response.json();
        setWeather(weather);
      } catch (error) {
        console.log("Check or fetch the error: ", error);
      }
    }
    fetchWeatherAPI();

    /*set weather every 5 seconds*/
    const fetchDelay_Interval = setInterval(fetchWeatherAPI, 5000);
    return () => {
      /*clear the timer*/
      clearInterval(fetchDelay_Interval);
    };
  }, [setWeather]);

  /*add a new activity for a Good/Bad weather and merge it to the previous activities */
  // function handleAddActivity(newActivity) {
  //   console.log("newActivity", newActivity);

  //   setActivities([
  //     {
  //       id: uid(),
  //       name: newActivity.name,
  //       /*is this activity for good or bad weather?*/
  //       isForGoodWeather: newActivity.checkbox ? true : false,
  //     },
  //     ...activities,
  //   ]);
  // }

  function handleAddActivity(newActivity) {
    console.log("newActivity", newActivity);
    console.log("activities", activities);
    const doesActivityExist = activities.some(
      (activity) => activity.name === newActivity.name
    );
    if (!doesActivityExist) {
      setActivities([
        {
          id: uid(),
          name: newActivity.name,
          // is this activity for good or bad weather?
          isForGoodWeather: newActivity.checkbox ? true : false,
        },
        ...activities,
      ]);
    }
  }

  // function handleAddActivity1(newActivity) {
  //   setActivities([
  //     {
  //       id: uid(),
  //       name: newActivity.name,
  //       /*is this activity for good or bad weather?*/
  //       isForGoodWeather: newActivity.checkbox ? true : false,
  //     },
  //     ...activities,
  //   ]);
  // }
  console.log(activities);

  /*manage to delete an activity*/
  function handleDeleteActivity(activityToDelete) {
    setActivities(
      activities.filter((activity) => activity !== activityToDelete)
    );

    /*add delete notification h1 tag saying no activities yet*/
    activities !== undefined ? ShowH1() : hideH1();
  }

  return (
    <div className="app">
      <main>
        <h1>Weather App</h1>

        <Weather weather={weather} />
        {/* <h3 id="header-id_activity">Your activities are: </h3> */}

        <List
          onDeleteActivity={handleDeleteActivity}
          LisOfActivities={filterGoodBadWeather_Activities}
        />
        <Form
          onAddActivity={handleAddActivity}
          // onAddActivity1={handleAddActivity1}
        />
      </main>
    </div>
  );
}

export default App;
