import React, {Component} from 'react';
import R101_FloatingPopulationListChart from '../../component/part4/R101_FloatingPopulationListChart';
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';
import '../../css/new.css'

function R101(){
    return (
      <div>
        <Header></Header>
        <h1>Start React 200!</h1>
        <R101_FloatingPopulationListChart></R101_FloatingPopulationListChart>
        <Footer></Footer>
      </div>
    );
  }

export default R101;