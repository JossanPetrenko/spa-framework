import React from 'react';
import PropTypes from 'prop-types';
import {css} from '@nimbus/core';

export default class Button extends React.PureComponent {
  render () {
    const {
      children,
      outlined,
      flat,
      flavor,

      ...buttonProps
    } = this.props;

    let classList = css ('n-btn', {
      [`n-btn-${flavor}`]: !!flavor,
      'n-btn-outlined': outlined,
      'n-btn-flat': flat,
    });

    return (
      <button className={classList} {...buttonProps}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  /** Conteudo do botão */
  children: PropTypes.oneOfType ([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),

  /** Evento clicar, dispara a função onClick */
  onClick: PropTypes.func,

  /** Estilo de intenção botão */
  flavor: PropTypes.oneOfType ([
    PropTypes.oneOf ([
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
    ]),
  ]),

  /** Botão se torna desabilitado */
  disabled: PropTypes.bool,

  /** Botão se torna estilo flat */
  flat: PropTypes.bool,

  /** Botão se torna estilo outlined */
  outlined: PropTypes.bool,
};

Button.defaultProps = {};
