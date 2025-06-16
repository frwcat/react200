import React, {Component, useEffect, useState} from 'react';
import withHocComponent from "../Hoc/withHocComponent";

class R75_HighOrderComponent extends Component{
    render() {
        console.log('2. HocComponent render')
        return (
            <h2>props.name : {this.props.name}</h2>
        )
    }
}
export default withHocComponent(R75_HighOrderComponent, 'R75_HighOrderComponent');