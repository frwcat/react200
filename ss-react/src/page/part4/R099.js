import React, {Component} from 'react';
import R099_FloatingPopulationList from '../../component/part4/R099_FloatingPopulationList';
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';
import '../../css/new.css'

function R099(){
    return (
      <div>
        <Header></Header>
        <h1>Start React 200!</h1>
        <R099_FloatingPopulationList></R099_FloatingPopulationList>
        <Footer></Footer>
      </div>
    );
  }

export default R099;