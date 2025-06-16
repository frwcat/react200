import React, {Component, useEffect, useState} from 'react';
import cookie from 'react-cookies';

class R87_ReactCookiesRemove extends Component{
    componentDidMount() {
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 60)
        cookie.save('userid', "react200"
            ,{
                path: '/',
                expires,
                //secure: true,
                //httpOnly: true
            }
        )
        setTimeout(function() {
            cookie.remove('userid', {path:'/'});
        },1000);
        setTimeout(function() {
            alert(cookie.load('userid'))
        },2000);
    }

    render() {
        return (
            <h3>react-cookes Remove</h3>
        )
    }

}
export default R87_ReactCookiesRemove;