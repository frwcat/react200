import React, {Component} from 'react';
import R109_ReactProxy from '../../component/part4/R109_ReactProxy';
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';
import '../../css/new.css'

function R109(){
    return (
      <div>
        <Header></Header>
        <h1>Start React 200!</h1>
        <R109_ReactProxy component={R109_ReactProxy}></R109_ReactProxy>
        <Footer></Footer>
      </div>
    );
  }

export default R109;