import { useState } from "react";
import { sliderItems } from "../../assets/data";

import styles from "./Slider.module.scss";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.arrowLeft} onClick={() => handleClick("left")}>
        <span className={styles.arrowIcon}>{"<"}</span>
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
      >
        {sliderItems.map((item) => (
          <div
            className={styles.slide}
            style={{ backgroundColor: `#${item.bg}` }}
            key={item.id}
          >
            <div className={styles.imgContainer}>
              <img className={styles.image} src={item.img} alt={item.title} />
            </div>
            <div className={styles.infoContainer}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
              <button className={styles.button}>SHOW NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.arrowRight} onClick={() => handleClick("right")}>
        <span className={styles.arrowIcon}>{">"}</span>
      </div>
    </div>
  );
};

export default Slider;
