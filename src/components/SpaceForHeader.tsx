import * as React from 'react'
import styled from '@emotion/styled'

import { heights, colors } from '../styles/variables'
import Container from './Container'
import { MenuSVG } from '../content/icons/Menu'
import { LogoSVG } from '../content/icons/Logo'
import { StaticQuery, graphql, useStaticQuery } from 'gatsby'

const StyledHeader = styled.header`
  height: ${heights.header}vh;
  padding: 0;
  background-color: ${colors.black};
  color: ${colors.white};
  position: relative;
  background-position: center;
  background-size: cover;
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

const HeaderTitle = styled.h1`
  font-size: 48px;
  text-transform: none;
  font-weight: normal;
  line-height: 118px;
`

const KeywordClick = styled.span`
  position: relative;
  display: inline-block;
  line-height: 80px;
`

const ClickAnimation = styled.span`
  display: block;
  border-bottom: 1px solid ${colors.white};
`

interface Props {
  data: {
    edges: Edge[]
  }
}

interface Edge {
  node: Node
}

interface Node {
  name: string
}

interface State {
  selected: string
  showBackground: boolean
}

export const HomeHeaderQuery = graphql`
  query homeHeader {
    allContentfulHomeHeader {
      edges {
        node {
          name
        }
      }
    }
  }
`

class SpaceForHeader extends React.Component<Props, State> {
  keywords: string[] = []
  state: Readonly<State> = {
    selected: this.keywords[0],
    showBackground: false
  }

  constructor(props: Props) {
    super(props)
    console.log(props)
    this.keywords = props.data.edges.map((edge: Edge) => {
      console.log(edge)
      return edge.node.name
    })
    console.log(this.keywords)
  }

  handleClick = () => {
    this.setState({ selected: this.getNextKeyword() })
  }

  getNextKeyword(): string {
    let index = this.keywords.indexOf(this.state.selected) + 1
    if (index === this.keywords.length) {
      index = 0
    }
    return this.keywords[index]
  }

  hideBackground = () => {
    this.setState({ showBackground: false })
  }

  showBackground = () => {
    this.setState({ showBackground: false })
  }

  render() {
    return (
      // <StaticQuery
      //   query={HomeHeaderQuery}
      //   render={({ allContentfulHomeHeader: { edges } }) => {
      //     // console.log(edges)
      //     let headerKeywords: string[] = []
      //     for (const header of edges) {
      //       // console.log(header)
      //       headerKeywords.push(header.node.name)
      //     }

      //     return <h1>hi</h1>
      //   }}
      // />
      // <StyledHeader>
      //   <HeaderTop>
      <a href="/">
        <LogoSVG />
      </a>
      //     <MenuSVG />
      //   </HeaderTop>
      //   <HeaderInner>
      //     <HeaderTitle onMouseEnter={this.hideBackground} onMouseLeave={this.showBackground}>
      //       A space iv{' '}
      //       <KeywordClick onClick={this.handleClick}>
      //         {this.state.selected} <ClickAnimation />
      //       </KeywordClick>{' '}
      //       <br />
      //       web experiences.
      //     </HeaderTitle>
      //   </HeaderInner>
      // </StyledHeader>
    )
  }
}

export default () => (
  <StaticQuery query={HomeHeaderQuery} render={({ allContentfulHomeHeader }) => <SpaceForHeader data={allContentfulHomeHeader} />} />
)

// export default SpaceForHeader
