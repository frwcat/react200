import React, {Component} from 'react';
import R105_floatingPopulationScatterChart from '../../component/part4/R105_floatingPopulationScatterChart';
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';
import '../../css/new.css'

function R105(){
    return (
      <div>
        <Header></Header>
        <h1>Start React 200!</h1>
        <R105_floatingPopulationScatterChart></R105_floatingPopulationScatterChart>
        <Footer></Footer>
      </div>
    );
  }

export default R105;