import React from 'react'
import { Button, Item, Label, Icon } from 'semantic-ui-react'
import './BookItem.css';
import ReactGA from 'react-ga';



const handleItemClick = (source, bookName) => {
  ReactGA.event({
    category: 'Book Item Clicks',
    action: source,
    value: bookName
  });



}

class BookItem extends React.Component {




  render() {
    return (

      <Item className="itemContainer">
        <Item.Image src={this.props.bookCoverImg} as='a' href={this.props.amazonLink} target="_blank"
          className="imageItem" style={{ width: '50px !important' }}
          onClick={handleItemClick("Book Image", this.props.bookName)} />

        <Item.Content>
          <Item.Header as='a' href={this.props.amazonLink} target="_blank" onClick={handleItemClick("Book Name", this.props.bookName)}>{this.props.bookName}</Item.Header>
          <Item.Meta>
            <span className='cinema' href={this.props.amazonLink} target="_blank" onClick={handleItemClick("Book Author", this.props.bookName)}>{this.props.bookAuthor} </span>
          </Item.Meta>
          <Item.Extra>
            <Label as='a' color='grey' image floated='right' onClick={handleItemClick("Book Index", this.props.bookName)}>
              {/* <img src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' alt="amazon" /> */}
              <Icon name='numbered list' />
              Rank: {this.props.index + 1}
            </Label>
            <Label as='a' color='blue' image onClick={handleItemClick("Book Number Mentions", this.props.bookName)}>
              {/* <img src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' alt="mentions" /> */}
              <Icon name='comments' />
              Mentions: {this.props.numberOfMentions}
              {/* <Label.Detail>Friend</Label.Detail> */}
            </Label>
            <Label as='a' color='green' image floated='right' onClick={handleItemClick("Book Claps", this.props.bookName)}>
              {/* <img src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' alt="claps" /> */}
              <Icon name='heart' />
              Claps: {this.props.totalMentionsClaps}
            </Label>
            {/* <Label as='a' color='orange' image floated='right'> 
              <img src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' alt="score" />
              <Icon name='trophy' /> 
              Score: {this.props.score}
            </Label> */}
          </Item.Extra>

          <Item.Extra>
            <Button color='yellow' floated='right' size='tiny' onClick={handleItemClick("Book Amazon Link", this.props.bookName)}>
              <a href={this.props.amazonLink} target="_blank" rel="noopener noreferrer" className='LinkButtonContent'>Available on Amazon</a>
            </Button>
          </Item.Extra>
        </Item.Content>
      </Item>

    )




  }
}

export default BookItem;

