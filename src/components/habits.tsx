import React from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

export type HabitType = {
  id: number;
  name: string;
  count: number;
};

interface HabitsProps {
  habits: HabitType[];
  onIncrement: (habit: HabitType) => void;
  onDecrement: (habit: HabitType) => void;
  onDelete: (habit: HabitType) => void;
  onAdd: (name: string) => void;
  onReset: () => void;
}

const Habits = ({
  habits,
  onIncrement,
  onDecrement,
  onDelete,
  onAdd,
  onReset,
}: HabitsProps) => {
  return (
    <div className="habits">
      <HabitAddForm onAdd={onAdd} />
      <ul>
        {habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <button className="habits-reset" onClick={onReset}>
        Reset All
      </button>
    </div>
  );
};

export default Habits;
