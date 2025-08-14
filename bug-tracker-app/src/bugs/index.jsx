import BugStats from './components/bug-stats';
import BugEditor from './components/bug-editor'
import BugList from './components/bug-list';
import './index.css';
import useBugs from './hooks/use-bugs';
import useBugsActions from './hooks/use-bug-actions';
import { useCallback, useEffect } from 'react';

const Bugs = () => {

  const { bugs, closedCount, projects} = useBugs()
  const { createNew, toggle, remove, removeClosed, load } = useBugsActions() 
  
  const loadCb = useCallback(load)
  useEffect(loadCb, []);
  
  return (
    <>
      <h3>Bugs</h3>

      {/* <button onClick={load}>Load Bugs</button> */}
      {/* BugStats */}
      <BugStats count={bugs.length} closedCount={closedCount} />
      
      {/* BugEditor */}
      <BugEditor createNew={createNew} projects={projects}/>
      
      {/* BugList */}
      <BugList {...{ bugs, toggle, remove, removeClosed }} />
    </>
  );
};

export default Bugs;