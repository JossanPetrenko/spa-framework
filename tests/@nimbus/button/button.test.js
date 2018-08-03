import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import {t} from '../../../packages/@nimbus/strings/index.js';


import Button from '../../../packages/@nimbus/button';

describe('<Button />', () => {

  it('deve renderizar o botão padrão', () => {
    const wrapper = shallow(
        <Button>{t('common.padrao')}</Button>
    );
    expect(wrapper).to.matchSnapshot();
  });

  it('deve renderizar o botão primario', () => {
    const wrapper = shallow(
        <Button primary>{t('common.primario')}</Button>
    );
    expect(wrapper).to.matchSnapshot();
  });

  // it('Renderiza o conteúdo', () => {
  //   const wrapper = render(<Button> Texto Simples </Button>);
  //   expect(wrapper.text()).to.contain(' Texto Simples ');
  // });

});
