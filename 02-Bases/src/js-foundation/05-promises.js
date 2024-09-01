const getPokemonById = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  return fetch(url)
    .then((res) => res.json())
    .then((pokemon) => pokemon.name);
};

module.exports = {
  getPokemonById,
};
