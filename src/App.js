import "./App.css";
import Widget from "./components/Widget";

function App({ domElement }) {
  // const subreddit = domElement.getAttribute("data-subreddit");
  return (
    <div className="App">
      <Widget />
    </div>
  );
}

export default App;
