import React from 'react';
import R008_LifecycleEx from '../../component/part1/R008_LifecycleEx'
import '../../App.css';

function R008() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>
      <R008_LifecycleEx prop_value = 'FromApp.js'/>
    </div>
  );
}

export default R008;