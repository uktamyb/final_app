import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  function qushuv() {
    setCount(count + 1);
  }

  function ayiruv() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={qushuv}>qushuv</button>
      <button onClick={ayiruv}>ayiruv</button>
    </div>
  );
};

export default Counter;
