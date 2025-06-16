import React, {Component, useEffect, useState} from 'react';
import {ButtonGroup, Button} from 'reactstrap';

class R039_ReactstrapBotton extends Component{
    render() {
        return (
            <div style={{padding: "0px"}}>
                <Button color="primary">blue</Button>
                <Button color="info">teal</Button>
                <Button color="success">green</Button>
                <Button color="warning">yellow</Button>
                <Button color="danger">red</Button>
                <Button color="dark">dark gray</Button>
                <Button color="secondary">gray</Button>
                <Button color="white">white</Button>
            </div>
        )
    }
    
}
export default R039_ReactstrapBotton;