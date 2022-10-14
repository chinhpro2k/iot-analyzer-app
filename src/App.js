import "./App.css";
import "antd/dist/antd.css";
import { HashRouter } from "react-router-dom";
import LeftBar from "./Components/LeftBar";
import Redirect from "./Components/Router";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ marginRight: "16px", backgroundColor: "#001529" }}>
            <LeftBar />
          </div>

         <div style={{minHeight:"100vh"}}>
           <Redirect />
         </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
