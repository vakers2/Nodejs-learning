import React from 'react';
import Card from "./Card";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function CardContainer(props) {
  const [cards, setCards] = useState([]);
  let { id } = useParams()
  useEffect(() => {
    if (id) {
      fetchCards(`http://localhost:3700/cards/id/${id}`, setCards);
    } else {
      fetchCards(`http://localhost:3700/cards/all`, setCards);
    }
  }, [])

  return  <div className="card-container">
            {cards.map((card, i) =>      
              <Card card={card} /> 
            )}
          </div>
}

function fetchCards(url, setCards){
  fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        setCards([].concat(result));
      },
      (error) => {
        console.log(error);
      }
    )
}

export default CardContainer;