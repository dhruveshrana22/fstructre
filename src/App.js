import logo from "./logo.svg";
import "./App.css";
import Button from "./app/Components/Button/Button";
import { Tooltip } from "antd";

function App() {
  return (
    <div className="App">
      <Button shape="large" onClick={() => console.log("Button clicked!")}>
        Click Me
      </Button>
      <Tooltip title="search">
        <Button type="primary" shape="circle"  />
      </Tooltip>
    </div>
  );
}

export default App;
