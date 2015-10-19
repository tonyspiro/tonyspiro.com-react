# tonyspiro.com-react
This is a repo that demonstrates how to build a portfolio blog using React on the Cosmic JS content platform.  The steps I took to create this version of my blog were:

1. Create a new bucket in [Cosmic JS](https://cosmicjs.com)
2. Export the data out of [my WP blog](http://tonyspiro.com) using the [Cosmic JS WP Export plugin](https://github.com/cosmicjs/cosmicjs-wp-export)
3. Import the exported JSON file into my Cosmic JS bucket
4. Build the React App and edit config.js to point to the correct bucket slug (tonyspirocom)

### Install
```
git clone https://github.com/tonyspiro/tonyspiro.com-react
cd tonyspiro.com-react
npm install
```
### Run webpack dev
```
npm run dev
```
Go to [http://localhost:8080/webpack-dev-server](http://localhost:8080/webpack-dev-server)
### Run production
```
npm start
```
Go to [http://localhost:8000](http://localhost:8000)

### About the App
This app uses React and the Flux pattern to create a single page application.  React Router is used to perform the navigation between "pages".  Running ```npm start``` boots a node server that allows for the pages to render properly when loaded in from a url or on page refresh.
