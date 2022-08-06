import type { NextPage } from 'next';
import Head from 'next/head';

import Canvas from '../components/Canvas';
import styles from '../styles/Home.module.css';
import { context } from '../types/canvas';

const Home: NextPage = () => {
  const draw = (ctx: context, frameCount: number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };
  const options = {
    context: "2d",
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coding Chanllenges</title>
      </Head>
      <main className={styles.main}>
        <h1>Coding Challenges</h1>
        <Canvas draw={draw} options={options} />
      </main>
    </div>
  );
};

export default Home;
