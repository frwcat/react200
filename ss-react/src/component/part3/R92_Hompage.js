import React, {Component, useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
class R92_Hompage extends Component{

    render() {
        return (
            <section className="main">
                <div className="m_login">
                <h3><span><img src={require("../../img/main/log_img.png")} alt="" /></span>LOGIN</h3>
                <div className="log_box">
                    <form onSubmit={this.handleSubmit}>
                    <div className="in_ty1">
                        <span><img src={require("../../img/main/m_log_i3.png")} alt="" /></span>
                        <input type="text" id="email_val" name="email" placeholder="이메일" onChange={this.handleChange} />
                    </div>
                    <div  className="in_ty1">
                        <span className="ic_2"><img src={require("../../img/main/m_log_i2.png")} alt="" /></span>
                        <input type="password" id="pwd_val" name="password" placeholder="비밀번호" onChange={this.handleChange} />
                    </div>
                    <ul className="af">
                        <li><Link to={'/register_check'}>회원가입</Link></li>
                        <li className="pwr_b" onClick={this.pwdResetClick}><a href="#n">비밀번호 재설정</a></li>
                    </ul>
                    <button className="s_bt" type="submit" onClick={this.submitClick}>로그인</button>
                    </form>
                </div>
                </div>
            </section>
        )
    }

}
export default R92_Hompage;