import React from 'react';
import {expect} from 'chai';
import {t} from '../../../packages/@nimbus/strings/index.js';

import Text from '../../../packages/@nimbus/entry/Text';

it ('deve renderizar o input text com label', () => {
  const wrapper = shallow (
    <Text id='Nome' text={t ('common.titulo')} placeholder={t ('common.placeholder')} />
  );
  expect (wrapper).to.matchSnapshot ();
});
