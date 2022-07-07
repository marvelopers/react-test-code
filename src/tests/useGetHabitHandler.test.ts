import useGetHabitHandler from "../hook/useGetHabitHandler";
import { HabitType } from "../types/habit";

type Handler = {
  incrementHandler: (habit: HabitType, update: unknown) => void;
  decrementHandler: (habit: HabitType, update: unknown) => void;
  deleteHandler: (habit: HabitType, update: unknown) => void;
  addHandler: (name: string, update: unknown) => void;
  resetHandler: (update: unknown) => void;
};

describe("useGetHabitHandler", () => {
  const habits = [
    { id: 1, name: "Reading", count: 1 },
    { id: 2, name: "Walking", count: 0 },
  ];

  let handler: Handler;
  let update: jest.Mock<any, any>;

  beforeEach(() => {
    handler = useGetHabitHandler(habits);
    update = jest.fn();
  });

  it("incrementHandler는 habit를 증가시키고 콜백 함수로 업데이트 한다.", () => {
    const { incrementHandler } = useGetHabitHandler(habits);
    incrementHandler(habits[0], update);

    expect(habits[0].count).toBe(1);
    checkUpdateIsCalled();
  });

  it("incrementHandler는 habit를 증가시키고 콜백 함수로 업데이트 한다.", () => {
    const { decrementHandler } = useGetHabitHandler(habits);
    decrementHandler(habits[0], update);

    expect(habits[0].count).toBe(1);
    checkUpdateIsCalled();
  });

  it("throws an error when the max habits limit is exceeded", () => {
    const { addHandler } = useGetHabitHandler(habits, 3);
    addHandler("Eating", update);
    addHandler("Eating", update);
    addHandler("Eating", update);
    addHandler("Eating", update);

    expect(() => {
      addHandler("Eating", update);
    }).toThrowError("습관의 갯수는 3이상이 될 수 없습니다");
  });

  const checkUpdateIsCalled = () => {
    expect(update).toHaveBeenCalledTimes(1);
  };
});
