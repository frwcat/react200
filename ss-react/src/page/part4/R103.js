import React, {Component} from 'react';
import R103_floatingPopulationBarChart from '../../component/part4/R103_floatingPopulationBarChart';
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';
import '../../css/new.css'

function R103(){
    return (
      <div>
        <Header></Header>
        <h1>Start React 200!</h1>
        <R103_floatingPopulationBarChart></R103_floatingPopulationBarChart>
        <Footer></Footer>
      </div>
    );
  }

export default R103;