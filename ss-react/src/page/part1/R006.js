import React from 'react';
import R006_LifecycleEx from '../../component/part1/R006_LifecycleEx'
import '../../App.css';

function R006() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>
      <R006_LifecycleEx prop_value = 'FromApp.js' />
    </div>
  );
}

export default R006;