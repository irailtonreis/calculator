import React, { useState } from "react";
import styles from "./Calculator.module.css";

export function Calculator() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(0);

  const handleNumberChange = (e) => {
    let inputNumber = e.target.value;

    if (result === 0) {
      setResult(inputNumber);
    } else {
      let newNumber = result + inputNumber;
      setResult(newNumber);
    }
  };

  const handlePercentage = () => {
    let percentageResult = result / 100;
    setResult(percentageResult);
  };

  const handleClear = () => {
    setResult(0);
  };

  const handleCalculate = () => {
    switch (operation) {
      case "+":
        setResult(firstNumber + parseFloat(result));
        break;
      case "-":
        setResult(firstNumber - parseFloat(result));
        break;
      case "X":
        setResult(firstNumber * parseFloat(result));
        break;
      case "/":
        setResult(firstNumber / parseFloat(result));
        break;
      default:
        break;
    }
  };
  const handleOperator = (event) => {
    let oldNumber = parseFloat(result);
    setFirstNumber(oldNumber);
    setOperation(event.target.value);
    setResult(0);
  };

  return (
    <div>
      <div className={styles.title}>
        <h1 className={styles}>Calculadora</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.result}>
          <h2>{result}</h2>
        </div>
        <div className={styles.containerNumber}>
          <button className={styles.button} onClick={handleClear}>
            AC
          </button>
          <button className={styles.button}>()</button>
          <button className={styles.button} onClick={handlePercentage}>
            %
          </button>
          <button className={styles.button} onClick={handleOperator} value="/">
            /
          </button>
          <button
            className={styles.button}
            onClick={handleNumberChange}
            value={7}
          >
            7
          </button>
          <button
            className={styles.button}
            onClick={handleNumberChange}
            value={8}
          >
            8
          </button>
          <button
            className={styles.button}
            onClick={handleNumberChange}
            value={9}
          >
            9
          </button>
          <button className={styles.button} onClick={handleOperator} value="X">
            X
          </button>
          <button
            className={styles.button}
            onClick={handleNumberChange}
            value={4}
          >
            4
          </button>
          <button
            className={styles.button}
            onClick={handleNumberChange}
            value={5}
          >
            5
          </button>
          <button
            className={styles.button}
            onClick={handleNumberChange}
            value={6}
          >
            6
          </button>
          <button className={styles.button} onClick={handleOperator} value="-">
            -
          </button>
          <button
            className={styles.button}
            onClick={handleNumberChange}
            value={1}
          >
            1
          </button>
          <button
            className={styles.button}
            onClick={handleNumberChange}
            value={2}
          >
            2
          </button>
          <button
            className={styles.button}
            onClick={handleNumberChange}
            value={3}
          >
            3
          </button>
          <button className={styles.button} onClick={handleOperator} value="+">
            +
          </button>
          <button
            className={styles.button}
            onClick={handleNumberChange}
            value={0}
          >
            0
          </button>
          <button
            className={styles.button}
            onClick={handleNumberChange}
            value="."
          >
            .
          </button>
          <button className={styles.button}>X</button>
          <button className={styles.button} onClick={handleCalculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
