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

  handleIcon (icon, orientation = 'right') {
    if(!icon) return;
    return <span className={`n-entry-icon ${icon} ${orientation}`} />;
  }

  renderInput () {
    const {
      children,
      placeholder,
      label,
      width,
      iconRight,
      iconLeft,
      ...othersProps
    } = this.props;

    const classInput = css ('n-entry');

    return (
      <span>
        <input
          className={classInput}
          placeholder={placeholder}
          id={this.state.id}
          {...othersProps}
        />
          {this.handleIcon (iconLeft, 'left')}
          {this.handleIcon (iconRight, 'right')}
      </span>
    );
  }

  render () {
    const classRoot = css ('n-entry-root');

    const classContainer = css ('n-entry-container', {
      'n-input-icon-left': this.props.iconLeft,
      'n-input-icon-right': this.props.iconRight,
    });

    const {label, width} = this.props;

    if ('label' in this.props) {
      return (
        <div className={classRoot} style={{width}}>
          <Label htmlFor={this.state.id}>
            {label}
          </Label>
          <div className={classContainer}>
            {this.renderInput ()}
          </div>
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
  /** Rótulo do input. */
  label: PropTypes.PropTypes.oneOfType ([PropTypes.string, PropTypes.bool]),
  /** Placeholder do input. */
  placeholder: PropTypes.string,

  /** Input desabilitado. */
  disabled: PropTypes.bool,

  /** Tamanho horizontal do input. */
  width: PropTypes.string,
};

Text.defaultProps = {
  width: '100%',
};
