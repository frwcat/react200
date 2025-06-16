import React from 'react';
import R022_PropsDefault from '../../component/part2/R022_PropsDefault';
import '../../App.css';

function R022() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>
      <R022_PropsDefault ReactNumber={200}></R022_PropsDefault>
    </div>
  );
}

export default R022;