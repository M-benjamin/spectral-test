export function fetchData() {
    return window
      .fetch("https://api.sampleapis.com/beers/ale", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      })
      .then(async (response) => {
        console.log("====", response.body)
        const  data  = await response.json();
        console.log("====", data)
  
        if (response.ok) {
          // const pokemons = data?.pokemons;
          // if (pokemons) {
           
          //   return pokemons;
          } else {
            return Promise.reject(new Error(`No pokemons Founds !!!`));
          }
        
      });
  }