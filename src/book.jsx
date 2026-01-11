export default function Book({ nam }) {
  console.log(nam);

  if (nam) {
    return <h3>Book Name : {`${nam.name} /And Id Number ${nam.id}`}</h3>;
  }
  return <li>nI</li>;
}
