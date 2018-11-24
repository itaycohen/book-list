import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import BookItem from '../bookItem/BookItem';
// import tileData from './tileData';

const styles = theme => ({
    // root: {
    //   display: 'flex',
    //   flexWrap: 'wrap',
    //   justifyContent: 'space-around',
    //   overflow: 'hidden',
    //   backgroundColor: theme.palette.background.paper,
    // },
    // gridList: {
    //   width: 500,
    //   height: 450,
    // },
    // subheader: {
    //   width: '100%',
    // },
  });



  const tileData = [
    {
      key: 1,
      img: "./fourhours.jpeg",
      title: 'One',
      author: 'author',
    },
    {
        key: 2,
        img: "fourhours.jpeg",
        title: 'Two',
        author: 'author',
    }
  ];






class Main extends React.Component {

    render() {



        const { classes } = this.props;

        return (
          <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={1}>
              {tileData.map(tile => (
                <GridListTile key={tile.key} cols={1}>
                  <img src={tile.img} alt={tile.title} />
                  {/* <h1> hello </h1> */}
                </GridListTile>
              ))}
            </GridList>
            <BookItem/>
          </div>
        );
    }
}



Main.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default withStyles(styles)(Main);








