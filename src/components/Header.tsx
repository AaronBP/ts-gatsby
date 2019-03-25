import * as React from 'react'
import styled from '@emotion/styled'

import { heights, colors } from '../styles/variables'
import Container from './Container'
import { MenuSVG } from '../content/icons/Menu'
import { LogoSVG } from '../content/icons/Logo'

const StyledHeader = styled.header`
  height: ${heights.header}vh;
  padding: 0;
  background-color: ${colors.black};
  color: ${colors.white};
  position: relative;
`

const HeaderTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 50px 50px;
  position: absolute;
  width: 100%;
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
`

interface HeaderProps {
  title: string
}

const Header: React.SFC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderTop>
      <a href="/">
        <LogoSVG />
      </a>
      <MenuSVG />
    </HeaderTop>
    <HeaderInner>
      <h1>{title}</h1>
    </HeaderInner>
  </StyledHeader>
)

export default Header
