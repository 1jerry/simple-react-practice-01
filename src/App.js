import { useState } from "react";
import "./styles.css";

export default function App() {
  const [value,update] = useState('unknown')
  const change = e => {update(e.target.value)}
  return (
    <div className="App">
      <h1>Hello {value}</h1>
      <label > What is your name?  
      <input type="text" value={value} onChange={change} />
      </label>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
