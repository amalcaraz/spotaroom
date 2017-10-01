import { sideNavEntityInitialState } from './side-nav.reducer';
import { getSideNavStateById } from './side-nav.selectors';


describe('SideNavSelectors', () => {

  const sideNav1 = {open: false};
  const sideNav2 = {open: false};
  const rootState: any = {
    'side-nav': {
      ids: ['111', '222'],
      entities: {
        ['111']: sideNav1,
        ['222']: sideNav2,
      }
    }
  };

  describe('getSideNavStateById', () => {

    it('should return the open property of SideNavState matched by the given id', () => {

      const selector = getSideNavStateById('111');
      const result = selector(rootState);
      expect(result).toBe(rootState['side-nav'].entities['111'].open);

    });

    it('should return the open property of sideNavEntityInitialState if the the given id does not match any SideNavState', () => {

      const selector = getSideNavStateById('333');
      const result = selector(rootState);
      expect(result).toBe(sideNavEntityInitialState.open);

    });

  });

});
