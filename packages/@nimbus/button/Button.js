import React from 'react';
import PropTypes from 'prop-types';
import {css} from '@nimbus/core';

export default class Button extends React.PureComponent {
  handleIcon (icon) {
    return <span className={`n-btn-icon-element ${icon}`} />;
  }

  render () {
    const {
      children,
      flavor,

      outlined,
      flat,

      icon,
      iconRight,

      ...othersProps
    } = this.props;

    let classList = css ('n-btn', {
      [`n-btn-${flavor}`]: !!flavor,
      'n-btn-outlined': outlined,
      'n-btn-flat': flat,
      'n-btn-icon': icon,
      'n-btn-icon-right': iconRight,
    });

    if (!children) {
      classList += ' n-btn-childrenless';
    }

    return (
      <button className={classList} {...othersProps}>

        {icon ? this.handleIcon (icon) : null}

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

  /** Estilo de intenção do botão */
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

  /** Botão usa ícone */
  icon: PropTypes.string,

  /** Ícone no lado direito do botão */
  iconRight: PropTypes.bool,
};

Button.defaultProps = {};
