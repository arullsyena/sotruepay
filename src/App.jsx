import "./App.css";
import Home from "./components/home/Home";
import TopNav from "./components/top-nav/TopNav";
import ScrollDown from "./components/animation/scrollDown/ScrollDown";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <TopNav />
      <ScrollDown />
      <Home />
    </>
  );
}

export default App;
