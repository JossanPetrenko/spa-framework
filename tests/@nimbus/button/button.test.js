import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';
import {t} from '../../../packages/@nimbus/strings/index.js';
import sinon from 'sinon';

import Button from '../../../packages/@nimbus/button';




describe ('<Button />', () => {
  //onClick
  it ('deve clicar o botão default', () => {
    const callback = sinon.fake();
    const wrapper = shallow (<Button onClick={callback}>{t ('common.padrao')}</Button>);
    wrapper.simulate('click');
    expect(callback.called).to.be.true;

  });

  //default
  it ('deve renderizar o botão default', () => {
    const wrapper = shallow (<Button>{t ('common.padrao')}</Button>);
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão default disabled', () => {
    const wrapper = shallow (
      <Button disabled>{t ('common.desabilitado')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //primary
  it ('deve renderizar o botão primary', () => {
    const wrapper = shallow (
      <Button flavor="primary">{t ('common.primario')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão primary disabled', () => {
    const wrapper = shallow (
      <Button flavor="primary" disabled>{t ('common.primario')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //secundary
  it ('deve renderizar o botão secundary', () => {
    const wrapper = shallow (
      <Button flavor="secondary">{t ('common.secundario')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão secundary disabled', () => {
    const wrapper = shallow (
      <Button flavor="secondary" disabled>{t ('common.secundario')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //info
  it ('deve renderizar o botão info', () => {
    const wrapper = shallow (
      <Button flavor="info">{t ('common.informacoes')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão info disabled', () => {
    const wrapper = shallow (
      <Button flavor="info" disabled>{t ('common.informacoes')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //warning
  it ('deve renderizar o botão warning', () => {
    const wrapper = shallow (
      <Button flavor="warning">{t ('common.alerta')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão warning default', () => {
    const wrapper = shallow (
      <Button flavor="warning" disabled>{t ('common.alerta')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });


  //success
  it ('deve renderizar o botão success', () => {
    const wrapper = shallow (
      <Button flavor="success">{t ('common.sucesso')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão warning default', () => {
    const wrapper = shallow (
      <Button flavor="warning" disabled>{t ('common.alerta')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });


  //danger
  it ('deve renderizar o botão danger', () => {
    const wrapper = shallow (
      <Button flavor="danger">{t ('common.perigo')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão danger default', () => {
    const wrapper = shallow (
      <Button flavor="danger" disabled>{t ('common.alerta')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //outlined
  it ('deve renderizar o botão outlined', () => {
    const wrapper = shallow (
      <Button outlined>{t ('common.outlined')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão outlined disabled', () => {
    const wrapper = shallow (
      <Button outlined disabled>{t ('common.outlined')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão info outlined', () => {
    const wrapper = shallow (
      <Button outlined flavor="info">{t ('common.outlined')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão info outlined disabled', () => {
    const wrapper = shallow (
      <Button outlined flavor="info" disabled>{t ('common.outlined')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão warning outlined', () => {
    const wrapper = shallow (
      <Button outlined flavor="warning">{t ('common.outlined')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão warning outlined disabled', () => {
    const wrapper = shallow (
      <Button outlined flavor="warning" disabled>{t ('common.outlined')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão success outlined', () => {
    const wrapper = shallow (
      <Button outlined flavor="success">{t ('common.outlined')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão success outlined disabled', () => {
    const wrapper = shallow (
      <Button outlined flavor="success" disabled>{t ('common.outlined')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão danger outlined', () => {
    const wrapper = shallow (
      <Button outlined flavor="danger">{t ('common.outlined')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão danger outlined disabled', () => {
    const wrapper = shallow (
      <Button outlined flavor="danger" disabled>{t ('common.outlined')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

    //flat
    it ('deve renderizar o botão flat', () => {
      const wrapper = shallow (
        <Button flat>{t ('common.flat')}</Button>
      );
      expect (wrapper).to.matchSnapshot ();
    });

    it ('deve renderizar o botão flat disabled', () => {
      const wrapper = shallow (
        <Button flat disabled>{t ('common.flat')}</Button>
      );
      expect (wrapper).to.matchSnapshot ();
    });

    it ('deve renderizar o botão info flat', () => {
      const wrapper = shallow (
        <Button flat flavor="info">{t ('common.flat')}</Button>
      );
      expect (wrapper).to.matchSnapshot ();
    });

    it ('deve renderizar o botão info flat disabled', () => {
      const wrapper = shallow (
        <Button flat flavor="info" disabled>{t ('common.flat')}</Button>
      );
      expect (wrapper).to.matchSnapshot ();
    });

    it ('deve renderizar o botão warning flat', () => {
      const wrapper = shallow (
        <Button flat flavor="warning">{t ('common.flat')}</Button>
      );
      expect (wrapper).to.matchSnapshot ();
    });

    it ('deve renderizar o botão warning flat disabled', () => {
      const wrapper = shallow (
        <Button flat flavor="warning" disabled>{t ('common.flat')}</Button>
      );
      expect (wrapper).to.matchSnapshot ();
    });

    it ('deve renderizar o botão success flat', () => {
      const wrapper = shallow (
        <Button flat flavor="success">{t ('common.flat')}</Button>
      );
      expect (wrapper).to.matchSnapshot ();
    });

    it ('deve renderizar o botão success flat disabled', () => {
      const wrapper = shallow (
        <Button flat flavor="success" disabled>{t ('common.flat')}</Button>
      );
      expect (wrapper).to.matchSnapshot ();
    });

    it ('deve renderizar o botão danger flat', () => {
      const wrapper = shallow (
        <Button flat flavor="danger">{t ('common.flat')}</Button>
      );
      expect (wrapper).to.matchSnapshot ();
    });

    it ('deve renderizar o botão danger flat disabled', () => {
      const wrapper = shallow (
        <Button flat flavor="danger" disabled>{t ('common.flat')}</Button>
      );
      expect (wrapper).to.matchSnapshot ();
    });

});
