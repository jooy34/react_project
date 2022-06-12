import "./App.css";
import ToolBar from "./components/ToolBar";
import Header from "./components/Header";
import UseCases from "./components/UseCases";
import Features from "./components/Features";
import Apps from "./components/Apps";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="App">
      <ToolBar></ToolBar>
      <Header></Header>
      <UseCases></UseCases>
      <Features></Features>
      <Apps></Apps>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
