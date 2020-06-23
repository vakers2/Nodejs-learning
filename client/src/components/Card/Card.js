import React from 'react';

function Card(props) {
  return <div className="card-body">
            <div className="card-title">{props.card.title}</div>
            <div className="card-content">{props.card.content}</div>
            <div className="card-date">{props.card.created_at}</div>
         </div>
}

export default Card;