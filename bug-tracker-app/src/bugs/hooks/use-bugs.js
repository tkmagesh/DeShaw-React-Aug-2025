import {  useSelector } from "react-redux";

function useBugs() {

  // accessing the store state
  const {bugs, projects} = useSelector((storeState) => {
    return {
      bugs : storeState.bugs.map(bug => ({...bug, projectName : storeState.projects.find(p => p.id === bug.projectId).name})),
      projects : storeState.projects
    }
  });

  const closedCount = bugs.reduce(
    (count, bug) => (bug.isClosed ? count + 1 : count),
    0
  );

  return {
    closedCount,
    bugs,
    projects
  }
}

export default useBugs;
