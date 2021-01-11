import React from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import './App.css';
import CarsComp from './components/CarsView/CarsView';
import CarModel from './data-models/CarModel';

class App extends React.Component {  
  constructor(props){
    super(props);
    this.state = {
      carsData: []
    }
  }
  render(){
    // Component will be rendered the data arrives
    // When the data arrive - nothing will happen
    return (
      <Container>
        <CarsComp cars={this.state.carsData}/>
      </Container> 
    );
  }
  componentDidMount(){
    // gets the json
    // Code to put json in result
    // 'axios.get('/cars.json')' returns a Promise
    axios.get('/cars.json').then( (result) => {
      console.log(result);
      const newCars = result.data.map(car => new CarModel(car.brand, car.model, car.year, car.km))
      console.log(newCars);
      this.setState({carsData: newCars});
    });
    
    // returns result
  }
}

export default App;
