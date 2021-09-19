import React, { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

const Effect = () => {
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div >
      <div className="effect">{!data ? "loading..." : data}
      <div>count: {count} </div>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
      <div className="texteffect">
            <h2>Kelompok 36</h2>
            <h3>Afrina Ayu Insani (21120118120006)</h3> 
            <h3>Jeremy Martin Simanjuntak (21120118120024)</h3>
      </div>
      </div>
    </div>
  );
};

export default Effect;