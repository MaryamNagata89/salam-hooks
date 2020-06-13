import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const double = () => setCount((previousCount) => previousCount * 2);
  const third = () =>
    setCount((count) => {
      if (count % 3 === 0) {
        return count / 3;
      } else {
        return count;
        //return alert('間違ってる、三の倍数入れてよ');
      }
    });
  return (
    <>
      <div>count:{count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>reset</button>

      <button onClick={double}>*2</button>
      <button onClick={third}>さんの倍数の時だけ実行</button>
    </>
  );
};

export default App;
