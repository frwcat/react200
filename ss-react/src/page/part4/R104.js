import React, {Component} from 'react';
import R104_floatingPopulationComposedChart from '../../component/part4/R104_floatingPopulationComposedChart';
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';
import '../../css/new.css'

function R104(){
    return (
      <div>
        <Header></Header>
        <h1>Start React 200!</h1>
        <R104_floatingPopulationComposedChart></R104_floatingPopulationComposedChart>
        <Footer></Footer>
      </div>
    );
  }

export default R104;