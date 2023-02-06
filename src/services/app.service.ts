import { IDataRow } from '../types/data';

export function fetchData(): Promise<IDataRow[] | undefined> {
  return window
    .fetch('https://api.sampleapis.com/beers/ale', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
    .then(async (response) => {
      const data = await response.json();

      if (response.ok) {
        return data;
      } else {
        return Promise.reject(new Error(`No data Founds !!!`));
      }
    });
}
