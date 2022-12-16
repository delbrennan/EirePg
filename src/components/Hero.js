import "../CSS/HeroStyles.css";
import test1 from "../assets/under16.jpg";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="HeroImg2" src={props.heroImg} />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.btnText}
          </a>
        </div>
      </div>
    </>
  );
}
export default Hero;
