import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFoundPage from '../not-found-page/not-found-page';

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main movies={props.movies}/>
        </Route>
        <Route exact path='/signin'>
          <SignIn/>
        </Route>
        <Route exact path='/mylist'>
          <MyList/>
        </Route>
        <Route exact path='/films/:id'>
          <Film />
        </Route>
        <Route exact path='/films/:id/review'>
          <AddReview />
        </Route>
        <Route exact path='/player/:id'>
          <Player />
        </Route>
        <Route
          component={NotFoundPage}
        />
      </Switch>
    </BrowserRouter>

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
