import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import CarsComp from './components/CarsView/CarsView';
import CarModel from './data-models/CarModel';

function App() {
  const carsData = [];
  carsData.push(new CarModel("Toyota", "Yaris", 2002, 230000));
  carsData.push(new CarModel("Toyota", "Corola", 2015, 105000));
  carsData.push(new CarModel("Hyundai", "i30", 2010, 150000));
  return (
    <Container>
      <CarsComp cars={carsData}/>
    </Container>
  );
}

export default App;
