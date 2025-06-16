import React, {Component} from 'react';
import R111_APIPostJson from '../../component/part4/R111_APIPostJson';
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';
import '../../css/new.css'

function R111(){
    return (
      <div>
        <Header></Header>
        <h1>Start React 200!</h1>
        <R111_APIPostJson component={R111_APIPostJson}></R111_APIPostJson>
        <Footer></Footer>
      </div>
    );
  }

export default R111;