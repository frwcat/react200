import React, {Component} from 'react';
import R91_HeaderFooter from '../../component/part3/R91_HeaderFooter';
// import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';
import '../../css/new.css'

function R091(){
    return (
      <div>
        <Header></Header>
        <h1>Start React 200!</h1>
        <R91_HeaderFooter></R91_HeaderFooter>
        <Footer></Footer>
      </div>
    );
  }

export default R091;