import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState('');
  const [fibonacciSeries, setFibonacciSeries] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const generateFibonacci = (num) => {
    let fib = [0, 1];
    for (let i = 2; i < num; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, num);
  };

  const handleSubmit = () => {
    const num = parseInt(number, 10);
    if (isNaN(num) || num <= 0) {
      setError('Por favor, ingresa un número válido.');
      setFibonacciSeries([]);
    } else {
      setError('');
      setFibonacciSeries(generateFibonacci(num));
    }
  };

  return (
    <div className="App">
      <h1>Generador de Serie de Fibonacci</h1>
      <input
        type="text"
        value={number}
        onChange={handleChange}
        placeholder="Ingresa un número"
      />
      <button onClick={handleSubmit}>Generar Serie</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        {fibonacciSeries.length > 0 && (
          <p>Serie de Fibonacci: {fibonacciSeries.join(', ')}</p>
        )}
      </div>
    </div>
  );
}



export default App
