import Journal from "./Components/Journal";
import Nav from "./Components/Nav";

function App() {
  return (
    <div>
      <div className="navbar">
        <Nav />
      </div>
      <div className="journal__content">
        <Journal />
      </div>
    </div>
  );
}

export default App;
