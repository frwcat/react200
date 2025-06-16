import React from 'react';
import R023_PropsNode from '../../component/part2/R023_PropsNode';
import '../../App.css';

function R023() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>
      <R023_PropsNode>
        <span>node from App.js</span>
      </R023_PropsNode>
    </div>
  );
}

export default R023;