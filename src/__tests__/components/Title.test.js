import React from 'react';
import { render } from '@testing-library/react';
import Title from '~/components/Title';

describe('Title component test', () => {
  it('should be able to print a text', () => {
    const { getByText, getByTestId } = render(<Title text="Test" />);

    expect(getByTestId('title')).toContainElement(getByText('Test'));
  });
});
