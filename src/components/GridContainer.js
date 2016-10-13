import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as gridActions from '../actions/grid-actions';
import GridBoard from './GridBoard';

class GridContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dimensions: { rows: 10, cols: 10 },
      players: [{
        name: 'Player 1',
        pos: { row: 1, col: 1 },
        score: 0
      }],
      food: { pos: { row: 0, col: 0 } }
    }
  }

  render() {
    return (
      <div>
        <GridBoard
          dimensions={this.state.dimensions}
          players={this.state.players}
          food={this.state.food}
        />
      </div>
    );
  }
}

GridContainer.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    dimensions: state.dimensions,
    players: state.players,
    food: state.food
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gridActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GridContainer);
