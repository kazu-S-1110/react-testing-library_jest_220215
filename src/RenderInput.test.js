import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RenderInput from './RenderInput';

afterEach(() => cleanup()); //itの中でrenderを使う度にブラウザにマウントされるのですが、cleanupを使うとマウントを解除（アンマウント）してくれます。テスト間であるコンポーネントがマウントされていることによる副作用を除去できより正確なテストを実施することにつながります。

describe('Rendering', () => {
  it('should render all the elements correctly', () => {
    render(<RenderInput />);
    expect(screen.getByRole('button')).toBeTruthy();
    expect(screen.getByPlaceholderText('Enter')).toBeTruthy(); //placeholderを取得
  });
});

describe('Input form onChange event', () => {
  it('should update input value correctly', () => {
    render(<RenderInput />);
    const inputValue = screen.getByPlaceholderText('Enter');
    userEvent.type(inputValue, 'test'); //clickとかdbclickとかある！第一引数に入口、第二引数にそこに入力する文字列）
    expect(inputValue.value).toBe('test');
  });
});
