import React, {Component} from 'react';
import R93_ReactImg from '../../component/part3/R93_ReactImg';
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';
import '../../css/new.css'

function R093(){
    return (
      <div>
        <Header></Header>
        <h1>Start React 200!</h1>
        <R93_ReactImg></R93_ReactImg>
        <Footer></Footer>
      </div>
    );
  }

export default R093;