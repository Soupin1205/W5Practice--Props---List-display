import Card from "./components/Card";
import data from "./data";
import "./index.css";

function App() {
  return (
    <div className="container">
<<<<<<< HEAD
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
=======
      {data.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          name={item.name}
          className={item.className}
          hobby={item.hobby}
        />
      ))}
>>>>>>> 9f184f8 (week5)
    </div>
  );
}

export default App;
