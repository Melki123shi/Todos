import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const UseTodos = () => {
  const fetchTodos = () => {
    return axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);
  };
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: 30000, 
  });
};

export default UseTodos;
