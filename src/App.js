import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // convert cm to meters
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      // Determine BMI category
      if (bmiValue < 18.5) setCategory('Underweight');
      else if (bmiValue >= 18.5 && bmiValue < 24.9) setCategory('Normal weight');
      else if (bmiValue >= 25 && bmiValue < 29.9) setCategory('Overweight');
      else setCategory('Obese');
    } else {
      alert('Please enter both weight and height');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>BMI Calculator</h1>
        <p>Enter your weight in kilograms (kg) and height in centimeters (cm)</p>

        <div style={{ margin: '20px 0' }}>
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            style={{ marginRight: '10px', padding: '5px', width: '120px' }}
          />
          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            style={{ marginRight: '10px', padding: '5px', width: '120px' }}
          />
          <button onClick={calculateBMI} style={{ padding: '5px 15px' }}>Calculate</button>
        </div>

        {bmi && (
          <div>
            <p>Your BMI is: <strong>{bmi}</strong></p>
            <p>Category: <strong>{category}</strong></p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
