const BugItem = ({ bug, toggle, remove }) => {
  return (
    <li>
      <span
        className={"bugname " + (bug.isClosed ? "closed" : "")}
        onClick={() => toggle(bug)}
      >
        {bug.name}
      </span>
      <span> <small>[{bug.projectName}]</small></span>
      <div className="date">[{bug.createdAt.toString()}]</div>
      <button onClick={() => remove(bug)}>Remove</button>
    </li>
  );
};

export default BugItem;