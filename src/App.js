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
import CarDetails from './components/CarDetails';


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

    // WildCard routing - routing with a variable
    // 1. Created a route with /:VARIABLE_NAME
    // 2. Inside the route we rendered a component (CarDetails)
    // Inside carDetails:
    // 3. we used useParams() to get the wildcard part of the url & stored in a variable
    // 4. We used this variable to access items from our data
    // Optional
    // 5. Solved an ASYNC problem using conditional rendering

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
                  <Route exact path="/cars/:id">
                    {(this.state.carsData.length > 0)?<CarDetails cars={this.state.carsData}/> : []}
                  </Route>
                  <Route exact path="/cars">
                    <h1> Welcome to /cars !</h1>
                    <CarsComp cars={this.state.carsData}/>
                  </Route>

                  <Route exact path="/">
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

      const newCars = result.data.map(car => new CarModel(car.brand, car.model, car.year, car.km))

      console.log('Ajax finished loading'); 
      this.setState({carsData: newCars});
    });
    
    // returns result
  }
}

export default App;
