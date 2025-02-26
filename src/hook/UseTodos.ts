import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoService from "../services/todoService";

const UseTodos = () => {
  return useQuery({
    queryKey: CACHE_KEY_TODOS,
    queryFn: todoService.getAll,
    staleTime: 30000,
  });
};

export default UseTodos;
