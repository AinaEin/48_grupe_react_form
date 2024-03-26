import { useLocation } from "react-router-dom"; 


export function PageVegetablesInner() {
  const location = useLocation();
  const data = location.state?.data;
  const { title, price, unit } = data;

  

  return (
    <>
      <h1>Apie produkta: {data.title}</h1>
      <p>Dominancio produkto aprašymas:</p>
      <ul>
        {[title, `${price} €/${unit}`].map((details, index) => (
          <li key={index}>{details}</li>
        ))}
      </ul>
    </>
  );
}
