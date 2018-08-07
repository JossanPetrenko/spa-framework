import React from 'react';
import PropTypes from 'prop-types';
import {css} from '@nimbus/core';

export default class Button extends React.PureComponent {
  render () {
    const {
      children,
      primary,
      secondary,
      sm,
      disabled,
      outlined,
      ...buttonProps
    } = this.props;

    const classList = css ('n-btn', {
      'n-btn-primary': primary,
      'n-btn-disabled': disabled,
      'n-btn-secondary': secondary,
      'n-btn-outlined': outlined,
      'n-btn-sm': sm,
    } );

    return (
      <button className={classList} disabled={disabled} {...buttonProps}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  /** Conteudo do botão */
  content: PropTypes.oneOfType ([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),

  /** Evento clicar, dispara a função onClick */
  onClick: PropTypes.func,

  /** Estilo botão primário */
  primary: PropTypes.bool,

  /** Estilo botão secundário */
  secundary: PropTypes.bool,

  /** Estilo botão pequeno */
  small: PropTypes.bool,

  /** Botão se torna desabilitado */
  disabled: PropTypes.bool,

  /** Estilo botão outlined */
  outlined: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  outlined: false,
  primary: false,
  small: false,
  secundary: false,
};
