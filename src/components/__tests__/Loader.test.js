import React from 'react';
import { shallow } from 'enzyme';

import Loader from '../Loader';
import { findByTestAtrr } from '../../testUtils';

describe('Loader Component', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Loader />)));

  it('renders correctly', () => {
    expect(findByTestAtrr(wrapper, 'loader').length).toBe(1);
  });
});
