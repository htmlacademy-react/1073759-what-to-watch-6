import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main';

const App = (props) => {
  return (
    <Main movies={props.movies}/>
  );
};

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;
