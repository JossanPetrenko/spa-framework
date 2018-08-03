import React from 'react';
import PropTypes from 'prop-types';


export default class Button extends React.PureComponent {
  render () {
    const { onClick, children, primary, secundary, small, disabled, outlined, } = this.props;

    const classList = ['n-btn'];

    if (primary) {
      classList.push ('n-btn-primary');
    }
    if (secundary) {
      classList.push ('n-btn-secundary');
    }
    if (outlined) {
      classList.push ('n-btn-outlined');
    }
    if (disabled) {
      classList.push ('n-btn-disabled');
    }
    if (small) {
      classList.push ('n-btn-small');
    }


    return (
      <button className={classList.join (' ')} onClick={onClick}>
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
