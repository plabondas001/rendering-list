export default function Singer({ sing }) {
  console.log(sing);

  return (
    <div>
      <h1>name : {sing.name}</h1>
      <p>age : {sing.age}</p>
    </div>
  );
}
