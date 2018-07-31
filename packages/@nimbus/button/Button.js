import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.PureComponent {
  render () {
    const {onClick, children, primary} = this.props;

    const classList = ['n-btn'];

    if (primary) {
      classList.push ('n-btn-primary');
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

  /** Evento de click, disparado ao clicar no botão.  */
  onClick: PropTypes.func,

  /** Estilo primario */
  primary: PropTypes.bool,
};

Button.defaultProps = {
  content: ' ',
  primary: false,
};
