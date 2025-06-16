import React, {Component, useEffect, useState} from 'react';
import {Input, InputGroupAddon, InputGroup, InputGroupText, Button } from 'reactstrap';
//최신버전에서 InputGroupAddon 를 지원안함
//InputGroupAddon - Bootstrap 5에서는 더 이상 필요하지 않습니다. 이제 원하는 순서대로 버튼과 입력을 InputGroups에 직접 추가할 수 있습니다.

class R045_ReactstrapInputGroup extends Component{

    render() {
        return (
            <>
            {/* <InputGroup>
                <Input placeholder="userid"/>
                <InputGroupAddon addonType="append">
                    <InputGroupText>@reactmail.com</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <Button>버튼</Button>
                </InputGroupAddon>
                <Input />
            </InputGroup> */}
            </>
        )
    }
}
export default R045_ReactstrapInputGroup;