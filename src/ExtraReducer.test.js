import reducer, {
  fetchDummy,
} from '../src/features/counter/customCounter/customCounterSlice';

describe('extraReducers', () => {
  const initialState = {
    mode: 0,
    value: 0,
  };
  it('should output 100 + payload when fulfilled', () => {
    const action = { type: fetchDummy.fulfilled.type, payload: 4 };
    const state = reducer(initialState, action);
    expect(state.value).toEqual(104);
  });
  it('should output 100 - payload when fulfilled', () => {
    const action = { type: fetchDummy.rejected.type, payload: 6 };
    const state = reducer(initialState, action);
    expect(state.value).toEqual(94);
  });
});
