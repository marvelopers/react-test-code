import React from "react";
import renderer, { create } from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import Habits from "../habits";
import userEvent from "@testing-library/user-event";

describe("Habit component", () => {
  const habits = [
    { name: "Reading", count: 4, id: 1 },
    { name: "Coding", count: 0, id: 3 },
  ];
  let HabitsComponent;
  let onIncrement;
  let onDecrement;
  let onDelete;
  let onAdd;
  let onReset;

  beforeEach(() => {
    onIncrement = jest.fn();
    onDecrement = jest.fn();
    onDelete = jest.fn();
    onAdd = jest.fn();
    onReset = jest.fn();
    HabitsComponent = (
      <Habits
        habits={habits}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
        onAdd={onAdd}
        onReset={onReset}
      />
    );
  });

  it("renders", () => {
    const component = renderer.create(HabitsComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("Button Click", () => {
    beforeEach(() => {
      render(HabitsComponent);
    });

    it("calls onAdd when clicking the add button", () => {
      const input = screen.getByPlaceholderText("Habit");
      const button = screen.getByText("Add");
      const newHabit = "New Habit";
      userEvent.type(input, newHabit);
      userEvent.click(button);
      expect(onAdd).toHaveBeenCalledWith(newHabit);
    });

    it("calls onIncrement when clicking the increase button", () => {
      const button = screen.getAllByAltText("increase")[0];
      userEvent.click(button);
      expect(onIncrement).toHaveBeenCalledWith(habits[0]);
    });

    it("calls onDecrement when clicking the decrease button", () => {
      const button = screen.getAllByAltText("decrease")[0];
      userEvent.click(button);
      expect(onDecrement).toHaveBeenCalledWith(habits[0]);
    });

    it("calls onDelete when clicking the delete button", () => {
      const button = screen.getAllByAltText("delete")[0];
      userEvent.click(button);
      expect(onDelete).toHaveBeenCalledWith(habits[0]);
    });

    it("calls onDecrement when clicking the reset button", () => {
      const button = screen.getAllByAltText("Reset All")[0];
      userEvent.click(button);
      expect(onReset).toBeCalledTimes(1);
    });
  });
});
