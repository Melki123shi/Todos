import { useRef } from "react";
import UseAddTodo from "../hook/UseAddTodo";

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);
  const addTodo = UseAddTodo(() => {
    if (ref.current) ref.current.value = "";
  });

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current && ref.current.value) {
            addTodo.mutate({
              id: 1,
              title: ref.current?.value,
              userId: 1,
              completed: true,
            });
          }
        }}
      >
        <div className="d-flex gap-4 mb-4">
          <input
            ref={ref}
            type="text"
            placeholder="Add Todo..."
            className="form-control w-"
          />
          <button
            type="submit"
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
