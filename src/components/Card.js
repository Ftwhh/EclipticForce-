import React from "react";
import "../css/Card.css";

function Card({ img, name, professions }) {
  return (
    <>
      <div className="card">
        <img className="card-img" src={img} alt="" />
        <h4 className="card-name ">{name}</h4>
        <ul className="card-professions">
          {professions.map((profession, index) => {
            return <li key={index}>- {profession}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default Card;
