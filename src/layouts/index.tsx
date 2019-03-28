import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'
import SpaceForHeader from '../components/SpaceForHeader'
import Menu from '../components/Menu'
import TopMenu from '../components/TopMenu'
import ScrollBar from '../components/ScrollBar'

type StaticQueryProps = {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

interface Props {
  children: any
}

interface State {
  menuIsOpen: boolean
}

class IndexLayout extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { menuIsOpen: false }
  }

  onToggleMenu = () => {
    this.setState({ menuIsOpen: !this.state.menuIsOpen })
    console.log('toggle!')
  }

  render() {
    const menu = this.state.menuIsOpen ? <Menu onClick={this.onToggleMenu} /> : null
    return (
      <StaticQuery
        query={graphql`
          query IndexLayoutQuery {
            site {
              siteMetadata {
                title
                description
              }
            }
          }
        `}
        render={(data: StaticQueryProps) => (
          <LayoutRoot>
            <Helmet
              title={`${data.site.siteMetadata.title} - Home`}
              meta={[
                { name: 'description', content: data.site.siteMetadata.description },
                { name: 'keywords', content: 'gatsbyjs, gatsby, javascript, sample, something' }
              ]}
            />
            {menu}
            <TopMenu menuIsOpen={false} onClick={this.onToggleMenu} />
            <SpaceForHeader />
            <LayoutMain>{this.props.children}</LayoutMain>
            <ScrollBar />
          </LayoutRoot>
        )}
      />
    )
  }
}

export default IndexLayout
