import { useDispatch } from "react-redux";
import "./App.scss";
import AppRouter from "./Routers/AppRouter";
import { useEffect } from "react";
import { fetchUser } from "./Store/authSlice/authSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(fetchUser());
    }
  }, []);
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
