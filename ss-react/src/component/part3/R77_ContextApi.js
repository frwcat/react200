import React, {Component, useEffect, useState} from 'react';
import Children from "../context/R77_contextChildren";

const {Provider, Consumer} = React.createContext()
export {Consumer}

class R77_ContextApi extends React.Component{
    constructor(props) {
        super(props);
        this.setStateFunc = this.setStateFunc.bind(this)
    }

    setStateFunc(value) {
        this.setState({name : value});
    }

    render() {
        const content = {
            ...this.state,
            setStateFunc : this.setStateFunc
        }
        return (
            <Provider value={content}>
                <Children></Children>
            </Provider>
        )
    }
}
export default R77_ContextApi;