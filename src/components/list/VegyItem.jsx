/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "./List.module.css";


export function VegyItem({ title, price, updateTotalCost }) {
  const minVegetablesAmount = 0;
  const maxVegetablesAmount = 10;
  const [count, setCount] = useState(0);

  function handleCountMinus() {
    if (count > minVegetablesAmount) {
      setCount(count - 1);
      updateTotalCost(-price);
    }
  }

  function handleCountPlus() {
    if (count < maxVegetablesAmount) {
      setCount(count + 1);
      updateTotalCost(price);
    }
  }

  const totalCost = count * price;

  return (
    <li className={style.vegy}>
      <span className={style.vegyTitle}>{title}</span>
      <div className={style.controls}>
        <button onClick={handleCountMinus} className={style.btn}>-</button>
        <span className={style.count}>{count}kg</span>
        <button onClick={handleCountPlus} className={style.btn}>+</button>
        <span className={style.result}>€{totalCost.toFixed(2)}</span>
      </div>
    </li>
  );
}
