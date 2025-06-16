import React, { Component, useEffect, useState} from 'react';
import { Consumer } from '../part3/R76_ContextApi';

class contextChildren2 extends React.Component {
    render(){
        return(
            <Consumer>
                {contextValue => <h3>{`contextValue : ${contextValue}`}</h3>}
            </Consumer>
        )
    }
}

export default contextChildren2