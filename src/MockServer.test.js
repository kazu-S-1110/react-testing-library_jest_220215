import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import MockServer from './MockServer';

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users/1', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ username: 'Bred dummy' }));
  })
);

// このファイルが読み込まれる前に行われる処理
beforeAll(() => server.listen());
// serverを起動させるなら以下もセットで記述する（テンプレ）
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
// 全ての処理が終わったときに行われる処理
afterAll(() => server.close());

describe('Mocking API', () => {
  it('[Fetch success] should display fetched data correctly and button disabled', async () => {
    render(<MockServer />);
    userEvent.click(screen.getByRole('button'));
    expect(await screen.findByText('Bred dummy')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
  });

  it('[Fetch failure]should display error msg, no render heading and button enabled', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users/1',
        (req, res, ctx) => {
          return res(ctx.status(404));
        }
      )
    );
    render(<MockServer />);
    userEvent.click(screen.getByRole('button'));
    expect(await screen.findByTestId('error')).toHaveTextContent(
      'Fetching Failed !'
    );
    expect(screen.queryByRole('heading')).toBeNull();
    expect(screen.getByRole('button')).not.toHaveAttribute('disabled');
  });
});
