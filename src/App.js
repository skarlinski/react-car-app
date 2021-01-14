/// npm install -> read package.json, find all dependencies install each one
// npm install react-router-dom -> 1) Will add to package.json the new dependency. 2) install it in node_modules

import React from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import './App.css';
import CarsComp from './components/CarsView/CarsView';
import CarModel from './data-models/CarModel';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomeComp from './components/HomeComp';


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
    // 1. Wrap the whole app in HashRouter / BrowserRouter
    // 2. Add Routes for different urls
    // 3. Add Switch to make sure only one Route is active
    return (
      <HashRouter>
              <Container>
                <nav>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/#/cars">Cars View</a></li>
                  </ul>
                </nav>
                <Switch>              
                  <Route path="/cars">
                    <h1> Welcome to /cars !</h1>
                    <CarsComp cars={this.state.carsData}/>
                  </Route>

                  <Route  path="/">
                    <HomeComp/>
                  </Route>
                </Switch>
              </Container>
      </HashRouter>
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
