import React, { useState, useEffect } from 'react';

function Example1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("render");
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <hr/>

    </div>
  );
}
export default Example1