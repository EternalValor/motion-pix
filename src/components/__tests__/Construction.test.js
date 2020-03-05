import React from 'react';
import { shallow } from 'enzyme';

import Construction from '../Construction';
import { findByTestAtrr } from '../../testUtils';

describe('Construction Component', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Construction />)));

  it('renders correctly', () => {
    expect(findByTestAtrr(wrapper, 'construction').length).toBe(1);
  });

  it('provides a link to the home page', () => {
    expect(findByTestAtrr(wrapper, 'construction-link').prop('to')).toEqual(
      '/'
    );
  });
});
