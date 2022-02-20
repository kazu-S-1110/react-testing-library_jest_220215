import { configureStore } from '@reduxjs/toolkit';
import { render, screen, cleanup, getByText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import customCounterReducer from '../src/features/counter/customCounter/customCounterSlice';
import Redux from './Redux';

afterEach(() => {
  cleanup();
});

describe('Redux integration Test', () => {
  // ReduxとReactの結合テスト（Integration）の時はReduxのstoreもテスト用に作成する
  let store;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        customCounter: customCounterReducer,
      },
    });
  });
  it('should display value with increment by 1 per click', () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    userEvent.click(screen.getByText('+'));
    userEvent.click(screen.getByText('+'));
    userEvent.click(screen.getByText('+'));
    expect(screen.getByTestId('count-value')).toHaveTextContent(3);
  });
  it('should display value with decrement by 1 per click', () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    userEvent.click(screen.getByText('-'));
    userEvent.click(screen.getByText('-'));
    userEvent.click(screen.getByText('-'));
    expect(screen.getByTestId('count-value')).toHaveTextContent(-3);
  });
  it('should display value with incrementByAmount', () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    userEvent.type(screen.getByPlaceholderText('Enter'), '100');
    userEvent.click(screen.getByText('IncrementByAmount'));
    expect(screen.getByTestId('count-value')).toHaveTextContent(100);
  });
});
