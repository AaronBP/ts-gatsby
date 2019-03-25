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
  media: any
  index: number
}

interface State {
  selected: HeaderItem
  showBackground: boolean
}

interface HeaderItem {
  index: number
  word: string
  image: string
}

export const HomeHeaderQuery = graphql`
  query homeHeader {
    allContentfulHomeHeader(sort: { fields: index }) {
      edges {
        node {
          name
          index
          media {
            sizes(maxWidth: 1280) {
              ...GatsbyContentfulSizes
            }
          }
        }
      }
    }
  }
`

class SpaceForHeader extends React.Component<Props, State> {
  items: HeaderItem[] = []

  constructor(props: Props) {
    super(props)
    this.items = props.data.edges.map((edge: Edge) => {
      return {
        index: edge.node.index,
        word: edge.node.name,
        image: edge.node.media.sizes.base64
      }
    })
    this.state = {
      selected: this.items[0],
      showBackground: false
    }
    console.log(this.items, this.state)
  }

  handleClick = () => {
    this.setState({ selected: this.getNextHeaderItem() })
  }

  getNextHeaderItem(): HeaderItem {
    let index = this.state.selected.index + 1
    if (index === this.items.length) {
      index = 0
    }
    return this.items[index]
  }

  hideBackground = () => {
    this.setState({ showBackground: false })
  }

  showBackground = () => {
    this.setState({ showBackground: false })
  }

  render() {
    return (
      <StyledHeader>
        <HeaderTop>
          <a href="/">
            <LogoSVG />
          </a>
          <MenuSVG />
        </HeaderTop>
        <HeaderInner>
          <HeaderTitle onMouseEnter={this.hideBackground} onMouseLeave={this.showBackground}>
            A space iv{' '}
            <KeywordClick onClick={this.handleClick}>
              {this.state.selected.word} <ClickAnimation />
            </KeywordClick>{' '}
            <br />
            web experiences.
          </HeaderTitle>
        </HeaderInner>
      </StyledHeader>
    )
  }
}

export default () => (
  <StaticQuery query={HomeHeaderQuery} render={({ allContentfulHomeHeader }) => <SpaceForHeader data={allContentfulHomeHeader} />} />
)
