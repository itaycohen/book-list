import React from 'react'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />


class BookItem extends React.Component {

  render() {
    return (

      <Item>
        <Item.Image src={this.props.bookCoverImg}  />

        <Item.Content>
          <Item.Header as='a'>{this.props.bookName}</Item.Header>
          <Item.Meta>
            <span className='cinema'>{this.props.bookAuthor}</span>
          </Item.Meta>
          {/* <Item.Description>{paragraph}</Item.Description> */}
          <Item.Extra>
            <Button color='yellow'  >
              <a href={this.props.amazonLink}  target="_blank" rel="noopener noreferrer" >Available on Amazon</a>
            </Button>
            <Label as='a' image floated='right'>
              <img src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
              Index: {this.props.index + 1}
            </Label>
            <Label as='a' color='blue' image>
              <img src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' />
              Mentiones: {this.props.numberOfMentions}
              {/* <Label.Detail>Friend</Label.Detail> */}
           </Label>
            <Label as='a' image floated='right'>
              <img src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
              Claps: {this.props.totalMentionsClaps}
            </Label>
            <Label as='a' image floated='right'>
              <img src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
              Score: {this.props.score}
            </Label>
          </Item.Extra>
        </Item.Content>
      </Item>

    )

    


  }
}

export default BookItem;
