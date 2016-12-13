import {createStore} from 'redux';
import rootReducer from './reducers/root-reducer';

// manages state, rootReducer combines all of our reducers
// from here: rootReducer


const store = createStore(rootReducer)

export default store;