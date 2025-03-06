import React from "react";
import { Task, TaskAction } from "./TaskProvider";

interface TaskContextType {
  tasks: Task[];
  dispatch: React.Dispatch<TaskAction>;
}

const TaskContexts = React.createContext<TaskContextType>(
  {} as TaskContextType
);
export default TaskContexts;
