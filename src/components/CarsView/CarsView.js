import React from 'react';
import { Table } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class CarsComp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            redirectIndex: -1
        }
        // our Car model constructor(brand, model, year, km)
    }
    navigateToCar = (event) => {
        // The pure JS way
        // const index = event.currentTarget.getAttribute('data-index');
        // window.location = `/#/cars/${index}`;
        
        // The React Way
        // 1. Added to state a way of telling if we should redirect (redirectIndex > -1)
        // 2. created a <Redirect> component, with a 'to' prop to where we want to send the user
        // 3. Updated state
        // 4. Rendered the <Redirect> component conditionally
        // <Redirect to="/cars/${index}" />
        this.setState({
            redirectIndex: event.currentTarget.getAttribute('data-index')
        })
    }
    render(){
        
       const carTableRows = [];
       console.log(this.props.cars);
       for(let i=0; i<this.props.cars.length; i++) {
           const rowContent = (
           <tr data-index={i} onDoubleClick={this.navigateToCar}>
               <td>{this.props.cars[i].brand}</td>
               <td>{this.props.cars[i]['model']}</td>
               <td>{this.props.cars[i]['km']}</td>
               <td>{this.props.cars[i]['year']}</td>
               <td>{this.props.cars[i].kmPerYear()}</td>
            </tr>)
           carTableRows.push(rowContent);
       }
       if(this.state.redirectIndex > -1) {
           return (<Redirect push to={`/cars/${this.state.redirectIndex}`}></Redirect>);
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