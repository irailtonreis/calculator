import React, { useState } from "react";
import styles from "./Calculator.module.css";
import { Backspace, Equals } from "@phosphor-icons/react";

export function Calculator() {
  const [result, setResult] = useState("");
  const [accumulator, setAccumulator] = useState("");

  const handleNumberChange = (e) => {
    let inputNumber = e.target.value;
    const operation = handleOperationExist(inputNumber);

    if (operation) return;

    if (result === 0) {
      setResult(inputNumber);
      setAccumulator(inputNumber);
    } else {
      setResult((result) => result + inputNumber);
      setAccumulator((accumulator) => accumulator + inputNumber);
    }
  };

  const handleOperationExist = (inputCharacter) => {
    switch (inputCharacter) {
      case "+":
        return accumulator.endsWith(inputCharacter);
      case "-":
        return accumulator.endsWith(inputCharacter);
      case "*":
        return accumulator.endsWith(inputCharacter);
      case "/":
        return accumulator.endsWith(inputCharacter);
      case "(":
        return accumulator.endsWith(inputCharacter);
      case ")":
        return accumulator.endsWith(inputCharacter);
      default:
        return false;
    }
  };

  const handlePercentage = () => {
    setResult((result) => result / 100);
  };

  const handleClear = () => {
    setResult("");
    setAccumulator("");
  };

  const handleCalculate = () => {
    try {
      let resultOperation = eval(accumulator.toString());
      setResult(resultOperation);
    } catch (error) {
      setResult("Error");
    }
  };
  const handleBackspace = () => {
    let newResult = result.substring(0, result.length - 1);
    setResult(newResult);
    setAccumulator(newResult);
  };

  return (
    <div>
      <div className={styles.title}>
        <h1 className={styles}>Calculadora</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.accumulator}>
          <div><h2>{accumulator}</h2></div>
          <div className={styles.result}>
          <h2>{result}</h2>
        </div>
        </div>
        
        <div className={styles.containerNumber}>
          <button className={`${styles.button} ${styles.accumulatorButton}`} onClick={handleClear}>
            C
          </button>
          <button
            className={`${styles.button} ${styles.greenButton}`}
            onClick={handleNumberChange}
            value="("
          >
            (
          </button>
          <button
            className={`${styles.button} ${styles.greenButton}`}
            onClick={handleNumberChange}
            value=")"
          >
            )
          </button>
          <button className={`${styles.button} ${styles.greenButton}`} onClick={handlePercentage}>
            %
          </button>

          <button
            className={`${styles.button} ${styles.number}`}
            onClick={handleNumberChange}
            value={7}
          >
            7
          </button>
          <button
            className={`${styles.button} ${styles.number}`}
            onClick={handleNumberChange}
            value={8}
          >
            8
          </button>
          <button
            className={`${styles.button} ${styles.number}`}
            onClick={handleNumberChange}
            value={9}
          >
            9
          </button>
          <button
            className={`${styles.button} ${styles.greenButton}`}
            onClick={handleNumberChange}
            value="/"
          >
            /
          </button>

          <button
            className={`${styles.button} ${styles.number}`}
            onClick={handleNumberChange}
            value={4}
          >
            4
          </button>
          <button
            className={`${styles.button} ${styles.number}`}
            onClick={handleNumberChange}
            value={5}
          >
            5
          </button>
          <button
            className={`${styles.button} ${styles.number}`}
            onClick={handleNumberChange}
            value={6}
          >
            6
          </button>
          <button
            className={`${styles.button} ${styles.greenButton}`}
            onClick={handleNumberChange}
            value="*"
          >
            X
          </button>
          <button
            className={`${styles.button} ${styles.number}`}
            onClick={handleNumberChange}
            value={1}
          >
            1
          </button>
          <button
            className={`${styles.button} ${styles.number}`}
            onClick={handleNumberChange}
            value={2}
          >
            2
          </button>
          <button
            className={`${styles.button} ${styles.number}`}
            onClick={handleNumberChange}
            value={3}
          >
            3
          </button>
          <button
            className={`${styles.button} ${styles.greenButton}`}
            onClick={handleNumberChange}
            value="-"
          >
            -
          </button>
          <button className={styles.button} onClick={handleCalculate}>
            +/-
          </button>
          <button
            className={`${styles.button} ${styles.number}`}
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
          <button
            className={`${styles.button} ${styles.greenButton}`}
            onClick={handleNumberChange}
            value="+"
          >
            +
          </button>

          <button
            className={`${styles.button} ${styles.backspaceButton}`}
            onClick={handleBackspace}
          >
            <Backspace color="#343434" size={32} />
          </button>

          <button
            className={`${styles.button} ${styles.equalButton}`}
            onClick={handleCalculate}
          >
            <Equals  size={50}/>
          </button>
        </div>
      </div>
    </div>
  );
}
