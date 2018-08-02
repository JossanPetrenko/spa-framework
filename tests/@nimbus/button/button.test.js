import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';

import Button from '../../../packages/@nimbus/button';

describe('<Button />', () => {

  it('renders the content', () => {
    const wrapper = render(<Button> Texto Simples </Button>);
    expect(wrapper.text()).to.contain(' Texto Simples ');
  });

});
