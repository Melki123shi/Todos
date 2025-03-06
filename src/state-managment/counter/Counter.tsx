import useCounterstore from "./store";

const Counter = () => {
  const { counter, increment, decrement, reset } = useCounterstore();

  return (
    <>
      <div className="text-center">
        <button
          className="btn btn-primary mx-2 px-3 my-2"
          onClick={() => increment()}
        >
          Increment
        </button>
        <button
          className="btn btn-primary mx-2 px-3 my-2"
          onClick={() => decrement()}
        >
          Decrement
        </button>
        <button
          className="btn btn-primary mx-2 px-3 my-2"
          onClick={() => reset()}
        >
          Reset
        </button>
      </div>
      <div className="text-center">Counter {counter}</div>
    </>
  );
};

export default Counter;
