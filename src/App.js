import React, { useState, useEffect, useRef } from "react";
import "./App.scss";
import { MegaSet } from "./range";

function App() {
  const [ranges, setRanges] = useState([]);
  const startRange = useRef(null);
  const endRange = useRef(null);

  const handleAddRange = () => {
    const prev = [...ranges.flat()];
    const res = new MegaSet(prev)
      .setAddRange(startRange.current.value, endRange.current.value)
      .setSort()
      .toRangeArrays();
    setRanges(res);
  };
  const handleDelete = () => {
    const current = new MegaSet([...ranges.flat()]);
    const result = current
      .setSplice(startRange.current.value, endRange.current.value)
      .toRangeArrays();
    setRanges(result);
  };

  useEffect(() => {
    const res = new MegaSet([])
      .setAddRange(1, 16)
      .setAddRange(22, 24)
      .setAddRange(30, 35)
      .setAddRange(330, 512)
      .setSort()
      .toRangeArrays();
    setRanges(res);
  }, []);

  return (
    <div className="App">
      <div className="form-addRange">
        <label>
          <input
            ref={startRange}
            type="number"
            id="range-start"
            placeholder=" "
          />
          <span className="label-title">Start value</span>
        </label>
        -
        <label>
          <input ref={endRange} type="number" id="range-end" placeholder=" " />
          <span className="label-title">End value</span>
        </label>
        <button onClick={handleAddRange}>Add range</button>
        <button className="btn-remove" onClick={handleDelete}>
          Remove range
        </button>
      </div>
      <div className="results">
        {ranges.map(range => (
          <p>{`[${range[0]} - ${range[range.length - 1]}]`}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
