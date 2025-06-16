import React from 'react';
import PropsDatetype from '../../component/part2/R018_PropsDatetype';
import '../../App.css';

function R018() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>
      <PropsDatetype 
      String="react"
      Number={200}
      Boolean={1==1}
      Array={[0, 1, 8]}
      ObjectJson={{react:"리액트", twohundred:"red"}}
      Function={console.log("FunctionProps: function!")}></PropsDatetype>
    </div>
  );
}

export default R018;