import bugApi from "../services/bug-api";
export function createNew(bugName, projectId) {
  return async function(dispatch, getState){
    const newBugData = {
      id: 0,
      name: bugName,
      isClosed: false,
      createdAt: new Date(),
      projectId : projectId
    };
    const newBug = await bugApi.save(newBugData)
    const action = { type: "BUGS_ADD", payload: newBug };
    dispatch(action);
  }
}
