// Absolute Import
import React from 'react';
import PropTypes from 'prop-types';
// Relative Import

// Containers

// Components

// Component constants

// Style constants
const style = {};

// Component
const Component = () => (
  <div style={style} >
    <h5>Teams</h5>
  </div>
);

// Props Default
Component.defaultProps = {
  propExampleOPtional: 'Stranger',
};

// propTypes
Component.propTypes = {
  propsExample: PropTypes.isRequired,
  propExampleOPtional: PropTypes.integer,
};

export default Component;
