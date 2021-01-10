import React from 'react';
import Table from 'react-bootstrap/Table';

class CarsComp extends React.Component{
    constructor(props) {
        super(props);
        // our Car model constructor(brand, model, year, km)
    } 
    render(){
       const carTableRows = [];
       console.log(this.props.cars);
       for(let i=0; i<this.props.cars.length; i++) {
           const rowContent = <tr>
               <td>{this.props.cars[i].brand}</td>
               <td>{this.props.cars[i]['model']}</td>
               <td>{this.props.cars[i]['km']}</td>
               <td>{this.props.cars[i]['year']}</td>
               <td>{this.props.cars[i].kmPerYear()}</td>
               </tr> 
           carTableRows.push(rowContent);
       }
       return ( 
       <Table striped hover>
        <thead>
            <tr>
                <th>Brand</th>
                <th>Model</th>
                <th>KM</th>
                <th>Year</th>
                <th>Km Per Year</th>
            </tr>
        </thead>
        <tbody>
            {carTableRows}
        </tbody>
    </Table>)
    }
}

export default CarsComp;