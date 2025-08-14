import {  useSelector } from "react-redux";

function useBugs() {

  // accessing the store state
  const bugs = useSelector((storeState) => storeState.bugs);

  const closedCount = bugs.reduce(
    (count, bug) => (bug.isClosed ? count + 1 : count),
    0
  );

  return {
    closedCount,
    bugs
  }
}

export default useBugs;
