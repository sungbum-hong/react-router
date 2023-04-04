import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  const weight = useSelector((state) => state.weightReducer);
  return (
    <>
      <div>프로필 페이지 입니다! 그런데 당신의 몸무게는 {weight}</div>
    </>
  );
}
