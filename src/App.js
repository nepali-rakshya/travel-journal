import Journal from "./Components/Journal";
import Nav from "./Components/Nav";
import data from "./Components/data.js";

function App() {
  const dataElement = data.map((item) => {
    return (
      <Journal
        key={item.id}
        img={item.img}
        alt={item.alt}
        location={item.location}
        place={item.place}
        startDate={item.date.startDate}
        endDate={item.date.endDate}
        desc={item.desc}
      />
    );
  });
  return (
    <div>
      <div className="navbar">
        <Nav />
      </div>
      <div className="content__space">
        <div className="content__border">{dataElement}</div>
      </div>
    </div>
  );
}

export default App;
