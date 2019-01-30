import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  Container,
  Menu,
  Segment,
  Visibility,
  Responsive,
  Sidebar,
  Header,
} from 'semantic-ui-react'



const getWidth = () => {
    const isSSR = typeof window === 'undefined'
  
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
  }

  

  /* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
    <Container text>
      <Header
        as='h2'
        content='The most mentioned books on Medium'
        inverted
        style={{
          fontSize: mobile ? '1.1em' : '1.5em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1em' : '1.5em',
        }}
      />
      <Header
        as='h3'
        content='I analyzed every book ever mentioned on Medium. Here are the most popular ones.'
        inverted
        style={{
          fontSize: mobile ? '0.9em' : '1em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1em',
          marginBottom: mobile ? '0.5em' : '1em',
        }}
      />
      {/* <Button primary size='huge'>
        Get Started
        <Icon name='right arrow' />
      </Button> */}
    </Container>
  )


  HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
  }
  


  const ResponsiveContainer = ({ children }) => (
    <div>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </div>
  )

  


  class DesktopContainer extends Component {
    state = {}
  
    // state = {}
  
    handleContextRef = contextRef => this.setState({ contextRef })
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
    render() {
      const { children } = this.props
      const { fixed } = this.state
  
      const { contextRef } = this.state
  
      return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              claasName="segment"
              // inverted
              textAlign='center'
              style={{ minHeight: 100, padding: '0.5em 0em' }}
              vertical
            >
              <div ref={this.handleContextRef}>
  
                <Menu
                  fixed={fixed ? 'top' : null}
                  inverted={!fixed}
                  pointing={!fixed}
                  secondary={!fixed}
                  size='large'
                  style={{ height: '58px'}}

                >
                  <Container>
                    <Menu.Item as='a' active>
                      <h1> The Books Of Medium </h1>
                    </Menu.Item>
  
                    <Menu.Menu position='right'>
                      <Menu.Item name='reviews' onClick={this.handleItemClick}>
                        About
                      </Menu.Item>
  
                    </Menu.Menu>
                  </Container>
                </Menu>
              </div>
  
              <HomepageHeading />
            </Segment>
  
          </Visibility>
  
          {children}
        </Responsive>
      )
    }
  }
  
  
  
  DesktopContainer.propTypes = {
    children: PropTypes.node,
  }


  class MobileContainer extends Component {
    state = {}
  
    handleSidebarHide = () => this.setState({ sidebarOpened: false })
  
    handleToggle = () => this.setState({ sidebarOpened: true })
  
    render() {
      const { children } = this.props
      const { sidebarOpened } = this.state
  
      return (
        <Responsive
          getWidth={getWidth}
          maxWidth={Responsive.onlyMobile.maxWidth}
        >
  
  
          <Segment
            
            // textAlign='center'
            style={{ minHeight: 150, paddingTop: '0px' }}
            vertical
          >
            <Container style={{ color: 'white' }} >
                I'm a menu
              {/* <Menu size='tiny'>
                <Menu.Item as='a' active>
                  <h1 style={{ fontSize: '18px' }}> The Books Of Medium </h1>
                </Menu.Item>
                <Menu.Menu position='right'>
                  <Menu.Item name='reviews' onClick={this.handleItemClick}>
                    About
                      </Menu.Item>
  
                </Menu.Menu>
              </Menu> */}
            </Container>

            
            <HomepageHeading mobile />
          </Segment>
  
          {children}
          {/* </Sidebar.Pusher> */}
        </Responsive>
      )
    }
  }
  
  MobileContainer.propTypes = {
    children: PropTypes.node,
  }


  export default ResponsiveContainer;

