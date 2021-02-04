import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const moviesMock = [
  {
    id: 1,
    image: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`
  },
  {
    id: 2,
    image: `bohemian-rhapsody.jpg`,
    title: `Bohemian Rhapsody`
  },
  {
    id: 3,
    image: `macbeth.jpg`,
    title: `Macbeth`
  },
  {
    id: 4,
    image: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`
  },
  {
    id: 5,
    image: `bohemian-rhapsody.jpg`,
    title: `Bohemian Rhapsody`
  },
  {
    id: 6,
    image: `macbeth.jpg`,
    title: `Macbeth`
  },
  {
    id: 7,
    image: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`
  },
  {
    id: 8,
    image: `bohemian-rhapsody.jpg`,
    title: `Bohemian Rhapsody`
  },
  {
    id: 9,
    image: `macbeth.jpg`,
    title: `Macbeth`
  },
  {
    id: 10,
    image: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`
  },
  {
    id: 11,
    image: `bohemian-rhapsody.jpg`,
    title: `Bohemian Rhapsody`
  },
  {
    id: 12,
    image: `macbeth.jpg`,
    title: `Macbeth`
  },
  {
    id: 13,
    image: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`
  },
  {
    id: 14,
    image: `bohemian-rhapsody.jpg`,
    title: `Bohemian Rhapsody`
  },
  {
    id: 15,
    image: `macbeth.jpg`,
    title: `Macbeth`
  },
  {
    id: 16,
    image: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`
  },
  {
    id: 17,
    image: `bohemian-rhapsody.jpg`,
    title: `Bohemian Rhapsody`
  },
  {
    id: 18,
    image: `macbeth.jpg`,
    title: `Macbeth`
  },
  {
    id: 19,
    image: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`
  },
  {
    id: 20,
    image: `bohemian-rhapsody.jpg`,
    title: `Bohemian Rhapsody`
  },
  {
    id: 21,
    image: `macbeth.jpg`,
    title: `Macbeth`
  },
  {
    id: 22,
    image: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`
  },
  {
    id: 23,
    image: `bohemian-rhapsody.jpg`,
    title: `Bohemian Rhapsody`
  },
  {
    id: 24,
    image: `macbeth.jpg`,
    title: `Macbeth`
  },
  {
    id: 25,
    image: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`
  },
  {
    id: 26,
    image: `bohemian-rhapsody.jpg`,
    title: `Bohemian Rhapsody`
  },
  {
    id: 27,
    image: `macbeth.jpg`,
    title: `Macbeth`
  },
  {
    id: 28,
    image: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`
  },
  {
    id: 29,
    image: `bohemian-rhapsody.jpg`,
    title: `Bohemian Rhapsody`
  },
  {
    id: 30,
    image: `macbeth.jpg`,
    title: `Macbeth`
  },
];

ReactDOM.render(
    <App movies={moviesMock}/>,
    document.querySelector(`#root`)
);
