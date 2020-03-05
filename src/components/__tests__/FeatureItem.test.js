import React from 'react';
import { shallow } from 'enzyme';

import FeatureItem from '../FeatureItem';
import { findByTestAtrr } from '../../testUtils';

describe('FeatureItem Component', () => {
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
  beforeEach(() => (wrapper = shallow(<FeatureItem {...props} />)));

  it('renders correctly', () => {
    expect(findByTestAtrr(wrapper, 'feature-item').length).toBe(1);
  });
});
