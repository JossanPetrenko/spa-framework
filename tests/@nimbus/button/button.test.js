import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import {t} from '../../../packages/@nimbus/strings/index.js';


import Button from '../../../packages/@nimbus/button';

describe('<Button />', () => {

  it('deve renderizar o botão default', () => {
    const wrapper = shallow(
        <Button>{t('common.padrao')}</Button>
    );
    expect(wrapper).to.matchSnapshot();
    expect(wrapper.text()).to.contain(t('common.padrao'));
  });

  it('deve renderizar o botão disabled', () => {
    const wrapper = shallow(
        <Button disabled>{t('common.desabilitado')}</Button>
    );
    expect(wrapper).to.matchSnapshot();
    expect(wrapper.text()).to.contain(t('common.desabilitado'));
  });

  it('deve renderizar o botão primary', () => {
    const wrapper = shallow(
        <Button primary>{t('common.primario')}</Button>
    );
    expect(wrapper).to.matchSnapshot();
    expect(wrapper.text()).to.contain(t('common.primario'));
  });

  it('deve renderizar o botão secundary', () => {
    const wrapper = shallow(
        <Button secondary>{t('common.secundario')}</Button>
    );
    expect(wrapper).to.matchSnapshot();
    expect(wrapper.text()).to.contain(t('common.secundario'));
  });

  it('deve renderizar o botão info', () => {
    const wrapper = shallow(
        <Button info>{t('common.informacoes')}</Button>
    );
    expect(wrapper).to.matchSnapshot();
    expect(wrapper.text()).to.contain(t('common.informacoes'));
  });

  it('deve renderizar o botão warning', () => {
    const wrapper = shallow(
        <Button warning>{t('common.alerta')}</Button>
    );
    expect(wrapper).to.matchSnapshot();
    expect(wrapper.text()).to.contain(t('common.alerta'));
  })

  it('deve renderizar o botão success', () => {
    const wrapper = shallow(
        <Button success>{t('common.sucesso')}</Button>
    );
    expect(wrapper).to.matchSnapshot();
    expect(wrapper.text()).to.contain(t('common.sucesso'));
  })

  it('deve renderizar o botão danger', () => {
    const wrapper = shallow(
        <Button danger>{t('common.perigo')}</Button>
    );
    expect(wrapper).to.matchSnapshot();
    expect(wrapper.text()).to.contain(t('common.perigo'));
  })

});
