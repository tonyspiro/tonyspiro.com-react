# tonyspiro.com-react
This app demonstrates how to build a portfolio blog using React on the [Cosmic JS](https://cosmicjs.com) content platform.  Uses [React Router](https://github.com/rackt/react-router), Flux and Cosmic JS to load pages fast in a single page application.

#####[View a demo here](http://tonyspiro.com:8000/)

### Getting started

#####Install
```
git clone https://github.com/tonyspiro/tonyspiro.com-react
cd tonyspiro.com-react
npm install
```
#####Run webpack dev
```
npm run dev
```
Go to [http://localhost:8080/webpack-dev-server](http://localhost:8080/webpack-dev-server)
#####Run production
```
npm start
```
Go to [http://localhost:8000](http://localhost:8000)

### About the app
* My original website at [http://tonyspiro.com](tonyspiro.com) is built on the WordPress platform.  After running benchmark tests between my WordPress site and this React / Cosmic JS version, the React version clocks in over 10x FASTER to "first paint".  This is the real benefit from the React / API set up, less server overhead and faster page load times between "pages". You can really see a significant speed difference on mobile.

WordPress (26.7 seconds):

<img src="https://cosmicjs.com/uploads/98cbdb20-77b9-11e5-bea6-3f1da2fe3a09-Screen%20Shot%202015-10-21%20at%201.03.28%20AM.png" width="300">

React / Cosmic JS (2.3 seconds):

<img src="https://cosmicjs.com/uploads/98cdafe0-77b9-11e5-bea6-3f1da2fe3a09-Screen%20Shot%202015-10-21%20at%201.03.54%20AM.png" width="300">

* Similar benchmarking can be performed by running ApacheBench. ```ab -n 100 -c 10 "http://www.example.com/"```

* React Router is used to perform the navigation between "pages".  Running ```npm start``` boots a node server that allows for the pages to render properly when loaded in from a url or on page refresh.

* The [Cosmic JS browser package](https://github.com/cosmicjs/cosmicjs-browser) is used to pull the data from the Cosmic JS API into the app.

* [Webpack](https://webpack.github.io/) is used for the dev and build process to turn ES6 JS into browser-friendly ES5 JS using the babel-loader.  

* The front end style is based off [a theme from Start Bootstrap](http://startbootstrap.com/template-overviews/clean-blog/).

###How I did it
Here are the steps that were taken to build this app:

1. I exported the data out of [my WP blog](http://tonyspiro.com) using the [Cosmic JS WP Export plugin](https://github.com/cosmicjs/cosmicjs-wp-export).  The exported JSON file is included in this repo at  [tonyspirocom.json](https://github.com/tonyspiro/tonyspiro.com-react/blob/master/tonyspirocom.json)
2. I created a new bucket in [Cosmic JS](https://cosmicjs.com)
3. I then imported the JSON file into my Cosmic JS bucket
4. I built the React app and edited [config.js](https://github.com/tonyspiro/tonyspiro.com-react/blob/master/config.js) to point to the correct bucket in Cosmic JS
