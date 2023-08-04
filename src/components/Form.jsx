import React from "react";
import "./Form.css";
export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formElement = new FormData(event.target);
    const NewData = Object.fromEntries(formElement);
    onAddActivity(NewData);
    event.target.reset();
    event.target.elements.name.focus();
  }
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form_title">Add activity </h2>
        <label htmlFor="name" className="form_label">
          Name:
        </label>
        <input type="text" name="name" id="name" />
        <label htmlFor="checkbox" className="form_label">
          Is the Weather good for activities?
        </label>
        <input type="checkbox" name="checkbox" id="checkbox" />
        <button type="submit" name="submit" id="submit" className="form_button">
          Submit!
        </button>
      </form>
    </>
  );
}
