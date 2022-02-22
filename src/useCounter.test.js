import { cleanup } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';
import { useCounter } from './useCounter';

afterEach(() => {
  cleanup();
});

describe('useCounter custom Hook', () => {
  it('should increment by 1', () => {
    const { result } = renderHook(() => useCounter(3));
    expect(result.current.count).toBe(3);
    // hooksの実行にはactが必要らしい
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(4);
  });
  it('should decrement by 1', () => {
    const { result } = renderHook(() => useCounter(69));
    expect(result.current.count).toBe(69);
    // hooksの実行にはactが必要らしい
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(68);
  });
  it('should double the counter value', () => {
    const { result } = renderHook(() => useCounter(69));
    expect(result.current.count).toBe(69);
    // hooksの実行にはactが必要らしい
    act(() => {
      result.current.double();
    });
    expect(result.current.count).toBe(138);
  });
  it('should triple the counter value', () => {
    const { result } = renderHook(() => useCounter(69));
    expect(result.current.count).toBe(69);
    // hooksの実行にはactが必要らしい
    act(() => {
      result.current.triple();
    });
    expect(result.current.count).toBe(207);
  });
  it('should reset to zero', () => {
    const { result } = renderHook(() => useCounter(69));
    expect(result.current.count).toBe(69);
    // hooksの実行にはactが必要らしい
    act(() => {
      result.current.reset();
    });
    expect(result.current.count).toBe(0);
  });
});
