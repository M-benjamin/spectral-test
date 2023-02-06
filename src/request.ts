import { useEffect, useState } from 'react';

interface IDataRow {
  price: string;
  name: string;
  rating: any;
  image: string;
  id: number;
}

export const useRequest = <T>() => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T>();
  const [error, setError] = useState('');

  useEffect(() => {
    // if (loadOnStart) sendRequest();
    // else setLoading(false);
  }, []);

  const request = () => {
    sendRequest();
  };

  const sendRequest = (): Promise<IDataRow[]> => {
    setLoading(true);

    return fetch('https://api.sampleapis.com/beers/ale', {
      method: 'GET',
    }).then((res) => res.json());
  };

  return [loading, data, error, request];
};
