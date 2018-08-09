import React from 'react';
import PropTypes from 'prop-types';
import {css} from '@nimbus/core';

export default class Button extends React.PureComponent {
  render () {
    const {
      children,

      color,

      disabled,
      outlined,

      primary,
      secondary,

      sm,
      lg,

      success,
      danger,
      info,
      warning,

      ...buttonProps
    } = this.props;

    let classList = css ('n-btn', {
     //'n-btn-primary': primary,
      'n-btn-disabled': disabled,
      //'n-btn-secondary': secondary,
      'n-btn-outlined': outlined,
      'n-btn-lg': lg,
      'n-btn-sm': sm,
      'n-btn-success': success,
      'n-btn-danger': danger,
      'n-btn-info': info,
      'n-btn-warning': warning,
    });

    //intents ands type
    if (color=='primary') {
      if(outlined){
        classList += ' outlined-primary';
      }else{
        classList += ' primary';
      }
    }
    if (color=='secondary') {
      if(outlined){
        classList += ' outlined-secondary';
      }else{
        classList += ' secondary';
      }
    }


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

  /** Estilo botão informação */
  info: PropTypes.bool,

  /** Estilo botão alerta */
  warning: PropTypes.bool,

  /** Estilo botão sucesso */
  success: PropTypes.bool,

  /** Estilo botão perigo */
  danger: PropTypes.bool,

  /** Botão se torna desabilitado */
  disabled: PropTypes.bool,

  /** Estilo botão outlined */
  outlined: PropTypes.bool,

  /** Estilo botão pequeno */
  sm: PropTypes.bool,

  /** Estilo botão grande */
  lg: PropTypes.bool,

  /** Estilo botão grande */
  color: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  outlined: false,
  primary: false,
  sm: false,
  lg: false,
  secundary: false,
  info: false,
  warning: false,
  success: false,
  danger: false,
  color: '',
};
