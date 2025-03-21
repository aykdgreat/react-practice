import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="px-10 py-2">
        <Outlet />
      </div>
    </>
  );
}

export default App;
