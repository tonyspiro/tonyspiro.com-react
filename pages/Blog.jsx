// Page.jsx
import React from 'react'

// Utilities
import AppStore from '../stores/AppStore';
import AppDispatcher from '../dispatcher/AppDispatcher';
import helpers from '../helpers';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

import ArticlesList from '../components/ArticlesList';

class Page extends React.Component{

	getMainContent(){

		// Get current page slug
    let current_slug = this.props.params.slug;
    let pages = AppStore.data.pages;
    let pages_object = _.indexBy(pages, 'slug');

    let page = pages_object[current_slug];

    // Set default data
    if(!current_slug){
      page = pages_object['home'];
    }
  	
  	// Page
  	if(!page){

  		page = {};
  		page.main_content = 'Page not found';

  	} else {
	    
	    let metafields = page.metafields;
	    let hero = _.findWhere(metafields, { key: 'hero' });
	    page.hero = 'https://cosmicjs.com/uploads/' + hero.value;
	    
	    let headline = _.findWhere(metafields, { key: 'headline' });
	    page.headline = headline.value;

	    let subheadline = _.findWhere(metafields, { key: 'subheadline' });
	    page.subheadline = subheadline.value;

	    if(page.slug == 'home'){
	    	page.main_content  = 'Welcome Home!';
	    }

	    if(page.slug == 'work'){
	    	page.main_content  = 'Check out this werk...';
	    }

	    if(	page.slug == 'about' ||
	    		page.slug == 'contact'){
	    	page.main_content = (
	    		<div dangerouslySetInnerHTML={ helpers.createMarkup(page.content)}></div>
	    	);
	    }

	  }

	  return page;

	}
  
  render(){
  	
  	let globals = AppStore.data.globals;
  	let pages = AppStore.data.pages;
  	let page = this.getMainContent();

  	return (
      <div>
        <Header globals={ globals } pages={ pages } page={ page }/>
        <div id="main-content" className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              { page.main_content }
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Page;