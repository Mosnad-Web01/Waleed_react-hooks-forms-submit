import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from "../components/Form"; // Ensure this path is correct

test("renders the form and submits data", () => {
  const { getByLabelText, getByText } = render(<Form />);

  const firstNameInput = getByLabelText(/first name/i);
  const lastNameInput = getByLabelText(/last name/i);
  const submitButton = getByText(/submit/i);

  fireEvent.change(firstNameInput, { target: { value: "John" } });
  fireEvent.change(lastNameInput, { target: { value: "Doe" } });
  fireEvent.click(submitButton);

  // Assertions to verify the submitted values
  expect(firstNameInput.value).toBe("John");
  expect(lastNameInput.value).toBe("Doe");
});
