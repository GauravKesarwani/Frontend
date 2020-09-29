// https://www.jamasoftware.com/blog/lets-write-redux/
// Redux library prototype
// Store: apis: dispatch, subscribe, unsubscribe, getState
// We provide the implementation of reducers but we 
// input all the reducers to the store when we create store.
// Reducer
// A state tree is a set of key associated pure reucers functions.

let store;

function createStore() {
  var currentState = {};
  var subscribers = [];
  let currentReducerSet = {};

  var currentReducer = function(state, action) {
    return state;
  }

  function addReducers(reducers) {
    currentReducerSet = Object.assign(currentReducerSet, reducers);
    let currentReducer = function (state, action) {
      let cumulativeState = {};
      for (key in currentReducerSet) {
        cumulativeState[key] = currentReducerSet(state[key], action);
      }
      return cumulativeState;
    }
  }

  const validateAction = action => {
    if (!action || typeof action !== 'object' || Array.isArray(action)) {
      throw new Error('Action must be an object!');
    }
    
    if (typeof action.type === 'undefined') {
      throw new Error('Action must have a type!');
    }
  };

  function dispatch(action) {
    var prevState = currentState;
    validateAction(action);
    currentState = currentReducer(cloneDeep(currentState), action);
    subscribers.forEach((subscriber) => {
      subscriber(prevState, currentState);
    });
  }

  function subscribe(fn) {
    subscribers.push(fn);
  }

  function unsubscribe(fn) {
    subscribers.splice(subscribers.indexOf(fn), 1);
  }

  function getState() {
    cloneDeep(currentState);
  }
  return {
    dispatch: dispatch,
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    getState: getState
  };
}

function getStoreInstance() {
  if (!store) {
    store = createStore();
  }
  return store;
}

module.exports = getStoreInstance();