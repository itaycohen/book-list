import React from 'react'
import { Button, Item, Label } from 'semantic-ui-react'
import './BookItem.css';

// const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />


class BookItem extends React.Component {

  render() {
    return (

      <Item>
        <Item.Image src={this.props.bookCoverImg} as='a'
          href={this.props.amazonLink}  target="_blank" />

        <Item.Content>
          <Item.Header as='a'>{this.props.bookName}</Item.Header>
          <Item.Meta>
            <span className='cinema'>{this.props.bookAuthor}</span>
          </Item.Meta>
          {/* <Item.Description>{paragraph}</Item.Description> */}
          <Item.Extra>
            <Button color='yellow'  >
              <a href={this.props.amazonLink}  target="_blank" rel="noopener noreferrer" className='LinkButtonContent'>Available on Amazon</a>
            </Button>
            <Label as='a' image floated='right'>
              <img src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' alt="amazon"/>
              Index: {this.props.index + 1}
            </Label>
            <Label as='a' color='blue' image>
              <img src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' alt="mentions"/>
              Mentions: {this.props.numberOfMentions}
              {/* <Label.Detail>Friend</Label.Detail> */}
           </Label>
            <Label as='a' image floated='right'>
              <img src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' alt="claps"/>
              Claps: {this.props.totalMentionsClaps}
            </Label>
            <Label as='a' image floated='right'>
              <img src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' alt="score"/>
              Score: {this.props.score}
            </Label>
          </Item.Extra>
        </Item.Content>
      </Item>

    )

    


  }
}

export default BookItem;

