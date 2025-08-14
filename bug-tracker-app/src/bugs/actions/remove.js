import bugApi from "../services/bug-api";

export function remove(bugToRemove) {
  return async function(dispatch, getState){
    await bugApi.remove(bugToRemove)
    const action = { type: "BUGS_REMOVE", payload: bugToRemove };
    dispatch(action);
  }
}