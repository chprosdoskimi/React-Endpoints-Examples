import React from 'react';

const PhotoGet = () => {
  const [query, setQuery] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch(`https://dogsapi.origamid.dev/json/api/photo/${query}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={({ target }) => setQuery(target.value)}
        placeholder="Password"
      />

      <button>Enviar</button>
    </form>
  );
};

export default PhotoGet;
