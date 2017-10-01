import { reducer, sideNavEntityInitialState, State } from './side-nav.reducer';
import { Destroy, Init, Toggle } from './side-nav.actions';


describe('SideNavReducer', () => {

  const sideNav1 = {open: true};
  const sideNav2 = {open: true};
  const initialState: State = {
    ids: ['111', '222'],
    entities: {
      ['111']: sideNav1,
      ['222']: sideNav2,
    }
  };

  describe('undefined action', () => {

    it('should return the default state', () => {

      const result = reducer(initialState, {} as any);
      expect(result).toBe(initialState);

    });

  });

  describe('INIT', () => {

    it('should add the new sideNavState if does not exist', () => {

      const payload = '333';
      const newAction = new Init(payload);
      const result = reducer(initialState, newAction);

      expect(result.ids).toContain(payload);
      expect(result.entities[payload]).toEqual(sideNavEntityInitialState);

    });

    it('should return the current state if the sideNavState already exists in the store', () => {

      const payload = '111';
      const newAction = new Init(payload);
      const result = reducer(initialState, newAction);

      expect(result).toBe(initialState);

    });

  });

  describe('DESTROY', () => {

    it('should remove the given sideNavState from the store', () => {

      const payload = '111';
      const newAction = new Destroy(payload);
      const result = reducer(initialState, newAction);

      expect(initialState.ids).toContain(payload);
      expect(result.ids).not.toContain(payload);

    });

    it('should return the current state if the sideNavState not exists in the store', () => {

      const payload = '333';
      const newAction = new Destroy(payload);
      const result = reducer(initialState, newAction);

      expect(result).toBe(result);

    });

  });

  describe('TOGGLE', () => {

    it('should toggle the "open" property of the given sideNavState', () => {

      const payload = '111';
      const newAction = new Toggle(payload);
      const result = reducer(initialState, newAction);

      expect(initialState.entities[payload].open).toBe(true);
      expect(result.entities[payload].open).toBe(false);

    });

    it('should return the current state if the sideNavState not exists in the store', () => {

      const payload = '333';
      const newAction = new Toggle(payload);
      const result = reducer(initialState, newAction);

      expect(result).toBe(initialState);

    });

  });

});
