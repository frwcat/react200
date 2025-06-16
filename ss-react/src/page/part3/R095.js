import React, {Component} from 'react';
import R95_LoadTrottle from '../../component/part3/R95_LoadTrottle';
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';
import '../../css/new.css'

function R095(){
    return (
      <div>
        <Header></Header>
        <h1>Start React 200!</h1>
        <R95_LoadTrottle></R95_LoadTrottle>
        <Footer></Footer>
      </div>
    );
  }

export default R095;