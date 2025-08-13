const StateManager = (() => {
    let _currentState = undefined,
        _callbackFns = [],
        _reducerFn = undefined,
        _init_action = { type : '@@INIT/Action'}

    function getState(){
        return _currentState;
    }

    function subscribe(callbackFn){
        _callbackFns.push(callbackFn)
    }

    // private
    function _notifyChanges(){
        _callbackFns.forEach(callbackFn => callbackFn())
    }

    function dispatch(action){
        let newState = _reducerFn(_currentState, action)
        if (newState === _currentState) return ; //no state changes
        _currentState = newState ; //update the store state
        _notifyChanges(); //let the subscribers know that the state has changed
    }

    // factory for the store
    function createStore(reducerFn){
        if (typeof reducerFn !== 'function') 
            throw new Error('a reducer is mandatory to create the store')
        _reducerFn = reducerFn;
        
        // call the reducer function with the 'init action' to initialize the 'currentState with a valid default state
        _currentState = _reducerFn(undefined, _init_action)

        // call the reducer to initialize the currentState with a valid default state
        const store = {
            getState,
            subscribe,
            dispatch
        }

        return store;
    }

    return {
        createStore
    };
})()