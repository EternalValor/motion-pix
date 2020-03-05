import React from 'react';
import { shallow } from 'enzyme';

import DiscoverItem from '../DiscoverItem';
import { findByTestAtrr } from '../../testUtils';

describe('DiscoverItem Component', () => {
  let wrapper;
  const props = {
    discoverItemData: {
      poster_path: '/poster'
    }
  };
  beforeEach(() => (wrapper = shallow(<DiscoverItem {...props} />)));

  it('renders correctly', () => {
    expect(findByTestAtrr(wrapper, 'discover-item').length).toBe(1);
  });
});
