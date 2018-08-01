import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.PureComponent {
  render () {
    const {onClick, children, primary, small} = this.props;

    const classList = ['n-btn'];

    if (primary) {
      classList.push ('n-btn-primary');
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

  /** Estilo botão pequeno */
  small: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
  small: false,
};
