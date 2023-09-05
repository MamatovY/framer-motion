import "./App.css";
import LayoutId from "./components/layoutId";
import HideVisible from "./components/hideVisible";
import SimpleAnimate from "./components/simpleAnimate";
import Viewport from "./components/viewport";

function App() {
  return (
    <div className="App">
      <SimpleAnimate />
      <LayoutId />
      <HideVisible />
      <Viewport />
    </div>
  );
}

export default App;
