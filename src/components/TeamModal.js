import React from "react";
import rosters from "../rosters";
import ModalCard from "./ModalCard";
import "../css/TeamModal.css";

function TeamModal({ title, handleClose }) {
  return (
    <div className="modal">
      <h2 className="modal-title">{title} Team</h2>
      <svg viewBox="0 0 37 37" onClick={handleClose}>
        <path
          d="M35 35L2 2"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35 2L2 35"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="modal-cards">
        {rosters
          .filter((roster) => roster.game === title)[0]
          .team.map((player, index) => {
            return (
              <ModalCard
                key={index}
                img={player.img_url}
                name={player.name}
                nickname={player.nickname}
                twitter={player.twitter_url}
                twitch={player.twitch_url}
                youtube={player.youtube_url}
              />
            );
          })}
      </div>
    </div>
  );
}
export default TeamModal;
