import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

// 레이아웃은 '헤더' + '상세화면'으로 구성
// Outlet: 자식 컴포넌트의 위치

// styled 컴포넌트를 사용해서 div 태그 생성
const LayoutContainer = styled.div`
  background-color:#e9ecef;
  display:flex;
  flex-direction: column; /* 수직방향으로 배치 (수평 or 수직) */
  align-items: center; /* 반대방향(수평)으로는 중앙에 정렬 */
`;  

// Layout: 부모컴포넌트
// Home, Login, Register: 자식컴포넌트
const Layout = () => {
  return (
    <LayoutContainer>
      <Header></Header>
      <Outlet></Outlet> {/* Home,Login,Register */}
    </LayoutContainer>
  )
}

export default Layout