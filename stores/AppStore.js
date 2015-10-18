// AppStore.js
import {EventEmitter} from 'events';
import _ from 'lodash';
import config from '../config';
import Cosmic from 'cosmicjs-browser';

let AppStore = _.extend({}, EventEmitter.prototype, {

  // Initial data
  data: {
    globals: {},
    pages: [],
    item_num: 5
  },

  init: function(payload) {
    
    let _this = this;
    let pages = {};

    _this.data.ready = false;
    _this.data.pages = [];

    Cosmic.getObjects(config, function(err, response){
      
      let objects = response.objects;
      
      /* Globals
      ======================== */
      let globals = _this.data.globals;
      globals.text = response.object['text'];
      let metafields = globals.text.metafields;
      let menu_title = _.findWhere(metafields, { key: 'menu-title' });
      globals.text.menu_title = menu_title.value;

      let footer_text = _.findWhere(metafields, { key: 'footer-text' });
      globals.text.footer_text = footer_text.value;

      let site_title = _.findWhere(metafields, { key: 'site-title' });
      globals.text.site_title = site_title.value;

      // Social
      globals.social = response.object['social'];
      metafields = globals.social.metafields;
      let twitter = _.findWhere(metafields, { key: 'twitter' });
      globals.social.twitter = twitter.value;
      let facebook = _.findWhere(metafields, { key: 'facebook' });
      globals.social.facebook = facebook.value;
      let github = _.findWhere(metafields, { key: 'github' });
      globals.social.github = github.value;

      _this.data.globals = globals;

      /* Pages
      ======================== */
      let pages = objects.type.page;
      _this.data.pages = pages;

      /* Articles
      ======================== */
      let articles = objects.type['post'];
      articles = _.sortBy(articles, 'order');
      _this.data.articles = articles;

      /* Work Items
      ======================== */
      let work_items = objects.type['work'];
      work_items = _.sortBy(work_items, 'order');
      _this.data.work_items = work_items;
      
      // Emit change
      _this.data.ready = true;
      _this.emitChange();

    });

  },

  getMoreItems: function(){
    
    this.data.loading = true;
    this.emitChange();

    // For effect
    let _this = this;
    setTimeout(function(){
      let item_num = _this.data.item_num;
      let more_item_num = item_num + 5;
      _this.data.item_num = more_item_num;
      _this.data.loading = false;
      _this.emitChange();
    }, 300);
  },

  // Emit Change event
  emitChange: function(){
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback){
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
  
});

export default AppStore;