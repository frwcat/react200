import React, {Component} from 'react';
import R94_Lodash from '../../component/part3/R94_Lodash';
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';
import '../../css/new.css'

function R094(){
    return (
      <div>
        <Header></Header>
        <h1>Start React 200!</h1>
        <R94_Lodash></R94_Lodash>
        <Footer></Footer>
      </div>
    );
  }

export default R094;