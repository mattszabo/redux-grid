import React, {PropTypes} from 'react';
import GridSquare from './GridSquare';
import './GridBoard.css'

class GridBoard extends React.Component {
  generateRow(row, key) {
    return <div className='grid-board-row' key={key++}>{row}</div>
  }
  render() {
    const { dimensions, players, food } = this.props
    let board = []
    let row = []
    let key = 0
    for(let i = 0; i < dimensions.rows; i++) {
      for(let j = 0; j < dimensions.cols; j++) {
        if (players[0].pos.row === i && players[0].pos.col === j) {
          row.push(<GridSquare key={key++} type='player' />)
        } else if (food.pos.row === i && food.pos.col === j) {
          row.push(<GridSquare key={key++} type='food' />)
        } else {
          row.push(<GridSquare key={key++} type='empty' />)
        }
      }

      board.push(this.generateRow(row, key))
      row = []
    }
    return (
      <div className='grid-board'>
        {board}
      </div>
    )
  }
}

GridBoard.propTypes = {
  dimensions: PropTypes.object.isRequired,
  players: PropTypes.array.isRequired,
  food: PropTypes.object.isRequired
};

export default GridBoard;
