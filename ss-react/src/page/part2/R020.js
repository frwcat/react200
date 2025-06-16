import React from 'react';
import R020_PropsObjVal from '../../component/part2/R020_PropsObjVal';
import '../../App.css';

function R020() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>
      <R020_PropsObjVal ObjectJson={{react:"리액트", twohundred:"200"}}></R020_PropsObjVal>
    </div>
  );
}

export default R020;