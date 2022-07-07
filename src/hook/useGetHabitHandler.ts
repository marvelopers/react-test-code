import React, { useCallback } from "react";
import { HabitType } from "../types/habit";

const useGetHabitHandler = (habits: HabitType[], maxHabits = 100) => {
  const getHabits = () => habits;

  const incrementHandler = (habit: HabitType, update: any) => {
    const result = habits.map((prev) =>
      prev.id === habit.id ? { ...prev, count: prev.count + 1 } : prev
    );
    update(result);
  };

  const decrementHandler = (habit: HabitType, update: any) => {
    const result = habits.map((prev) =>
      prev.id === habit.id
        ? { ...prev, count: prev.count - 1 < 0 ? 0 : prev.count - 1 }
        : prev
    );
    update(result);
  };

  const deleteHandler = (habit: HabitType, update: any) => {
    const result = habits.filter((prev) => prev.id !== habit.id);
    update(result);
  };

  const addHandler = (name: string, update: any) => {
    if (habits.length === maxHabits) {
      throw new Error(`습관의 갯수는 ${maxHabits}이상이 될 수 없습니다`);
    }
    const result = [...habits, { id: Date.now(), name, count: 0 }];
    update(result);
  };

  const resetHandler = (update: any) => {
    const result = habits.map((prev) =>
      prev.count !== 0 ? { ...prev, count: 0 } : prev
    );
    update(result);
  };

  return {
    getHabits,
    incrementHandler,
    decrementHandler,
    deleteHandler,
    addHandler,
    resetHandler,
  };
};

export default useGetHabitHandler;
