import { ReactNode, useReducer } from "react";
import TasksContext from "./taskContext";

export interface Task {
  id: number,
}
interface AddTask {
  type: 'ADD',
  task: Task
}
interface DeleteTask {
  type: 'DELETE',
  task_id: number
}

export type TaskAction = AddTask | DeleteTask;

const taskReducer = (tasks: Task[] , action: TaskAction) => {
  switch (action.type) {
      case 'ADD':
          return [...tasks, action.task]

      case 'DELETE':           
          return tasks.filter(task => task.id !== action.task_id)
  
      default:
          return tasks;
  }
}

interface prop {
  children: ReactNode;
}
const TaskProvider = ({ children }: prop) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TaskProvider;
