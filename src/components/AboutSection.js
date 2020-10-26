import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
import leaders from "../leaders";
import "../css/AboutSection.css";
function AboutSection() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
  ];
  return (
    <section id="about">
      <div className="container">
        <h2>NRG ESPORTS</h2>
        <p>
          Fueled by the energy of talented individuals, this particular team
          represents the concentrated ambition to achieve one goal. That goal:
          to build the ideal esports team for many years to come.
        </p>
        <p>
          Led by the expertise of traditional sports and the tech biz, NRG
          Esports is looking to set precedence in the industry of esports. We
          look to set the standard within our beloved space; whether it’d be
          high class management or jaw-dropping media, but above all else,
          camaraderie and competition. We don't want to just build a great team,
          we want to build a legacy.
        </p>
      </div>
      <div className="container">
        <h2>NRG LEADERSHIP</h2>
        <Carousel
          breakPoints={breakPoints}
          style={{
            width: "95%",
            margin: "0 auto",
            padding: "2rem 0",
            marginTop: "2rem",
          }}
        >
          {leaders.map((leader, index) => {
            return (
              <Card
                key={index}
                img={leader.img}
                name={leader.name}
                professions={leader.professions}
              />
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}

export default AboutSection;
