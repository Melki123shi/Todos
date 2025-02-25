import UseTodos from "../hook/UseTodos";

const TodoList = () => {
  const { data: todos, error, isLoading } = UseTodos();

  if (error) return <p>{error.message}</p>;

  if (isLoading) return <p>Loading... </p>;

  return (
    <>
      <h2 className="mb-4 text-center">ToDos</h2>
      <ul className="list-group w-50 mx-auto">
        {todos?.map((todo) => (
          <li className="list-group-item p-2" key={todo.userId}> {todo.title} </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
