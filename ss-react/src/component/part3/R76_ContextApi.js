import React, {Component, useEffect, useState} from 'react';
import Children from "../context/contextChildren";

const {Provider, Consumer} = React.createContext()
export {Consumer}

class R76_ContextApi extends React.Component{
    render() {
        return (
            <Provider value='React200'>
                <Children></Children>
            </Provider>
        )
    }
}
export default R76_ContextApi;