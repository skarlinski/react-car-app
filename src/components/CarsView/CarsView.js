import React from 'react';


class CarsComp extends React.Component{
    constructor(props) {
        super(props);
    } 
    render(){
       const carTableRows = [];
       return ( <table class="table">
        <thead>
            <th>Brand</th>
            <th>Model</th>
            <th>KM</th>
            <th>Year</th>
            <th>Km Per Year</th>
        </thead>
        <tbody>
            {carTableRows}
        </tbody>
    </table>)
    }
}

export default CarsComp;