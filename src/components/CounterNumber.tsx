import { useContext } from "react";
import { MyContext } from "./MyContext";

const CounterNumber = () => {
  const { count, increment, decrement } = useContext(MyContext);

  return (
    <div>
      <h1>CounterNumber</h1>

      <p>Count : {count}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterNumber;
