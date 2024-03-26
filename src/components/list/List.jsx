/* eslint-disable no-undef */
import style from "./List.module.css";
import { VegyItem } from "./VegyItem";
import { useState } from "react";

export function List() {
  const data = [
    {
      title: "Bulvės",
      unit: "kg",
      price: 1,
      href: "bulves",
    },
    {
      title: "Morkos",
      unit: "kg",
      price: 0.8,
      href: "morkos",
    },
    {
      title: "Svogūnai",
      unit: "kg",
      price: 0.69,
      href: "svogunai",
    },
    {
      title: "Kopūstas",
      unit: "kg",
      price: 1.49,
      href: "kopustai",
    },
    {
      title: "Pomidoras",
      unit: "kg",
      price: 2.99,
      href: "pomidorai",
    },
    {
      title: "Agurkas",
      unit: "kg",
      price: 1.99,
      href: "agrukas",
    },
  ];

  const [totalCost, setTotalCost] = useState(0);

  const updateTotalCost = (costChange) => {
    setTotalCost(totalCost + costChange);
  };

  return (
    <div>
      <ul className={style.vegetables}>
        {data.map((vegy, index) => (
          <VegyItem key={index} data={vegy} updateTotalCost={updateTotalCost} />
        ))}
      </ul>
      <span className={style.totalCost}>
        Total Cost: €{totalCost.toFixed(2)}
      </span>
    </div>
  );
}
