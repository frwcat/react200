import React, { Component, useEffect, useState} from 'react';
import {Consumer} from '../part3/R77_ContextApi';

class contextChildren extends React.Component {
    render(){
        return(
            <Consumer>
                {contextValue =>
                    <button onClick={e => contextValue.setStateFunc("react200")}>
                        {contextValue.name}_button
                    </button>
                }
            </Consumer>
        )
    }
}

export default contextChildren