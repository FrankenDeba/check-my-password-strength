import { useEffect, useState } from "react";
import Input from "./components/Input";
import Meter from "./components/Meter";
import Descriptor from "./components/Descriptor";
import {
  lowerCaseLetters,
  upperCaseLetters,
  numbers,
  specialChars,
} from "./config";
import "./App.css";
import Test from "./components/Test";

export default function App() {
  const [score, setScore] = useState(0);

  const checkStrength = (val) => {
    let totalScore = 0;
    let smallCaseWt = 1;
    let capitalWt = 3;
    let numberWt = 5;
    let specialCharWt = 8;
    let smallCaseCount = 0;
    let capitalCount = 0;
    let numberCount = 0;
    let specialCharCount = 0;
    let valArr = val.split("") || [];
    valArr.forEach((char, index) => {
      let typeOfChar = "smallCase";
      if (lowerCaseLetters[char]) {
        typeOfChar = "smallCase";
        totalScore += smallCaseWt;
        smallCaseCount = smallCaseCount + 1;
      }
      if (upperCaseLetters[char]) {
        typeOfChar = "capitalCase";
        totalScore = totalScore + capitalWt;
        capitalCount = capitalCount + 1;
      }
      if (numbers[char]) {
        typeOfChar = "number";
        totalScore = totalScore + numberWt;
        numberCount = numberCount + 1;
      }
      if (specialChars[char]) {
        typeOfChar = "specialChar";
        totalScore = totalScore + specialCharWt;
        specialCharCount = specialCharCount + 1;
      }

      if (index !== 0) {
        switch (typeOfChar) {
          case "smallCase":
            if (!lowerCaseLetters[valArr[index - 1]])
              totalScore = totalScore + 2;
            break;

          case "capitalCase":
            if (!upperCaseLetters[valArr[index - 1]])
              totalScore = totalScore + 2;
            break;

          case "number":
            if (!numbers[valArr[index - 1]]) totalScore = totalScore + 2;
            break;

          case "specialChar":
            if (!specialChars[valArr[index - 1]]) totalScore = totalScore + 2;
            break;

          default:
        }
      }
    });
    let lengthWt = valArr.length * 5;
    let capitalRepeatWt =
      capitalCount === 0 ? 0 : (valArr.length / capitalCount) * 3;
    let smallRepeatWt =
      smallCaseCount === 0 ? 0 : (valArr.length / smallCaseCount) * 1;
    let numberRepeatWt =
      numberCount === 0 ? 0 : (valArr.length / numberCount) * 5;
    let specialCharRepeatWt =
      specialCharCount === 0 ? 0 : (valArr.length / specialCharCount) * 8;
    let repeatwt =
      smallRepeatWt + capitalRepeatWt + numberRepeatWt + specialCharRepeatWt;

    totalScore = totalScore + lengthWt + repeatwt;
    setScore(totalScore);
  };

  return (
    <div className="App">
      <Descriptor />
      <Input checkStrength={checkStrength} />
      <Meter score={score} />
    </div>
  );
}
