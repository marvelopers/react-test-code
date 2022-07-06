import React, { memo } from "react";
import { HabitType } from "../types/habit";

interface HabitProps {
  habit: HabitType;
  onIncrement: (habit: HabitType) => void;
  onDecrement: (habit: HabitType) => void;
  onDelete: (habit: HabitType) => void;
}

const Habit = memo(
  ({ habit, onIncrement, onDecrement, onDelete }: HabitProps) => {
    const handleIncrement = () => onIncrement(habit);
    const handleDecrement = () => onDecrement(habit);
    const handleDelete = () => onDelete(habit);

    return (
      <li className="habit">
        <span className="habit-name">{habit.name}</span>
        <span className="habit-count">{habit.count}</span>
        <button
          className="habit-button habit-increase"
          onClick={handleIncrement}
        >
          <i className="fas fa-plus-square" />
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={handleDecrement}
        >
          <i className="fas fa-minus-square" />
        </button>
        <button className="habit-button habit-delete" onClick={handleDelete}>
          <i className="fas fa-trash" />
        </button>
      </li>
    );
  }
);

export default Habit;
