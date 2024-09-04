import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    console.log(`Submitted: ${firstName} ${lastName}`); // Log the values
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
      </label>
      <label>
        Last Name:
        <input type="text" onChange={handleLastNameChange} value={lastName} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
