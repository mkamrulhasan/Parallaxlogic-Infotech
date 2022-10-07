import Styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  const avatar = require(`../../images/${props.developer.img}`);
  return (
    <div
      className={Styles.cardOuter}
      onClick={() => navigate(`/developer/${props.developer.id}`)}
    >
      <div className={Styles.card}>
        <div
          className={Styles.avatar}
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
        <div className={Styles.cover}></div>
        <div className={Styles.devInfo}>
          <h1>{props.developer.name}</h1>
          <h2>{props.developer.rank}</h2>
        </div>
        <div className={Styles.divider}></div>
        <div className={Styles.projectInfo}>
          <div className={Styles.exprience}>
            <span className={Styles.projectValue}>
              {props.developer.exprience}
            </span>
            <br />
            <span className={Styles.projectHeading}>Exprience</span>
          </div>
          <div className={Styles.project}>
            <span className={Styles.projectValue}>
              {props.developer.completeProject}
            </span>
            <br />
            <span className={Styles.projectHeading}>Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
