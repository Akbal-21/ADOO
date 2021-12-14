import "../../styles/Components/task.scss"
import { useState } from "react";

export default function Task(props) {
  const { addTask, task } = props;

  const [urgencyLevel, setUrgencyLevel] = useState(task.urgency);
  const [collapsed, setCollapsed] = useState(task.isCollapsed);
  const [formAction, setFormAction] = useState("");

  function setUrgency(event) {
    setUrgencyLevel(event.target.attributes.urgency.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formAction === "save") {
      if (collapsed) {
        setCollapsed(false);
      } else {
        let newTask = {
          id: task.id,
          title: event.target.elements.title.value,
          status: task.status,
          isCollapsed: true
        };

        addTask(newTask);
        setCollapsed(true);
      }
    }
  }

  return (
    <div className={`task ${collapsed ? "collapsedTask" : ""}`}>
      <form onSubmit={handleSubmit} className={collapsed ? "collapsed" : ""}>
        <input
          type="text"
          className="title input"
          name="title"
          placeholder="Enter Title"
          disabled={collapsed}
          defaultValue={task.title}
        />
        <button
          onClick={() => {
            setFormAction("save");
          }}
          className="button"
        >
          {collapsed ? "Edit" : "Save"}
        </button>
      </form>
    </div>
  );
}
