import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'

const BarContainer = styled.div`
  height: 100px;
  width: 3px;
  background: rgba(255, 255, 255, 0.4);
  position: fixed;
  top: 50%;
  right: 50px;
  transform: translateY(-50%);
  border-radius: 4px;
`

const BarInner = styled.div`
  height: 0%;
  width: 3px;
  background: ${colors.white};
  border-radius: 4px;
`

const ScrollBar: React.FunctionComponent = () => {
  let barVal = 0
  const handleScroll = () => {
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const value = document.body.scrollTop || document.documentElement.scrollTop
    barVal = value / docHeight
    const barInner = document.getElementById('bar-inner')
    if (barInner) {
      barInner.style.height = `${barVal * 100}%`
    }
  }

  window.addEventListener('scroll', handleScroll)

  return (
    <BarContainer>
      <BarInner id="bar-inner" />
    </BarContainer>
  )
}

export default ScrollBar
