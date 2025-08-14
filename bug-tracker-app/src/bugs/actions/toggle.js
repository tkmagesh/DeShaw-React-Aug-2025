import bugApi from "../services/bug-api";
export function toggle(bugToToggle) {
  return async function(dispatch, getState){
    const toggledBugData = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
    const toggledBug = await bugApi.save(toggledBugData)
    const action = { type: "BUGS_REPLACE", payload: toggledBug };
    dispatch(action);
  }
}