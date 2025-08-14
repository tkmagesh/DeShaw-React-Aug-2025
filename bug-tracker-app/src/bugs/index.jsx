import BugStats from './components/bug-stats';
import BugEditor from './components/bug-editor'
import BugList from './components/bug-list';
import './index.css';

const Bugs = ({ bugs, createNew, toggle, remove, removeClosed }) => {
  const closedCount = bugs.reduce(
    (count, bug) => (bug.isClosed ? count + 1 : count),
    0
  );
  return (
    <>
      <h3>Bugs</h3>

      {/* BugStats */}
      <BugStats count={bugs.length} closedCount={closedCount} />

      {/* BugEditor */}
      <BugEditor createNew={createNew} />

      {/* BugList */}
      <BugList {...{ bugs, toggle, remove, removeClosed }} />
    </>
  );
};

export default Bugs;