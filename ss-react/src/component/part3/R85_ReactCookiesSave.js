import React, {Component, useEffect, useState} from 'react';
import cookie from 'react-cookies';

class R85_ReactCookiesSave extends Component{
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
    }

    render() {
        return (
            <h3>react-cookes Save</h3>
        )
    }

}
export default R85_ReactCookiesSave;