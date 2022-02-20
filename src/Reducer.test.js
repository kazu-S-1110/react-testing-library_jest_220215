import reducer, {
  increment,
  incrementByAmount,
} from './features/counter/customCounter/customCounterSlice';

describe('Reducer of ReduxToolKit', () => {
  describe('increment action', () => {
    let initialState = {
      mode: 0,
      value: 1,
    };
    it('should increment by 1 with mode 0', () => {
      const action = {
        type: increment.type,
      };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(2);
    });
    it('should increment by 100 with mode 1', () => {
      initialState = {
        mode: 1,
        value: 1,
      };
      const action = { type: increment.type };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(101);
    });
    it('should increment by 10000 with mode 2', () => {
      initialState = {
        mode: 2,
        value: 1,
      };
      const action = { type: increment.type };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(10001);
    });
  });

  describe('incrementByAmount action', () => {
    let initialState = {
      mode: 0,
      value: 1,
    };
    it('should increment by payload value with mode 0', () => {
      const action = { type: incrementByAmount.type, payload: 3 };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(4);
    });
    it('should increment by 100 * payload value with mode 1', () => {
      initialState = {
        mode: 1,
        value: 1,
      };
      const action = { type: incrementByAmount.type, payload: 4 };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(401);
    });
    it('should increment by 10000 * payload value with mode 1', () => {
      initialState = {
        mode: 2,
        value: 1,
      };
      const action = { type: incrementByAmount.type, payload: 6 };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(60001);
    });
  });
});
