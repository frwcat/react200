import React, {Component, useEffect, useState} from 'react';

class R72_Submit extends Component{
    Submit(e) {
        var inputValue = document.getElementById("inputId").value;
        console.log("inputValue : "+inputValue);
        e.preventDefault();
    }

    render() {
        return (
            <>
            <form onSubmit={this.Submit}>
                <input type="text" name="inputName" id="inputId"/>
                <input type="submit" value="Submit"/>
            </form>
            </>
        )
    }
}
export default R72_Submit;