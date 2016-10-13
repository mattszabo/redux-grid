import React, { PropTypes } from 'react';
import './GridSquare.css'

const GridSquare = ({ type }) => {
  const className = 'grid-square ' + type
  return (
    <div>
      <span className={className} />
    </div>
  );
};

GridSquare.propTypes = {
  type: PropTypes.string.isRequired
};

export default GridSquare;
