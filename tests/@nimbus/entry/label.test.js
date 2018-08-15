import React from 'react';
import {expect} from 'chai';
import {t} from '../../../packages/@nimbus/strings/index.js';

import Label from '../../../packages/@nimbus/entry/Label';

it ('deve renderizar a label com texto ', () => {
  const wrapper = shallow (<Label>{t ('common.titulo')}</Label>);
  expect (wrapper).to.matchSnapshot ();
});



