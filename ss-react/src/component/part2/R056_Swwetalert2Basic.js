import React, {Component, useEffect, useState} from 'react';
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import Swal from 'sweetalert2';

class R056_Swwetalert2Basic extends Component{
    componentDidMount(){
        Swal.fire('1. SweetAlert').then(result =>
            {alert('2. result.value : '+result.value)})
    }
    render() {
        return (
            <h1>sweetalert2</h1>
        )
    }
}
export default R056_Swwetalert2Basic;