import { useState } from 'react';

import { NextPage } from 'next';

import StarField from '../components/StarField';
import StarFieldSettings from '../components/StarFieldSettings';
import styles from '../styles/Home.module.css';

const StarProcessing: NextPage = () => {
  const [canvasHeight, setCanvasHeight] = useState(400);
  const [canvasWidth, setCanvasWidth] = useState(400);
  const [numStars, setNumStars] = useState(100);
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>Star Field</h1>
        <StarField
          canvasHeight={canvasHeight}
          canvasWidth={canvasWidth}
          numStars={numStars}
        />
        <StarFieldSettings
          canvasHeight={canvasHeight}
          canvasWidth={canvasWidth}
          setCanvasHeight={setCanvasHeight}
          setCanvasWidth={setCanvasWidth}
          numStars={numStars}
          setNumStars={setNumStars}
        />
      </div>
    </div>
  );
};

export default StarProcessing;
