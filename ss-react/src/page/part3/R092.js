import React, {Component} from 'react';
import R92_Hompage from '../../component/part3/R92_Hompage';
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';
import '../../css/new.css'

function R092(){
    return (
      <div>
        <Header></Header>
        <h1>Start React 200!</h1>
        <R92_Hompage></R92_Hompage>
        <Footer></Footer>
      </div>
    );
  }

export default R092;