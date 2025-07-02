
import react from 'react';
function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;

  return (
    <div>
      <p>Bonjour tout le monde !</p>
      {myelement}
      <p>React is {sum} times better with JSX</p>
    </div>
  );
}

export default App;
