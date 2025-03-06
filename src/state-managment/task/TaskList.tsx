import { useContext } from "react";
import TaskContexts from "./taskContext";
const useTask = () => useContext(TaskContexts);


const TaskList = () => {
  const { tasks, dispatch } = useTask();
  return (
    <div>
      <button
        className="btn btn-primary px-2 mb-4"
        onClick={() => dispatch({ type: "ADD", task: { id: Date.now() } })}
      >
        Add Task
      </button>
      <ul className="list-group list-unstyled">
        {tasks.map((task) => (
          <li key={task.id}>
            <div className="list-group-item d-flex justify-content-between my-2">
              <div>Task {task.id}</div>
              <button
                className="btn btn-danger"
                onClick={() => dispatch({ type: "DELETE", task_id: task.id })}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
