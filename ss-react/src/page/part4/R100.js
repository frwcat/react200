import React, {Component} from 'react';
import R100_RechartsLineCharts from '../../component/part4/R100_RechartsLineCharts';
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';
import '../../css/new.css'

function R100(){
    return (
      <div>
        <Header></Header>
        <h1>Start React 200!</h1>
        <R100_RechartsLineCharts></R100_RechartsLineCharts>
        <Footer></Footer>
      </div>
    );
  }

export default R100;