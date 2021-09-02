import { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, update] = useState();
  const [isSolved, setSolved] = useState(false);
  const [solution, setSolution] = useState("");
  const [notice, setNotice] = useState("");
  const change = (e) => {
    const answer = e.target.value;
    let result = "Invalid input.";
    if (answer.replaceAll(" ", "").match(/^([0-9]+,?)+[0-9]$/)) {
      result = "Valid input.";
    }
    update(answer);
    setNotice(result);
  };
  return (
    <div className="App">
      <h1>Hello. {notice}</h1>
      <label>
        {" "}
        Enter a list of at least three numbers:
        <input
          type="text"
          value={value}
          onChange={change}
          placeholder="numbers and commas only"
        />
      </label>
      {isSolved ? <h2>here</h2> : <h2>not solved</h2>}
    </div>
  );
}
