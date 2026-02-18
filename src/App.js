import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // convert cm to meters
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    } else {
      alert('Please enter both weight and height');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>BMI Calculator</h1>
        <div style={{ margin: '20px 0' }}>
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            style={{ marginRight: '10px' }}
          />
          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            style={{ marginRight: '10px' }}
          />
          <button onClick={calculateBMI}>Calculate</button>
        </div>
        {bmi && (
          <p>Your BMI is: <strong>{bmi}</strong></p>
        )}
      </header>
    </div>
  );
}

export default App;
