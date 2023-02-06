import React, { FC, ReactElement } from 'react';
import Counter from '../components/counter/Counter.component';
import { fetchData } from '../services/app.service';

const App: FC  = (): ReactElement => {

  React.useEffect(() => {
    fetchData().then((res) => console.log(res))
  })
  return (
    <div>
      <Counter />
      <div>Hello world</div>
    </div>
  );
}

export default App;
