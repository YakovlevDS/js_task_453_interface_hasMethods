const URL = "http://great.jokes/christmas";
// solution 1

const sayJoke = async (apiUrl, jokeId) => {
  let joke = await fetch(apiUrl)
    .then((response) => response.json())
    .then(({jokes}) => jokes.find((joke) => joke.id === jokeId))
    .catch((err) => {
      throw new Error(`No jokes at url: ${apiUrl}`);
    });

  if (!joke) {
    throw new Error(`No jokes found id: ${jokeId}`);
  }

  return {
    saySetup: () => joke.setup,
    sayPunchLine: () => joke.punchLine,
  };
};
// solution 2

// async function sayJoke(apiUrl, jokeId) {
//   let response = await fetch(apiUrl);
//   let json = await response.json();
//   if (!json.jokes) throw new Error(`No jokes at url: ${apiUrl}`);

//   let jokes = json.jokes;
//   let joke = jokes.find(el => el.id === jokeId);
//   if (!joke) throw new Error(`No jokes found id: ${jokeId}`);

//     joke.saySetup = function () {
//       return this.setup;
//     }

//     joke.sayPunchLine = function () {
//       return this.punchLine;
//     }

//     return joke;
// }

const joke = sayJoke("http://great.jokes/christmas", 10);
