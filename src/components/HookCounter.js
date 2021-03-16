import React, { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count (Hook): {count}</button>
    </div>
  );
};

export default HookCounter;
