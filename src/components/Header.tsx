import * as React from 'react'
import styled from '@emotion/styled'

import { heights, colors } from '../styles/variables'
import Container from './Container'
import TopMenu from './TopMenu'
import Menu from './Menu'

const StyledHeader = styled.header`
  height: ${heights.header}vh;
  padding: 0;
  background-color: ${colors.black};
  color: ${colors.white};
  position: relative;
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

interface State {
  menuIsOpen: boolean
}

class Header extends React.Component<HeaderProps, State> {
  constructor(props: HeaderProps) {
    super(props)
    console.log('hello')
    this.state = {
      menuIsOpen: false
    }
  }
  onToggleMenu = (isActive: boolean) => {
    this.setState({ menuIsOpen: isActive })
    console.log('toggle menu')
  }
  render() {
    const menuElement = this.state.menuIsOpen ? <Menu onClick={this.onToggleMenu} /> : null
    return (
      <StyledHeader>
        <TopMenu menuIsOpen={false} onClick={this.onToggleMenu} />
        <HeaderInner>
          <h1>{this.props.title}</h1>
        </HeaderInner>
        {menuElement}
      </StyledHeader>
    )
  }
}
export default Header
