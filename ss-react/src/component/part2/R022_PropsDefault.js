import React, {Component} from 'react';

class R022_PropsDefault extends Component {

    render() {
        let {
            ReactString,
            ReactNumber
        } = this.props
        return (
            <div style={{padding: "0px"}}>
                {ReactString}{ReactNumber}
            </div>
        )
    }
}

//상위 컴포넌트에서 전달 된 값이 자식에서 지정한 기본값 보다 우선순위가 높으므로 400은 무시되고 200이 나옴
R022_PropsDefault.defaultProps = {
    ReactString: "리액트",
    ReactNumber: 400
}

export default R022_PropsDefault;