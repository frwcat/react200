import React, {Component} from 'react';
import R110_ApiGetJson from '../../component/part4/R110_ApiGetJson';
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';
import '../../css/new.css'

function R110(){
    return (
      <div>
        <Header></Header>
        <h1>Start React 200!</h1>
        <R110_ApiGetJson component={R110_ApiGetJson}></R110_ApiGetJson>
        <Footer></Footer>
      </div>
    );
  }

export default R110;