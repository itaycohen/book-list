import React from 'react'
import { Menu } from 'semantic-ui-react'


class Toolbar extends React.Component {

  render() {

    return (
      <Menu fixed="top">
        <Menu.Item
          name='logo'
          onClick={this.handleItemClick}
        >
          {/* <img src='../../images/bookFav.ico' /> */}
          <h1> The Books Of Medium </h1>
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item name='reviews' onClick={this.handleItemClick}>
              About
            </Menu.Item>

        </Menu.Menu>

      </Menu>
    )

  }
}

export default Toolbar;

