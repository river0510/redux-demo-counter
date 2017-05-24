/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {INCREASE} from '../actions/const';

const initialState = {
  count : 0
};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);
  const count = state.count;
  switch (action.type) {
    
    case INCREASE: {
      // Modify next state depending on the action and return it
      return {count : count + 1};
    }
    
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
