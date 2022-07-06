import React, { useCallback } from "react";

type HabitType = {
  id: number;
  name: string;
  count: number;
};

const useGetHabitHandler = (habits: HabitType[]) => {
  const incrementHandler = useCallback((habit, update) => {
    const result = habits.map((prev) =>
      prev.id === habit.id ? { ...prev, count: prev.count + 1 } : prev
    );
    update(result);
  }, []);

  const decrementHandler = useCallback((habit, update) => {
    const result = habits.map((prev) =>
      prev.id === habit.id
        ? { ...prev, count: prev.count - 1 < 0 ? 0 : prev.count - 1 }
        : prev
    );
    update(result);
  }, []);

  const deleteHandler = useCallback((habit, update) => {
    const result = habits.filter((prev) => prev.id !== habit.id);
    update(result);
  }, []);

  const addHandler = useCallback((name, update) => {
    const result = [...habits, { id: Date.now(), name, count: 0 }];
    update(result);
  }, []);

  const resetHandler = useCallback((update) => {
    const result = habits.map((prev) =>
      prev.count !== 0 ? { ...prev, count: 0 } : prev
    );
    update(result);
  }, []);

  return {
    incrementHandler,
    decrementHandler,
    deleteHandler,
    addHandler,
    resetHandler,
  };
};

export default useGetHabitHandler;
