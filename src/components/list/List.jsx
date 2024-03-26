/* eslint-disable no-undef */
import style from "./List.module.css";
import { VegyItem } from "./VegyItem";
import { useState } from "react";

export function List() {
  const data = [
    {
      name: "Bulvės",
      unit: "kg",
      price: 1,
      href: 'bulves'
    },
    {
      name: "Morkos",
      unit: "kg",
      price: 0.8,
      href: 'morkos'
    },
    {
      name: "Svogūnai",
      unit: "kg",
      price: 0.69,
      href: 'svogunai'
    },
    {
      name: "Kopūstas",
      unit: "kg",
      price: 1.49,
      href: 'kopustai'
    },
    {
      name: "Pomidoras",
      unit: "kg",
      price: 2.99,
      href: 'pomidorai'
    },
    {
      name: "Agurkas",
      unit: "kg",
      price: 1.99,
      href: 'agrukas'
    },
  ];

  const [totalCost, setTotalCost] = useState(0);

  const updateTotalCost = (costChange) => {
    setTotalCost(totalCost + costChange);
  };

  return (
    <div>
      <ul className={style.vegetables}>
        {data.map((vegy, index) => (<VegyItem key={index} title={vegy.name} price={vegy.price} 
        updateTotalCost={updateTotalCost}
          />
        ))}
      </ul>
      <span className={style.totalCost}>Total Cost: €{totalCost.toFixed(2)}</span>
    </div>
  );
}
