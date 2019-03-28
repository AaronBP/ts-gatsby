import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'

// const Container = styled.span`
//   display: inline-block;
//   position: relative;
//   font-size: 48px;
//   line-height: 80px;
//   letter-spacing: 12px;
//   margin: 0 auto;
//   background: rgba(255, 55, 50, 0.2);
// `

const Clicky = styled.span`
  width: 100%;
  display: inline-block;
  font-size: 8px;
  letter-spacing: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  line-height: 10px;
`

const LineContainer = styled.span`
  display: flex;
  height: 1px;
  width: 100%;
  position: relative;
`

const LineContainerLeft = styled(LineContainer)`
  margin-right: 10px;
  justify-content: flex-end;
`

const LineContainerRight = styled(LineContainer)`
  margin-left: 10px;
  justify-content: flex-start;
`

const Line = styled.span`
  ::before {
    display: inline-block;
    content: '';
    height: 2px;
    border-radius: 2px;
    background: ${colors.white};
    position: absolute;
  }
`

const LineLeft = styled(Line)`
  ::before {
    left: 0;
    animation: r-trail 5s linear infinite;
  }

  @keyframes l-trail {
    0% {
      right: 0%;
      left: 95%;
    }
    2% {
      right: 0%;
      left: 62%;
    }
    5.5% {
      right: 20%;
      left: 0%;
    }
    7% {
      right: 60%;
      left: 0%;
    }
    10% {
      right: 95%;
      left: 0%;
    }
    11% {
      right: 100%;
      left: 0;
    }
    100% {
      right: 100%;
      left: 0%;
    }
  }
`

const LineRight = styled(Line)`
  ::before {
    right: 0;
    animation: l-trail 5s linear infinite;
  }

  @keyframes r-trail {
    0% {
      left: 0%;
      right: 95%;
    }
    2% {
      left: 0%;
      right: 62%;
    }
    5.5% {
      left: 20%;
      right: 0%;
    }
    7% {
      left: 60%;
      right: 0%;
    }
    10% {
      left: 95%;
      right: 0%;
    }
    11% {
      left: 100%;
      right: 0;
    }
    100% {
      left: 100%;
      right: 0%;
    }
  }
`

const TextPulse = styled.span`
  animation: text-fade 5s linear infinite;
  opacity: 0;

  @keyframes text-fade {
    0% {
      opacity: 0;
    }
    6% {
      opacity: 1;
    }
    10% {
      opacity: 1;
    }
    40% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`

const LineAnimationText: React.FunctionComponent<{ text: string }> = ({ text }) => {
  return (
    <span>
      {text}
      <Clicky>
        <LineContainerLeft>
          <LineLeft />
        </LineContainerLeft>
        <TextPulse>CLICK</TextPulse>
        <LineContainerRight>
          <LineRight />
        </LineContainerRight>
      </Clicky>
    </span>
  )
}

export default LineAnimationText
