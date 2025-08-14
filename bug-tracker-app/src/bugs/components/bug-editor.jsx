 
import { useState } from "react";

const BugEditor = ({ createNew, projects }) => {
  const [newBugName, setNewBugName] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState(0)
  return (
    <section className="editor">
      <label htmlFor="">Bug Name :</label>
      <input
        type="text"
        value={newBugName}
        onChange={(e) => setNewBugName(e.target.value)}
      />
      <select onChange={(e) => setSelectedProjectId(parseInt(e.target.value))}>
        <option value="">---Select Project</option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </select>
      <button onClick={() => createNew(newBugName, selectedProjectId)}>
        Add
      </button>
    </section>
  );
};

export default BugEditor; 
