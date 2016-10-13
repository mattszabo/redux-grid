import React, { PropTypes } from 'react';

const GridSquare = ({ type }) => {
  let icon = '0'
  if(type === 'player') {
    icon = 'X'
  } else if (type === 'food') {
    icon = 'F'
  }
  return (
    <div>
      <span className={type}>{icon}</span>
    </div>
  );
};

GridSquare.propTypes = {
  type: PropTypes.string.isRequired
};

export default GridSquare;
