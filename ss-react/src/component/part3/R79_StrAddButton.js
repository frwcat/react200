import React, {Component, useEffect, useState} from 'react';
import {add} from '../../actions'
import { connect } from 'react-redux';
class R79_StrAddButton extends React.Component{
    addString = () => {
        this.props.dispatch(add());
    }

    render() {
        return (
            <input value='Add200' type="button" onClick={this.addString}/>
        )
    }

}
export default connect()(R79_StrAddButton);