import React from 'react';
import { render } from '@testing-library/react';
import Logo from '~/components/Logo';
import logoImage from '~/assets/images/chooks-logo.svg';

describe('Logo component test', () => {
  it('should be to render logo image', () => {
    const {} = render(<Logo />);

    expect(/*to be a image*/);
  });
});
