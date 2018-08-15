import React from 'react';
import PropTypes from 'prop-types';
import {css} from '@nimbus/core';
import Label from './Label';
import uuid from 'uuid/v4';

export default class Text extends React.PureComponent {
  constructor (props) {
    super (props);
    this.state = {id: props.id || `Text-${uuid ()}`};
  }

  renderInput () {
    const {
      children,
      placeholder,
      label,
      width,

      ...othersProps
    } = this.props;

    const classList = css ('n-entry-text');

    return (
      <input
        className={classList}
        placeholder={placeholder}
        id={this.state.id}
        {...othersProps}
      />
    );
  }
  render () {
    const classRoot = css ('n-entry-root');
    const {label, width} = this.props;

    if ('label' in this.props) {
      return (
        <div style={{width, boxSizing: 'border-box'}} className={classRoot}>
          <Label htmlFor={this.state.id}>
            {label}
          </Label>
          {this.renderInput ()}
        </div>
      );
    } else {
      return (
        <div style={{width, boxSizing: 'border-box'}} className={classRoot}>
          {this.renderInput ()}
        </div>
      );
    }
  }
}

Text.propTypes = {
  /** Rótulo do input */
  label: PropTypes.string,

  /** Placeholder do input */
  placeholder: PropTypes.string,

  /** Input desabilitado */
  disabled: PropTypes.bool,

  /** Tamanho horizontal do input */
  width: PropTypes.string,
};

Text.defaultProps = {
  width: '100%',
};
