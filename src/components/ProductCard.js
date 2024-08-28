import { Card } from "flowbite-react";
import React, { useState, useEffect } from "react";
import Rating from "./Rating";

export default function Component(props) {
/* random values */
  function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  
  const [randomValue, setRandomValue] = useState(0);

  useEffect(() => {
    const value = getRandomBetween(300, 600);
    setRandomValue(value);
  }, []); // only one time (kol refresh mat3awdch tgenerati)

  function handleClick(event) {
    event.preventDefault();
  }

  const originalPrice = parseFloat(props.price);
  const oldPrice = originalPrice + randomValue;
  const difference = oldPrice - originalPrice;

  return (
    <Card className="card">
      <div>
        <img src={props.imageUrl} alt={props.name} />
        <a href="#">
          <h5 style={{ lineClamp: 2 }}>{props.name}</h5>
        </a>
        <div className="rating">
          <Rating rating={props.rating} />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <div className="price">{originalPrice} DT</div>
              <div className="price" id="OldPrice" style={{ textDecoration: 'line-through' }}>
                {oldPrice} DT
              </div>
            </div>
            <div className="diffPrice">
              - {difference} DT
            </div>
          </div>
          <a href="#" className="button" onClick={handleClick}>
            Shop
          </a>
        </div>
      </div>
    </Card>
  );
}
