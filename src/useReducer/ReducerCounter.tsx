import { useReducer } from "react";
import counterReducer, { CounterStae } from "./counterReducer";

const initialState: CounterStae = { count: 0 };

const ReducerCounter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const handleIncrement = () => dispatch({ type: "INCREMENT" });
  const handleDecrement = () => dispatch({ type: "DECREMENT" });

  return (
    <div>
      <h1>ReducerCounter</h1>

      <p>Count : {state.count}</p>

      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
    </div>
  );
};

export default ReducerCounter;
