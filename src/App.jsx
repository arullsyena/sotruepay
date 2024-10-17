import "./App.css";
import Home from "./components/home/Home";
import TopNav from "./components/top-nav/TopNav";
import ScrollDown from "./components/animation/scrollDown/ScrollDown";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import SideNav from "./components/dashboard/SideNav/SideNav";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <TopNav />
              <ScrollDown />
              <Home />
            </>
          }
        />

        <Route
          path='/dashboard'
          element={
            <>
              <Dashboard />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
