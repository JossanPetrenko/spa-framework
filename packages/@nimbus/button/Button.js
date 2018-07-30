import React from 'react';
import PropTypes from 'prop-types';

export default function Button() {
	return <button> Simple </button>;
}

Button.propTypes = {
	content: PropTypes.oneOf([ PropTypes.string, PropTypes.element, PropTypes.node ])
};

Button.defaultProps = {
  content: "oi"
}
