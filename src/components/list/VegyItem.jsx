/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "./List.module.css";
import { Link } from "react-router-dom";
import { convertToEnglish } from "../../utils/converterLtuToEn";


export function VegyItem({ data, updateTotalCost }) {
  const { title, price, unit } = data;
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
      <span className={style.vegyTitle}>
        {title} ({price}&euro;/{unit})
      </span>
      <div className={style.controls}>
        <button onClick={handleCountMinus} className={style.btn}>
          -
        </button>
        <span className={style.count}>{count}kg</span>
        <button onClick={handleCountPlus} className={style.btn}>
          +
        </button>
        <span className={style.result}>€{totalCost.toFixed(2)}</span>
      </div>
      <Link to={"/vegetables/" + convertToEnglish(title)} state={{ data: data }}>Read more</Link>
    </li>
  );
}
       