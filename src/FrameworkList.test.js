import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import FrameworkList from './FrameworkList';

afterEach(() => cleanup());

describe('Rendering the list with props', () => {
  it('should render no data! when no data propped', () => {
    render(<FrameworkList />); //propsを渡さないとき
    expect(screen.getByText('No data!')).toBeInTheDocument(); //Document内にあるかどうか評価する
  });

  it('should render list item correctly', () => {
    const dummyData = [
      { id: 1, item: 'React dummy' },
      { id: 2, item: 'Vue dummy' },
      { id: 3, item: 'Svelte dummy' },
    ];
    render(<FrameworkList frameworks={dummyData} />);
    const frameworkItems = screen
      .getAllByRole('listitem')
      .map((ele) => ele.textContent);
    const dummyItems = dummyData.map((ele) => ele.item);
    expect(frameworkItems).toEqual(dummyItems);
    expect(screen.queryByText('No data!')).toBeNull();
  });
});
