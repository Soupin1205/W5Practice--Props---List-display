import Card from "./components/Card";
import data from "./data";
import "./index.css";

function App() {
  return (
    <div className="container">
      <h1>My Card List</h1>

      <div className="card-wrapper">
        {data.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            name={item.name}
            hobby={item.hobby}
            address={item.address}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
