import NavBar from "./state-managment/NavBar";
import Home from "./state-managment/Home";
import TaskProvider from "./state-managment/task/TaskProvider";

function App() {
  return (
      <TaskProvider>
        <NavBar />
        <Home />
      </TaskProvider>
  );
}

export default App;
