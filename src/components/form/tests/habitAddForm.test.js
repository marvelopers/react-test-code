import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HabitAddForm from "../habitAddForm";

describe("HabitAddForm", () => {
  let onAdd;
  beforeEach(() => {
    onAdd = jest.fn();
  });

  it("calls onAdd when button is Clicked", () => {
    render(<HabitAddForm onAdd={onAdd} />);

    const input = screen.getByPlaceholderText("Habit");
    const button = screen.getByText("Add");

    userEvent.type(input, "New Habit");
    userEvent.click(button);

    expect(onAdd).toHaveBeenCalledWith("New Habit");
  });
});
