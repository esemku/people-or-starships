import React from 'react';
import { render, screen } from '@testing-library/react';

import { PEOPLE_RESOURCES } from 'utils/resources';
import Select from '../Select';

describe('<Select />', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Select options={PEOPLE_RESOURCES} onChange={jest.fn} value="mass" />,
    );

    expect(container).toMatchSnapshot();
  });
});
