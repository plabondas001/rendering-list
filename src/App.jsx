import "./App.css";
import Singer from "./singer";
// import Actor from "./actor";
function App() {
  // const name = ["plabon", "purno", "apon", "sun"];
  const singer = [
    {id: 1, name: 'plabon', age: 20},
    {id:2 , name: 'purno', age: 17}
  ]
  return (
    <div>
      <h1>React core concepts</h1>
      {singer.map(sing => <Singer key={sing.id} sing= {sing}></Singer>)}
      
    </div>
  );
}

export default App;
