import React from 'react';
import { render, screen } from '@testing-library/react';
import UseEffectRender from './UseEffectRender';
import { toBeInTheDocument } from '@testing-library/jest-dom';

describe('useEffect rendering', () => {
  it('should render only after async function resolved', async () => {
    render(<UseEffectRender />);
    expect(screen.queryByText(/I am/)).toBeNull();
    // find系はawaitが完了するまで待ってくれる
    expect(await screen.findByText(/I am/)).toBeInTheDocument();
  });
});
