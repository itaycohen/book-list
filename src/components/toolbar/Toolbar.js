import React from 'react'
import { Menu } from 'semantic-ui-react'



const handleHeaderItemClick = (source) => {
  ReactGA.event({
    category: 'Page Clicks',
    action: 'Header Clicks',
    value: source
  });



class Toolbar extends React.Component {

  render() {

    return (
      <Menu fixed="top">
        <Menu.Item
          name='logo'
          onClick={handleHeaderItemClick(source)}
        >
          {/* <img src='../../images/bookFav.ico' /> */}
          <h1> The Books Of Medium </h1>
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item name='reviews' onClick={handleHeaderItemClick(source)}>
              About
            </Menu.Item>

        </Menu.Menu>

      </Menu>
    )

  }
}

export default Toolbar;

