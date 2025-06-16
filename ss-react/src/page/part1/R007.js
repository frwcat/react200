import React from 'react';
import R007_LifecycleEx from '../../component/part1/R007_LifecycleEx'
import '../../App.css';

function R007() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>
      <R007_LifecycleEx prop_value = 'FromApp.js' />
    </div>
  );
}

export default R007;