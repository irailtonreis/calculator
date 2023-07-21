import React from "react";
import styles from "./Calculator.module.css";

export function Calculator() {
  return (
    <div>
      <div className={styles.title}>
        <h1 className={styles}>Calculadora</h1>
      </div>
      <div className={styles.container}>
        <button className={styles.button}>AC</button>
        <button className={styles.button}>()</button>
        <button className={styles.button}>%</button>
        <button className={styles.button}>/</button>
        <button className={styles.button}>7</button>
        <button className={styles.button}>8</button>
        <button className={styles.button}>9</button>
        <button className={styles.button}>X</button>
        <button className={styles.button}>4</button>
        <button className={styles.button}>5</button>
        <button className={styles.button}>6</button>
        <button className={styles.button}>-</button>
        <button className={styles.button}>1</button>
        <button className={styles.button}>2</button>
        <button className={styles.button}>3</button>
        <button className={styles.button}>+</button>
        <button className={styles.button}>0</button>
        <button className={styles.button}>,</button>
        <button className={styles.button}>X</button>
        <button className={styles.button}>=</button>
      </div>
    </div>
  );
}
