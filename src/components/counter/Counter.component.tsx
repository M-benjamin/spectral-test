import React, { useState } from 'react';
import { Container } from './Counter.style';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <Container>
      <div className="app">
        <h1 className="positive">{count}</h1>
        <div className="button__wrapper">
          <button
            onClick={() => {
              if (count === 0) {
                return;
              }
              setCount(count - 1);
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>

          <button
            onClick={() => {
              setCount(0);
            }}
            style={{
              backgroundColor: 'red',
              color: 'white',
            }}
          >
            <RestartAltIcon />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Counter;
