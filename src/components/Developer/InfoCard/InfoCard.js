import Styles from './InfoCard.module.css'

const InfoCard = (props) =>{
  const image = require(`../../../images/${props.developer.img}`);
  return (
    <div className={Styles.cardCover}>
      <img src={image} alt="Img" />
      <h2 className={Styles.name}>{props.developer.name}</h2>
      <h3 className={Styles.rank}>{props.developer.rank}</h3>

      <div className={Styles.infoDiv}>
        <p className={Styles.key}>Phone:</p>
        <p className={Styles.value}>{props.developer.Contact}</p>
      </div>
      <div className={Styles.infoDiv}>
        <p className={Styles.key}>Date of Barth:</p>
        <p className={Styles.value}>{props.developer.DOB}</p>
      </div>
      <div className={Styles.infoDiv}>
        <p className={Styles.key}>Skills:</p>
        <p className={Styles.value}>
          {props.developer.skills.map((skill, i) => (
            <span key={i}>{skill}</span>
          ))}
        </p>
      </div>
      <div className={Styles.infoDiv}>
        <p className={Styles.key}>Address:</p>
        <p className={Styles.value}>{props.developer.address}</p>
      </div>
    </div>
  );
}

export default InfoCard;