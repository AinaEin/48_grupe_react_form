/* eslint-disable no-undef */
import style from "./List.module.css";
import { VegyItem } from "./VegyItem";
import { useState } from "react";

export function List() {
  const data = [
    {
      name: "Bulves",
      unit: "kg",
      price: 1
    },
    {
      name: "Morkos",
      unit: "kg",
      price: 0.8
    },
    {
      name: "Svogunai",
      unit: "kg",
      price: 0.69
    },
    {
      name: "Kopustas",
      unit: "kg",
      price: 1.49
    },
    {
      name: "Pomidoras",
      unit: "kg",
      price: 2.99
    },
    {
      name: "Agurkas",
      unit: "kg",
      price: 1.99
    },
  ];

  const [totalCost, setTotalCost] = useState(0);

  const updateTotalCost = (costChange) => {
    setTotalCost(totalCost + costChange);
  };

  return (
    <div>
      <ul className={style.vegetables}>
        {/* {data.map((vegy, index) => <li key={index} className={style.vegy}>{vegy}</li>)} */}
        {/* data.map((vegy, index) => ( <VegyItem key={index} title={vegy} />))*/}
        {data.map((vegy, index) => (<VegyItem key={index} title={vegy.name} price={vegy.price} 
        updateTotalCost={updateTotalCost}
          />
        ))}
      </ul>
      <p>Total Cost: €{totalCost.toFixed(2)}</p>
    </div>
  );
}
