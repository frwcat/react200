import React, {Component} from 'react';
import R102_floatingPopulationAreaChart from '../../component/part4/R102_floatingPopulationAreaChart';
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';
import '../../css/new.css'

function R102(){
    return (
      <div>
        <Header></Header>
        <h1>Start React 200!</h1>
        <R102_floatingPopulationAreaChart></R102_floatingPopulationAreaChart>
        <Footer></Footer>
      </div>
    );
  }

export default R102;