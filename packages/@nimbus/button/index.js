import React from 'react';
import PropTypes from 'prop-types';

export default function Button() {
	return <button> QUE AGRESSIVO </button>;
}

Button.propTypes = {
	content: PropTypes.oneOf([ PropTypes.string, PropTypes.element, PropTypes.node ])
};
