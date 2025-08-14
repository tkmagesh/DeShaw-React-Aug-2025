import bugApi from "../services/bug-api";

export function load(){
    // the below function will be invoked by the 'thunk' middleware with 'dispatch & getState'
    return async function(dispatch, getState){
        const bugs = await bugApi.getAll()
        const action = { type: "BUGS_INIT", payload: bugs };
        dispatch(action);
    }
}