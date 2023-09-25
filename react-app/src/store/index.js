import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from "./session"
import noteReducer from "./note"
<<<<<<< HEAD
import postsReducer from './post';

const rootReducer = combineReducers({
  session: sessionReducer,
  post: postsReducer,
  note: noteReducer,
=======
import likeReducer from './like';

const rootReducer = combineReducers({
  session: sessionReducer,
  note: noteReducer,
  like: likeReducer,
>>>>>>> bb2e632 (likes store and component added)
});
 

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
