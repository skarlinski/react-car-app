import { Button, Jumbotron } from "react-bootstrap"

const HomeComp = function(){
       return ( <Jumbotron>
            <h1>Welcome to the cars app</h1>   
            <Button href="/#/cars">See the cars</Button>
        </Jumbotron>
       )
}

export default HomeComp;