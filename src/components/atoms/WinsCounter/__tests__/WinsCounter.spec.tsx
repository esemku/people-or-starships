import React from 'react';
import { render, screen } from '@testing-library/react';

import WinsCounter from '../WinsCounter';

describe('<WinsCounter />', () => {
  it('renders correctly', () => {
    const { container } = render(
      <WinsCounter totalWins={1} className="className" />,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders 0 for Total Wins when totalWins is undefined', () => {
    render(<WinsCounter totalWins={undefined} className="className" />);

    expect(screen.getByText('Total wins: 0').textContent).toContain(0);
  });
});
