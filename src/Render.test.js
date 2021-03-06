import React from 'react';
import { render, screen } from '@testing-library/react';
import Render from './Render';

describe('Rendering', () => {
  it('Should render all the elements correctly', () => {
    render(<Render />);
    // screen.debug();
    //Roleの対応サイト　 https://github.com/A11yance/aria-query#elements-to-roles
    // screen.debug(screen.getByRole('heading'));
    expect(screen.getByRole('heading')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
    // 複数あるときはgetAllByRole("Role")[N]でテストする
    expect(screen.getAllByRole('button')[0]).toBeTruthy();
    expect(screen.getAllByRole('button')[1]).toBeTruthy();
    // screen.debug(screen.getByText('Udemy'));
    expect(screen.getByText('Udemy')).toBeTruthy();
    // 無い事を確認するならtoBeNull,getByTextではNullを返さないのでqueryByを使う
    expect(screen.queryByText('Udeeeemy')).toBeNull();

    expect(screen.getByTestId('copyright')).toBeTruthy(); //testidを任意に付与して取得する
  });
});
