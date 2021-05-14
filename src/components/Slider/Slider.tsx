import "./Slider.scss";
import RightArrow from "src/assets/icons/right-arrow.svg";
import { useRef } from "react";

type Cards = {
  image: string;
  title: string;
  text: string;
  lançamento?: boolean;
  aparições?: string;
  avaliações?: string;
};

interface IProps {
  content: Cards[];
}

export const Slider = ({ content }: IProps) => {
  const myRef = useRef<HTMLDivElement>(null);
  const executeScroll = () => {
    if (myRef.current) myRef.current.scrollIntoView();
  };
  return (
    <div className="wrapper-slider">
      <div className="slider">
        {content.map((item, i) => (
          <div
            key={i}
            id={`card${i}`}
            className="slider-card"
            ref={myRef}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="slider-card-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span
              // onClick={() => {
              //   document
              //     .getElementById(`description${i}`)
              //     ?.classList.toggle("visible");
              //   document
              //     .getElementById(`card${i}`)
              //     ?.classList.toggle("zIndex");
              // }}
              >
                ver detalhes
              </span>
            </div>
            {/* <div id={`description${i}`} className="card-description">
              <h2>{item.title}</h2>
              <p>
                Aparições: <br />
                {item.aparições}
              </p>
              <h3>Avaliação dos fãs</h3>
              <img src={item.avaliações} alt="" />
            </div> */}
          </div>
        ))}
      </div>
      <div className="wrapper-slider-arrow" onClick={executeScroll}>
        <img src={RightArrow} alt="" />
      </div>
    </div>
  );
};
