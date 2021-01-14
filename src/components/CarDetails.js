import React from 'react';
import { useParams } from 'react-router-dom';
const CarDetails = function(props){

        // We don't want to get the ids from the browser
        // const url = window.location.href;
        // const carId = window.location.href.split('/')[5];
        // const params = useParams()
        // const id = params.id;

        // Destructuring
        // useParams can only be used in functional syntax
        const {id} = useParams();
        console.log(props);
        const selectedCar = props.cars[id];

        return (
        <div>
            <h1>Details page</h1>
            <p>Brand: {selectedCar.brand}</p>
            <p>Model: {selectedCar.model}</p>
            <p>KM: {selectedCar.km}</p>
            <p>Year: {selectedCar.year}</p>            
        </div>
        )
}
export default CarDetails;