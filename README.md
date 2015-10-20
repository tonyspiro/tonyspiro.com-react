# tonyspiro.com-react
This app demonstrates how to build a portfolio blog using React on the [Cosmic JS](https://cosmicjs.com) content platform.  Uses [React Router](https://github.com/rackt/react-router), Flux and Cosmic JS to load pages fast in a single page application.

#####[View a demo here](http://spyrocklabs.com:8000/)

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
* My original website is [http://tonyspiro.com](tonyspiro.com) and is built on the WordPress platform.  After running benchmark tests between my WordPress site and this React / Cosmic JS version, the React version clocks in over 10x FASTER.  Where you can really tell the difference is between pages and on mobile.

* This app uses React and the Flux pattern to create a single page application.  React Router is used to perform the navigation between "pages".  Running ```npm start``` boots a node server that allows for the pages to render properly when loaded in from a url or on page refresh.

* The [Cosmic JS browser package](https://github.com/cosmicjs/cosmicjs-browser) is used to pull the data from the Cosmic JS API into the app.

* [Webpack](https://webpack.github.io/) is used for the dev and build process to turn ES6 JS into browser-friendly ES5 JS using the babel-loader.  

* The front end style is based off [a theme from Start Bootstrap](http://startbootstrap.com/template-overviews/clean-blog/).

###How
Here are the steps that were taken to create this application:

1. Create a new bucket in [Cosmic JS](https://cosmicjs.com)
2. Export the data out of [my WP blog](http://tonyspiro.com) using the [Cosmic JS WP Export plugin](https://github.com/cosmicjs/cosmicjs-wp-export)
3. Import the exported JSON file into my Cosmic JS bucket
4. Build the React app and edit [config.js](https://github.com/tonyspiro/tonyspiro.com-react/blob/master/config.js) to point to the correct bucket in Cosmic JS
