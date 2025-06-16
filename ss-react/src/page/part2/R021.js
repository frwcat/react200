import React from 'react';
import R021_PropsRequired from '../../component/part2/R021_PropsRequired';
import '../../App.css';

function R021() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>
      <R021_PropsRequired ReactNumber={200}></R021_PropsRequired>
    </div>
  );
}

export default R021;