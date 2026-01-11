import "./App.css";
import Book from "./book";
import Singer from "./singer";
// import Actor from "./actor";
function App() {
  // const name = ["plabon", "purno", "apon", "sun"];
  const singer = [
    { id: 1, name: "plabon", age: 20 },
    { id: 2, name: "purno", age: 17 },
  ];
  const book = [
    { id: 1, name: "Bangla" },
    { id: 2, name: "English" },
    { id: 3, name: "Math" },
  ];
  return (
    <div>
      <h1>React core concepts</h1>
      {singer.map((sing) => (
        <Singer key={sing.id} sing={sing}></Singer>
      ))}
      {book.map((boi) => (
        <Book nam={boi}></Book>
      ))}
    </div>
  );
}

export default App;
