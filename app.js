// app.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
let history = createBrowserHistory();

// Utilities
import AppStore from './stores/AppStore';
import AppDispatcher from './dispatcher/AppDispatcher';

// Components
import Nav from './components/Nav';
import Footer from './components/Footer';
import Loading from './components/Loading';

// Pages
import Blog from './pages/Blog';
import Work from './pages/Work';
import Default from './pages/Default';
import NoMatch from './pages/NoMatch';


let getAppState = () => {
  return {
    data: AppStore.data
  };
}

class App extends React.Component{
  
  // Method to setState based upon Store changes
  _onChange() {
    this.setState(getAppState());
  }

  constructor() {
    
    super();

    // API data
    AppDispatcher.dispatch({
      action: 'init-app'
    });

  }

  // Add change listeners to stores
  componentDidMount() {
    AppStore.addChangeListener(this._onChange.bind(this));
  }

  // Remove change listeners from stores
  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange.bind(this));
  }

  render(){
    
    if(!AppStore.data.ready){
      let style = {
        marginTop: 120
      }
      return (
        <div className="container text-center" style={ style }>
          <Loading />
        </div>
      );
    }

    let globals = AppStore.data.globals;
    let pages = AppStore.data.pages;

    // Pass this down!!!!
    let data = AppStore.data;
    let Routes = React.cloneElement(this.props.children, { data: data });
    
    return (
      <div>
        <Nav pages={ pages }/>
        { Routes }
        <Footer globals={ globals }/>
      </div>
    );
  }
}

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="about" component={Default}/>
      <Route path="contact" component={Default}/>
      <Route path="work" component={Work}/>
      <Route path="/work/:slug" component={Work}/>
      <Route path="/blog/:slug" component={Blog}/>
      <IndexRoute component={Blog}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('app-root'))