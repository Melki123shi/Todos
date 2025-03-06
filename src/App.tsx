import NavBar from "./state-managment/NavBar";
import Home from "./state-managment/Home";
import AuthProvider from "./state-managment/auth/AuthProvider";
import TaskProvider from "./state-managment/task/TaskProvider";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <NavBar />
        <Home />
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
