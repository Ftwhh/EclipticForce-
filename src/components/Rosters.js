import React, { useState } from "react";
import rosters from "../rosters";
import { Modal } from "@material-ui/core";
import TeamModal from "./TeamModal";
import "../css/Rosters.css";
function Rosters() {
  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState("");
  const handleOpen = (game) => {
    setOpen(true);
    setTarget(game);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div id="Rosters">
      <h2>OUR ROSTERS</h2>
      <div className="games">
        {rosters.map((roster, index) => {
          return (
            <div key={index} onClick={() => handleOpen(roster.game)}>
              <img
                src={roster.game_img}
                alt={roster.game}
                className="game-img"
              />
              <h6>{roster.game} Team</h6>
            </div>
          );
        })}
      </div>
      <Modal className="Modal-block" open={open}>
        <TeamModal title={target} handleClose={handleClose} />
      </Modal>
    </div>
  );
}

export default Rosters;
