import React from "react";
import "./Form.css";
// import Select from "react-select";

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

export default function Form({ onAddActivity }) {
  function handleSubmitButton(event) {
    event.preventDefault();

    /*read users input such as activity name and checkbox for good weather*/
    const formData = new FormData(event.target);
    const CurrentActivity = Object.fromEntries(formData);
    /*save the currentActivity to the LocalStorage*/
    onAddActivity(CurrentActivity);
    CurrentActivity !== undefined ? hideH1() : ShowH1();
    event.target.reset();
    event.target.name.focus();
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmitButton}>
        <div className="group_form">
          <h2 className="title_form">Add a new activity: </h2>
        </div>
        <div className="group_form">
          <label htmlFor="name" className="label_form">
            Name:
          </label>
          &nbsp; &nbsp;
          <input type="text" name="name" id="name_form" required />
        </div>
        <div className="group_form"></div>
        <div id="group-form_id" className="group_form">
          <label htmlFor="checkbox-weather">Good-weather activity?</label>
          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="checkbox" name="checkbox" id="checkbox" />
        </div>
        <div className="group_form">
          <button
            type="submit"
            name="submit"
            id="submit"
            className="rain-button"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
