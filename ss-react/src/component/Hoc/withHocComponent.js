import React, {Component, useEffect, useState} from 'react';
export default function withHocComponent(InComponent, InComponentName) {
    return class OutComponent extends React.Component {
        componentDidMount() {
            console.log(`3. InComponentName : ${InComponentName}`)
        }
        render(){
            console.log(`1. InComponent : ${InComponent}`)
            return (<InComponent {...this.props}/>)
        }
    }
}