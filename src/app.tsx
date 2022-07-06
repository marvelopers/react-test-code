import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import useGetHabitHandler from "./hook/useGetHabitHandler";

const App = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Walking", count: 0 },
    { id: 3, name: "Coding", count: 0 },
  ]);

  const handler = useGetHabitHandler(habits);

  const handleIncrement = useCallback(
    (habit) => handler.incrementHandler(habit, setHabits),
    []
  );

  const handleDecrement = useCallback(
    (habit) => handler.decrementHandler(habit, setHabits),
    []
  );

  const handleDelete = useCallback(
    (habit) => handler.deleteHandler(habit, setHabits),
    []
  );

  const handleAdd = useCallback(
    (name) => handler.addHandler(name, setHabits),
    []
  );

  const handleReset = useCallback(() => handler.resetHandler(setHabits), []);

  return (
    <>
      <Navbar totalCount={habits.filter((item) => item.count > 0).length} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}
      />
    </>
  );
};

export default App;
