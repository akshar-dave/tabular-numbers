import '@fontsource/inter';
import '@fontsource/inter/800.css';
import { useEffect, useState } from 'react';
import './index.scss';

const fileSize = 825.63;

const getRandomNumber = () => {
  return Number((Math.random() * 1).toFixed(2))
}

const App = () => {
  return (
    <>
      <header>
        <h1>Tabular Numbers</h1>
        <code>
          font-feature-settings: "tnum";
        </code>
      </header>
      <main>
        <div className="wrapper">
          <h2>
            Default 📚
          </h2>
          <Dialog />
        </div>
        <div className="wrapper">
          <h2>
            Tabular numbers 🎬
          </h2>
          <Dialog tnum={true} />
        </div>
      </main>
    </>
  );
}

export default App;

const Dialog = (props) => {
  const { tnum } = props;
  const handleRangeChange = () => {
    return false;
  }

  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setSpeed(current => getRandomNumber());
    }, 100);
  }, []);

  useEffect(() => {
    setProgress(current => current + speed);
  }, [speed]);

  useEffect(() => {
    if (progress >= fileSize) {
      setProgress(current => 0);
    }
  }, [progress]);

  return (
    <div className={`dialog ${tnum ? 'tnum' : ''}`}>
      <p className='title'>Downloading update</p>
      <input type="range" name="" id="" value={progress.toFixed(2)} max={fileSize} onChange={handleRangeChange} />
      <p className='progress'>
        {progress.toFixed(2)}MB / {fileSize}MB [{speed.toFixed(1)}MB/s]
      </p>
    </div>
  )
}