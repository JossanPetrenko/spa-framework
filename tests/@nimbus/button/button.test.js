import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';

import Button from '../../../packages/@nimbus/button';

describe('<Button />', () => {

  it('Renderiza o conteúdo', () => {
    const wrapper = render(<Button> Texto Simples </Button>);
    expect(wrapper.text()).to.contain(' Texto Simples ');
  });

  it('should render a label', () => {
    const wrapper = shallow(
        <Button>Hello Jest!!!!!!</Button>
    );
    expect(wrapper).to.matchSnapshot();
});
it('should render a small label', () => {
    const wrapper = shallow(
        <Button small>Hello Jest!!!</Button>
    );
    expect(wrapper).to.matchSnapshot();
});
it('should render a grayish label', () => {
    const wrapper = shallow(
        <Button light>Hello Jest!!</Button>
    );
    expect(wrapper).to.matchSnapshot();
});

});
