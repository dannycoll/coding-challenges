import { useState } from "react";

import { NextPage } from "next";

import StarField from "../components/StarField/StarField";
import StarFieldSettings from "../components/StarField/StarFieldSettings";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";

const StarProcessing: NextPage = () => {
  const [canvasHeight, setCanvasHeight] = useState(400);
  const [canvasWidth, setCanvasWidth] = useState(400);
  const [numStars, setNumStars] = useState(100);
  const [starColor, setStarColor] = useState("#ffffff");
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Nav activePage={1} />
        <h1>Star Field</h1>
        <StarField
          canvasHeight={canvasHeight}
          canvasWidth={canvasWidth}
          numStars={numStars}
          starColor={starColor}
          backgroundColor={backgroundColor}
        />
        <StarFieldSettings
          canvasHeight={canvasHeight}
          canvasWidth={canvasWidth}
          setCanvasHeight={setCanvasHeight}
          setCanvasWidth={setCanvasWidth}
          numStars={numStars}
          setNumStars={setNumStars}
          starColor={starColor}
          setStarColor={setStarColor}
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
        />
      </div>
    </div>
  );
};

export default StarProcessing;
