import { useState } from "react";
import "./Input.style.css";
import { InputStyled } from "./InputStyled";



export default function Input({ checkStrength }) {
  const [val, setVal] = useState("");
  return (
    <div className="input__container">
      <InputStyled
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button onClick={() => checkStrength(val)}>Check!</button>
    </div>
  );
}
