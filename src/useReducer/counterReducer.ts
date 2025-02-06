export type CounterStae = {
  count: number;
};

type IncrementAction = {
  type: "INCREMENT";
};

type DecrementAction = {
  type: "DECREMENT";
};

export type CounterAction = IncrementAction | DecrementAction;

const counterReducer = (
  state: CounterStae,
  action: CounterAction
): CounterStae => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
