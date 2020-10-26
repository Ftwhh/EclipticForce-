import React from "react";
import "../css/ModalCard.css";

function ModalCard({ img, name, nickname, twitter, twitch, youtube }) {
  const twitterLink = `https://${twitter}`;
  const twitchLink = `https://${twitch}`;
  const youtubeLink = `https://${youtube}`;
  return (
    <div className="modal-card">
      <img src={img} alt={name} />
      <div className="modal-player-info">
        {name && <p className="modal-player-name">{name}</p>}
        {nickname && <p className="modal-player-nickname">'{nickname}'</p>}
        <div className="modal-player-socials">
          {twitter && (
            <div className="twitter">
              <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 27 22">
                  <path
                    d="M27 2.60431C26.0065 3.04601 24.9389 3.34453 23.8184 3.47883C24.9622 2.79148 25.8405 1.70304 26.254 0.40617C25.1667 1.05311 23.9771 1.50892 22.7365 1.7539C21.726 0.674553 20.2865 0 18.6932 0C15.6339 0 13.1536 2.48672 13.1536 5.55377C13.1536 5.98913 13.2027 6.41296 13.2971 6.81955C8.69337 6.58786 4.61173 4.37682 1.87956 1.01664C1.40284 1.83691 1.12968 2.79106 1.12968 3.80875C1.12968 5.73566 2.10769 7.43552 3.59395 8.43154C2.71429 8.40392 1.85398 8.1657 1.08485 7.73679C1.08454 7.76005 1.08454 7.78332 1.08454 7.80669C1.08454 10.4976 2.99394 12.7424 5.52793 13.2526C4.71222 13.475 3.8566 13.5076 3.02643 13.3478C3.73127 15.5543 5.77705 17.1599 8.20093 17.2048C6.30513 18.6944 3.91658 19.5823 1.32142 19.5823C0.874231 19.5823 0.433371 19.556 0 19.5047C2.45141 21.0805 5.36309 22 8.49129 22C18.6803 22 24.2519 13.5371 24.2519 6.19787C24.2519 5.95698 24.2466 5.71747 24.2359 5.47933C25.3203 4.6933 26.2564 3.71973 27 2.60431Z"
                    fill="#55ACEE"
                  />
                </svg>
              </a>
              <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                {twitter}
              </a>
            </div>
          )}
          {twitch && (
            <div className="twitch">
              <a href={twitchLink} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 23 23">
                  <path
                    d="M1.56849 0L0 4.00009V19.9985H5.74847V23H8.8868L12.0222 19.9985H16.7264L23 14.001V0H1.56849ZM3.65817 1.99876H20.9093V12.999L17.2492 16.4995H11.5L8.36562 19.497V16.4996H3.65817V1.99876ZM9.40889 12.0003H11.5V6.00099H9.40889V12.0003ZM15.1586 12.0003H17.2493V6.00099H15.1586V12.0003Z"
                    fill="#5A3E85"
                  />
                </svg>
              </a>
              <a href={twitchLink} target="_blank" rel="noopener noreferrer">
                {twitch}
              </a>
            </div>
          )}
          {youtube && (
            <div className="youtube">
              <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 19 13">
                  <path
                    d="M18.7997 2.80222C18.7997 2.80222 18.6142 1.53111 18.0429 0.967778C17.3233 0.231111 16.5146 0.231111 16.1363 0.187778C13.4878 0 9.50371 0 9.50371 0H9.49629C9.49629 0 5.5123 0 2.84889 0.187778C2.47794 0.231111 1.66925 0.231111 0.942207 0.967778C0.378367 1.53111 0.192895 2.80222 0.192895 2.80222C0.192895 2.80222 0 4.30444 0 5.79944V7.20056C0 8.69556 0.192895 10.1906 0.192895 10.1906C0.192895 10.1906 0.378367 11.4617 0.949629 12.025C1.66925 12.7617 2.61888 12.74 3.04178 12.8122C4.56267 12.9567 9.49629 13 9.49629 13C9.49629 13 13.4877 12.9928 16.1437 12.805C16.5146 12.7617 17.3233 12.7617 18.0504 12.025C18.6216 11.4617 18.8071 10.1906 18.8071 10.1906C18.8071 10.1906 19 8.69556 19 7.20056V5.79944C18.9926 4.30444 18.7997 2.80222 18.7997 2.80222ZM7.53773 8.89778V3.705L12.6716 6.31222L7.53766 8.89778H7.53773Z"
                    fill="#E52D27"
                  />
                </svg>
              </a>
              <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                {youtube}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalCard;
