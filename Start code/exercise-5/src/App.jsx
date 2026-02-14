import Card from "./components/Card";
import data from "./data";
import "./index.css";

function App() {
  return (
    <div className="container">
      {data.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          name={item.name}
          className={item.className}
          hobby={item.hobby}
        />
      ))}
    </div>
  );
}

export default App;
