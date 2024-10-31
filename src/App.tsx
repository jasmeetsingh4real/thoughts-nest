import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
