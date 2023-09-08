import "./App.css";
import LayoutId from "./components/layoutId";
import HideVisible from "./components/hideVisible";
import SimpleAnimate from "./components/simpleAnimate";
import Viewport from "./components/viewport";
import Todo from "./components/todo";
import StickyMenu from "./components/stickyMenu";

function App() {
  return (
    <div className="App">
      <StickyMenu />
      <Todo />
      <SimpleAnimate />
      <LayoutId />
      <HideVisible />
      <Viewport />
    </div>
  );
}

export default App;
