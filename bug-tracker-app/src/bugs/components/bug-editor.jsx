import { useState } from "react";

const BugEditor = ({ createNew }) => {
  const [newBugName, setNewBugName] = useState("");
  return (
    <section className="editor">
      <label htmlFor="">Bug Name :</label>
      <input
        type="text"
        value={newBugName}
        onChange={(e) => setNewBugName(e.target.value)}
      />
      <button onClick={() => createNew(newBugName)}>Add</button>
    </section>
  );
};

export default BugEditor;