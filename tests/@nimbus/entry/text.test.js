import React from 'react';
import {expect} from 'chai';
import {t} from '../../../packages/@nimbus/strings/index.js';

import Text from '../../../packages/@nimbus/entry/Text';

it ('deve renderizar o input text com label', () => {
  const wrapper = shallow (
    <Text
      id="Nome"
      label={t ('common.titulo')}
      placeholder={t ('common.placeholder')}
    />
  );
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar o input text com label desabilitado', () => {
  const wrapper = shallow (
    <Text
      id="Nome"
      label={t ('common.titulo')}
      placeholder={t ('common.placeholder')}
      disabled
    />
  );
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar o input text sem label', () => {
  const wrapper = shallow (
    <Text id="Nome" placeholder={t ('common.placeholder')} />
  );
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar o input text sem label desabilitado', () => {
  const wrapper = shallow (
    <Text id="Nome" placeholder={t ('common.placeholder')} disabled />
  );
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar o input text com label sem texto', () => {
  const wrapper = shallow (
    <Text id="Nome" label placeholder={t ('common.placeholder')} />
  );
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar o input text com label sem texto desabilitado', () => {
  const wrapper = shallow (
    <Text id="Nome" label placeholder={t ('common.placeholder')} disabled />
  );
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar o input text com label e width em px', () => {
  const wrapper = shallow (
    <Text
      id="Nome"
      label={t ('common.titulo')}
      placeholder={t ('common.placeholder')}
      width="200px"
    />
  );
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar o input text com label e width em rem', () => {
  const wrapper = shallow (
    <Text
      id="Nome"
      label={t ('common.titulo')}
      placeholder={t ('common.placeholder')}
      width="12rem"
    />
  );
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar o input text com label e width em %', () => {
  const wrapper = shallow (
    <Text
      id="Nome"
      label={t ('common.titulo')}
      placeholder={t ('common.placeholder')}
      width="50%"
    />
  );
  expect (wrapper).to.matchSnapshot ();
});
