import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import HabitAddForm from "../habitAddForm";

describe("HabitAddForm", () => {
  it("renders - 스냅샷 테스트", () => {
    const component = renderer.create(<HabitAddForm onAdd={jest.fn()} />);
  });

  describe("Form submit", () => {
    let onAdd;
    let input;
    let button;
    beforeEach(() => {
      onAdd = jest.fn();
      render(<HabitAddForm onAdd={onAdd} />);

      input = screen.getByPlaceholderText("Habit");
      button = screen.getByText("Add");
    });

    it("calls onAdd when button is Clicked and valid habit is entered", () => {
      userEvent.type(input, "New Habit");
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledWith("New Habit");
    });

    it("does not call onAdd when the habit is empty", () => {
      userEvent.type(input, "");
      userEvent.click(button);

      expect(onAdd).toBeCalledTimes(0);
    });
  });
});
