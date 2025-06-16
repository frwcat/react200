import React from 'react';
import R019_PropsBoolean from '../../component/part2/R019_PropsBoolean';
import '../../App.css';

function R019() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>
      <R019_PropsBoolean BooleanTrueFalse={false}></R019_PropsBoolean>
      <R019_PropsBoolean BooleanTrueFalse></R019_PropsBoolean>
    </div>
  );
}

export default R019;