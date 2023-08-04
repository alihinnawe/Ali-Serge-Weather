import "./App.css";
import Form from "./components/Form";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
// import { useState } from "react";
function App() {
  // const [activities, setActivities] = useState("activities");
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  function handleAddActivity(newActivity) {
    setActivities([
      {
        id: uid(),
        Activityname: newActivity.name,
        isForGoodWeather: newActivity.checkbox ? true : false,
      },
      ...activities,
    ]);
  }
  return (
    <div className="app">
      <main className="app_main">
        <Form onAddActivity={handleAddActivity} />
      </main>
    </div>
  );
}
export default App;
