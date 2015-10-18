// AppDispatcher.js
import {Dispatcher} from 'flux';
let AppDispatcher = new Dispatcher();

import AppStore from '../stores/AppStore';

// Register callback with AppDispatcher
AppDispatcher.register((payload) => {

  let action = payload.action;

  switch(action) {

    case 'init-app':
      
      AppStore.init(payload);

      break;

    case 'get-more-items':
			
			AppStore.getMoreItems();

      break;

    default:
      
      return true;
  
  }

  return true;

});

export default AppDispatcher;
