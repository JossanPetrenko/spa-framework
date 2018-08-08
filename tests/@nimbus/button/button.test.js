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
    expect(wrapper.text()).to.contain(t('common.padrao'));
  });

  it('deve renderizar o botão desabilitado', () => {
    const wrapper = shallow(
        <Button disabled>{t('common.desabilitado')}</Button>
    );
    expect(wrapper).to.matchSnapshot();
    expect(wrapper.text()).to.contain(t('common.desabilitado'));
  });

  it('deve renderizar o botão primario', () => {
    const wrapper = shallow(
        <Button primary>{t('common.primario')}</Button>
    );
    expect(wrapper).to.matchSnapshot();
    expect(wrapper.text()).to.contain(t('common.primario'));
  });

  it('deve renderizar o botão secundario', () => {
    const wrapper = shallow(
        <Button secondary>{t('common.secundario')}</Button>
    );
    expect(wrapper).to.matchSnapshot();
    expect(wrapper.text()).to.contain(t('common.secundario'));
  });

});
