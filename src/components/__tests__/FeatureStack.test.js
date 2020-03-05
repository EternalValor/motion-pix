import React from 'react';
import { shallow } from 'enzyme';

import FeatureStack from '../FeatureStack';
import { findByTestAtrr } from '../../testUtils';

describe('FeatureStack Component', () => {
  let wrapper;
  const props = {
    size: 'big',
    data: {
      title: 'Movie title',
      genre_ids: [1, 23]
    },
    genres: {
      1: 'comedy',
      23: 'action'
    }
  };
  beforeEach(() => (wrapper = shallow(<FeatureStack {...props} />)));

  it('renders correctly', () => {
    expect(findByTestAtrr(wrapper, 'feature-stack').length).toBe(1);
  });
});
