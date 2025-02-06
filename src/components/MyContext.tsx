import { FC, ReactNode, createContext, useState } from "react";

interface MyContextPorps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

interface MyContextProviderProps {
  children: ReactNode;
}

const MyContext = createContext<MyContextPorps>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

const MyProvider: FC<MyContextProviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <MyContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
