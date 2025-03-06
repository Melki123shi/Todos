import useAuthStore from "./store";

const Loginstatus = () => {
  const { user, logout, login } = useAuthStore();

  if (user === "")
    return (
      <a
        href="#"
        onClick={() => login("John Doe")}
      >
        Login
      </a>
    );
  else
    return (
      <div>
        Welcome {user}{" "}
        <a href="#" onClick={() => logout()}>
          Logout
        </a>
      </div>
    );
};

export default Loginstatus;
